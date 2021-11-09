import React, {useEffect, useState} from 'react';
import axios from "axios";
import cookie from "js-cookie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {NumberInput, TextInput} from "../FormElements";
import {Modal} from "../index";

const replaceItems = (items, lang) => {
    return (items.map(item => {
        item.name = item.translations.find(elem => (elem.lang === lang)).name;
        for (const t of item.translations) item[t.lang] = t.name;
        return item;
    }));
}

const OpetObject = ({sessionKey, config, languages, param}) => {
    const [lang, setLang] = useState("");
    const [items, setItems] = useState([]);
    const [itemToEdit, setItemToEdit] = useState({});
    const [stateModalEditObjectTranslation, setStateModalEditObjectTranslation] = useState(false);
    const [menuOrder, setMenuOrder] = useState(0);
    const [translationAz, setTranslationAz] = useState('');
    const [translationEn, setTranslationEn] = useState('');
    const [translationRu, setTranslationRu] = useState('');

    useEffect(() => {
        if (!cookie.get('lang'))
            cookie.set('lang', 'ru');
        setLang(cookie.get('lang', 'ru') || 'ru');
    }, []);

    useEffect(() => {
        axios.get(`${config["wsUrl"]}/api/opetObjects/`)
            .then(async ({data}) => {
                if (lang && data.data && data.data.length>0) {
                    setItems(replaceItems(data.data, lang));
                }
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });

    }, [lang, config, sessionKey]);

    const changeTranslation = event => {
        const language = event.target.dataset.lang;
        const value = event.target.value;
        if (language === 'az') setTranslationAz(value);
        if (language === 'en') setTranslationEn(value);
        if (language === 'ru') setTranslationRu(value);
    }

    const showItemAddEditModal = item => {

        if (item && item.id && item.translations) {
            setMenuOrder(item.menuOrder);
            setTranslationAz(item.translations.find(obj => {return obj.lang==="az"}).name);
            setTranslationEn(item.translations.find(obj => {return obj.lang==="en"}).name);
            setTranslationRu(item.translations.find(obj => {return obj.lang==="ru"}).name);
        } else {
            setMenuOrder(0);
            setTranslationAz('');
            setTranslationEn('');
            setTranslationRu('');
        }

        setItemToEdit(item);
        setStateModalEditObjectTranslation(true);
    };

    const onSuccessEdit = () => {
        const item = {
            id: itemToEdit.id,
            menuOrder,
            details: [
                {lang: 'az', name: translationAz},
                {lang: 'en', name: translationEn},
                {lang: 'ru', name: translationRu}
            ]
        };

        if (item.id === 0) {
            axios.post(`${config["wsUrl"]}/api/opetObjects/`, {...item, sessionKey})
                .then(({data}) => {
                    setItems(replaceItems([...items, data.data], lang));
                    setStateModalEditObjectTranslation(false)
                })
                .catch(err => {
                    console.error(err);
                    alert(`Произошла ошибка, код ошибки в консоли`);
                });
        } else {
            axios.put(`${config["wsUrl"]}/api/opetObjects/${item.id}`, {...item, sessionKey})
                .then(({data}) => {
                    setItems(replaceItems(items.map(item => (
                        item.id === data.data.id ? data.data : item
                    )), lang));
                    setStateModalEditObjectTranslation(false)
                })
                .catch(err => {
                    console.error(err);
                    alert(`Произошла ошибка, код ошибки в консоли`);
                });
        }
    };

    const deleteItem = id => {

        if (!window.confirm('Вы уверены?')) {
            return;
        }

        axios.delete(`${config["wsUrl"]}/api/opetObjects/${id}?sessionKey=${sessionKey}`)
            .then(({data}) => {
                setItems(replaceItems(items.filter(item => (
                    id !== item.id
                )), lang));
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });
    }

    return (

        <div className="opet-object">
            <div className="opet-object">
                <button className="btn btn-success" onClick={()=>{showItemAddEditModal({id: 0})}}>Создать</button>
            </div>
            <table className="table table-hover table-striped opet-object__table">
                <thead className="thead">
                <tr>
                    <th>Название</th>
                    <th>Индекс</th>
                    <th className="th"><FontAwesomeIcon icon={faCogs}/></th>
                </tr>
                </thead>
                <tbody className="tbody">
                {
                    items.map(item => (
                        <tr key={item.id}>
                            <td className="text-nowrap opet-object__name">{item.name}</td>
                            <td>{item.menuOrder}</td>
                            <td><FontAwesomeIcon title="Изменить"
                                                 className="ico-edit clickable"
                                                 icon={faPen}
                                                 onClick={()=>{showItemAddEditModal(item)}}
                            /><FontAwesomeIcon title="Удалить"
                                               className="ml-2 ico-delete clickable"
                                               icon={faTrash}
                                               onClick={()=>{deleteItem(item.id)}}
                            /></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Modal show={stateModalEditObjectTranslation}
                   headText="Названия"
                   dismissText="Закрыть"
                   successText="Сохранить"
                   onSuccess={onSuccessEdit}
                   onDismiss={() => {setStateModalEditObjectTranslation(false)}} >
                <div>Индекс: <NumberInput value={menuOrder} onChange={event => {setMenuOrder(event.target.value)}} /></div>
                <div>Az: <TextInput data-lang="az" value={translationAz} onChange={changeTranslation} /></div>
                <div>En: <TextInput data-lang="en" value={translationEn} onChange={changeTranslation} /></div>
                <div>Ru: <TextInput data-lang="ru" value={translationRu} onChange={changeTranslation} /></div>
            </Modal>
        </div>
    )
};

export default OpetObject;