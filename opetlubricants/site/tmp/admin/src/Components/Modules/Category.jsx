import React, {useEffect, useState} from 'react';
import axios from "axios";
import cookie from "js-cookie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faPen, faTrash, faList} from "@fortawesome/free-solid-svg-icons";
import {NumberInput, TextInput} from "../FormElements";
import {Modal} from "../index";
import MultiRowInput from "../FormElements/MultiRowInput";
import Combobox from "../FormElements/Combobox";
import {Link} from "react-router-dom";

const replaceItems = (items, lang) => {
    return (items.map(item => {
        const {name} = item.translations ? item.translations.find(elem => (elem.lang === lang)) : item;
        const {name:objectName} = item.object ? item.object.translations.find(elem => (elem.lang === lang)) : {name: '-'};

        return {...item, root: item.name, name, objectName};
    }));
}

const Category = ({sessionKey, config, languages, param}) => {
    const [lang, setLang] = useState("");
    const [items, setItems] = useState([]);
    const [itemToEdit, setItemToEdit] = useState({});
    const [stateModalEditCategory, setStateModalEditCategory] = useState(false);
    const [opetObjects, setOpetObjects] = useState([]);
    const [objectId, setObjectId] = useState(0);
    const [iconClass, setIconClass] = useState("");
    const [svg, setSvg] = useState("");
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
        const request = param === 'footer' ? `${config["wsUrl"]}/api/categories/footerCategories` : `${config["wsUrl"]}/api/categories/`;
        axios.get(request)
            .then(({data}) => {
                if (lang && data.data && data.data.length>0) {
                    setItems(replaceItems(data.data, lang));
                }
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });

        if (param === 'footer') {
            setOpetObjects([{id: 0, name: '-', translations: [{lang, name: '-'}]}]);
        } else {
            axios.get(`${config["wsUrl"]}/api/opetObjects/`)
                .then(({data}) => {
                    if (lang && data.data && data.data.length > 0) {
                        setOpetObjects(data.data.map(item => {
                            const {name} = item.translations.find(elem => (elem.lang === lang));
                            return {...item, name};
                        }));
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert(`Произошла ошибка, код ошибки в консоли`);
                });
        }
    }, [param, lang, config, sessionKey]);

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

        setIconClass(item.icon ? item.icon : '');
        setSvg(item.svg ? item.svg : '');
        setObjectId(item.objectId ? item.objectId : 0);

        setItemToEdit(item);
        setStateModalEditCategory(true);
    };

    const deleteItem = id => {

        if (!window.confirm('Вы уверены?')) {
            return;
        }

        axios.delete(`${config["wsUrl"]}/api/categories/${id}?sessionKey=${sessionKey}`)
            .then(({data}) => {
                setItems(replaceItems(items.filter(item => (
                    id !== item.id
                )), lang));
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });
    };

    const changeTranslation = event => {
        const language = event.target.dataset.lang;
        const value = event.target.value;
        if (language === 'az') setTranslationAz(value);
        if (language === 'en') setTranslationEn(value);
        if (language === 'ru') setTranslationRu(value);
    }

    const onSuccessEdit = () => {
        const item = {
            id: itemToEdit.id,
            objectId,
            icon: iconClass,
            svg,
            menuOrder,
            translations: [
                {lang: 'az', name: translationAz},
                {lang: 'en', name: translationEn},
                {lang: 'ru', name: translationRu}
            ]
        };

        if (item.id === 0) {
            axios.post(`${config["wsUrl"]}/api/categories/`, {...item, sessionKey})
                .then(({data}) => {
                    setItems(replaceItems([...items, data.data], lang));
                    setStateModalEditCategory(false)
                })
                .catch(err => {
                    console.error(err);
                    alert(`Произошла ошибка, код ошибки в консоли`);
                });
        } else {
            axios.put(`${config["wsUrl"]}/api/categories/${item.id}`, {...item, sessionKey})
                .then(({data}) => {
                    setItems(replaceItems(items.map(item => (
                        item.id === data.data.id ? data.data : item
                    )), lang));
                    setStateModalEditCategory(false)
                })
                .catch(err => {
                    console.error(err);
                    alert(`Произошла ошибка, код ошибки в консоли`);
                });
        }
    };

    return (

        <div className="category">
            <div className="category">
                <button className="btn btn-success" onClick={()=>{showItemAddEditModal({id: 0})}}>Создать</button>
            </div>
            <table className="table table-hover table-striped category__table">
                <thead className="thead">
                <tr>
                    {param !== 'footer' && <th>Объект</th>}
                    <th>Название</th>
                    {param === 'footer' && <th>Индекс</th>}
                    {param !== 'footer' && <th>Класс Иконки</th>}
                    {param !== 'footer' && <th>SVG</th>}
                    <th className="th"><FontAwesomeIcon icon={faCogs}/></th>
                </tr>
                </thead>
                <tbody className="tbody">
                {

                    items.map(item => (
                        <tr key={item.id}>
                            {param !== 'footer' && <td>{item.objectName}</td>}
                            <td>{item.name}</td>
                            {param === 'footer' && <td>{item.menuOrder}</td>}
                            {param !== 'footer' && <td>{item.icon}</td>}
                            {param !== 'footer' && <td dangerouslySetInnerHTML={{ __html: item.svg}} />}
                            <td>
                                <FontAwesomeIcon title="Изменить"
                                                 className="ico-edit clickable"
                                                 icon={faPen}
                                                 onClick={() => {
                                                     showItemAddEditModal(item)
                                                 }}
                                />
                                {param === 'footer' && <Link to={`/module/entity/${item.root}`} className="link">
                                    <FontAwesomeIcon title="Перейти к элементам"
                                                     className="ml-2 ico-link clickable"
                                                     icon={faList}
                                    /></Link>}
                                <FontAwesomeIcon title="Удалить"
                                                 className="ml-2 ico-delete clickable"
                                                 icon={faTrash}
                                                 onClick={() => {
                                                     deleteItem(item.id)
                                                 }}
                                />
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <Modal show={stateModalEditCategory}
                   headText="Названия"
                   dismissText="Закрыть"
                   successText="Сохранить"
                   onSuccess={onSuccessEdit}
                   onDismiss={() => {setStateModalEditCategory(false)}} >
                {param !== 'footer' && <div>Object: <Combobox options={opetObjects} value={objectId} onChange={event => {
                    setObjectId(event.target.value)
                }} /></div>}
                {param !== 'footer' && <div>Icon: <TextInput value={iconClass} onChange={event=> {
                    setIconClass(event.target.value)
                }}/></div>}
                {param !== 'footer' && <div>SVG: <MultiRowInput value={svg} onChange={event=> {
                    setSvg(event.target.value)
                }}/></div>}
                <div>Индекс: <NumberInput value={menuOrder} onChange={event => {setMenuOrder(event.target.value)}} /></div>
                <div>Az: <TextInput data-lang="az" value={translationAz} onChange={changeTranslation} /></div>
                <div>En: <TextInput data-lang="en" value={translationEn} onChange={changeTranslation} /></div>
                <div>Ru: <TextInput data-lang="ru" value={translationRu} onChange={changeTranslation} /></div>
            </Modal>
        </div>
    )
};

export default Category;