import React, {useEffect, useState} from 'react';
import axios from "axios";
import cookie from 'js-cookie';
import {SearchInput, TextInput} from "../FormElements";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faPen} from "@fortawesome/free-solid-svg-icons";

import {Modal} from "../index";

import './Settings.scss';

const Translations = ({sessionKey, config, languages}) => {
    const [lang, setLang] = useState("");
    const [items, setItems] = useState([]);
    const [pages, setPages] = useState([]);
    const [page, setPage] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [stateModalEditTranslation, setStateModalEditTranslation] = useState(false);
    const [translationName, setTranslationName] = useState("");
    const [translationAz, setTranslationAz] = useState("");
    const [translationEn, setTranslationEn] = useState("");
    const [translationRu, setTranslationRu] = useState("");


    useEffect(() => {
        setPage(0);
        if (!cookie.get('lang'))
            cookie.set('lang', 'ru');
        setLang(cookie.get('lang', 'ru') || 'ru' );
    }, []);

    useEffect(() => {
        const genPages = [];
        for(let i=0; i<itemCount/config["itemLimit"]; i++) {
            genPages.push(i);
        }
        setPages(genPages);
    }, [itemCount, config]);


    useEffect(() => {

        axios.post(`${config["wsUrl"]}/system/translations/getItemCount`, {sessionKey})
            .then(({data}) => {
                if(data.data) {
                    setItemCount(data.data["itemCount"]);
                }
            });

        axios.post(`${config["wsUrl"]}/system/translations/getItems`, {sessionKey, page, limit: config["itemLimit"]})
            .then(({data}) => {
                if(data.data) {
                    setItems(data.data.map(item => {
                        const tmpTrans = item.arrTranslations.find(obj => {return obj.lang===lang});
                        item.currentTranslation = tmpTrans ? tmpTrans.body : "";
                        return item;
                    }));
                }
            });
    }, [page, lang, config, sessionKey]);

    const changePage = event => {
        const clicked = Number(event.target.dataset.page);
        if (page !== clicked){
            setPage(clicked);
        }
    };

    const showModalEditTranslation = name => {
        setTranslationName(name);
        const item = items.find(obj => {
            return obj.name === name
        });
        if (item.arrTranslations) {
            setTranslationAz(item.arrTranslations.find(obj => {return obj.lang==="az"}).body);
            setTranslationEn(item.arrTranslations.find(obj => {return obj.lang==="en"}).body);
            setTranslationRu(item.arrTranslations.find(obj => {return obj.lang==="ru"}).body);
        }
        setStateModalEditTranslation(true);
    };

    const onSuccessEdit = () => {


        setStateModalEditTranslation(!stateModalEditTranslation);
        axios.post(`${config["wsUrl"]}/system/translations/editItemValues`,
            {
                sessionKey, name: translationName,
                values: [
                    {lang: "az", body: translationAz},
                    {lang: "en", body: translationEn},
                    {lang: "ru", body: translationRu}]

            })
            .then(({data}) => {

                if (data.data) {
                    const newItems = items.map(item => {
                        if (item.name === data.data.name) {
                            item = data.data;
                            const tmpTrans = item.arrTranslations.find(obj => {return obj.lang===lang});
                            item.currentTranslation = tmpTrans ? tmpTrans.body : "";
                        }
                        return item;
                    });
                    setItems(newItems);
                }
                setStateModalEditTranslation(false);
            });
    };

    const searchItemsByText = text => {

        axios.post(`${config["wsUrl"]}/system/translations/getItemsByText`,
            {sessionKey, text})
            .then(({data}) => {
                if (data.data) {
                    setItems(data.data);
                }
            });
    };

    const changeTranslation = event => {
        const language = event.target.dataset.lang;
        const value = event.target.value;
        if (language === 'az') setTranslationAz(value);
        if (language === 'en') setTranslationEn(value);
        if (language === 'ru') setTranslationRu(value);
    };

    return (
        <div className="settings">

            <div className="settings__header">
                <SearchInput placeholder="Поиск" onSearch={searchItemsByText} />
            </div>
            <table className="table table-hover table-striped settings__table">
                <thead className="thead">
                <tr>
                    <th className="th">Настройка</th>
                    <th className="th">Значение</th>
                    <th className="th"><FontAwesomeIcon icon={faCogs} /></th>
                </tr>
                </thead>
                <tbody className="tbody">
                {

                    items.map(item => (
                        <tr key={item.name}>
                            <td className="text-nowrap settings__description">{item.description}</td>
                            <td>{item.currentTranslation}</td>
                            <td><FontAwesomeIcon title="Изменить" className="ico-edit clickable" onClick={()=>showModalEditTranslation(item.name)} icon={faPen} /></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <ul className="settings__pages">
                {
                    pages.map(pg => (
                        <li className="settings__page-item" key={pg} data-page={pg} onClick={changePage}>{pg+1}</li>
                    ))
                }
            </ul>
            <Modal show={stateModalEditTranslation}
                   headText="Изменить"
                   dismissText="Закрыть"
                   successText="Сохранить"
                   onSuccess={onSuccessEdit}
                   onDismiss={() => {setStateModalEditTranslation(false)}} >
                {
                    languages.map(language => (
                        <div key={language.lang}>
                            {language.name}:
                            <TextInput data-lang={language.lang}
                                       value = {
                                           (language.lang === "az") ? translationAz : (language.lang === "en" ? translationEn : translationRu)
                                       }
                                       onChange={changeTranslation}
                            />
                        </div>
                    ))
                }
            </Modal>
        </div>
    )
};

export default Translations;