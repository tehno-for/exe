import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import * as axios from "axios";

import './TechSupport.scss';
import cookie from "js-cookie";
import TextInput from "../FormElements/TextInput";
import MultiRowInput from "../FormElements/MultiRowInput";
import {NumberInput} from "../FormElements";

const replaceItems = (items, lang) => {
    return (items.map(item => {
        const translation = item.translations.find(elem => (elem.lang === lang));
        const {name} = translation ? translation : {};
        return {...item, title: name};
    }));
}

const TechSupport = ({sessionKey, config, languages, param}) => {
    const [lang, setLang] = useState("");
    const [supportBlocks, setSupportBlocks] = useState([]);
    const [currentBlock, setCurrentBlock] = useState(null);
    const [menuOrder, setMenuOrder] = useState(0);
    const [titleAz, setTitleAz] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleRu, setTitleRu] = useState("");
    const [svg, setSvg] = useState("");

    useEffect(() => {
        if (!cookie.get('lang'))
            cookie.set('lang', 'ru');
        setLang(cookie.get('lang', 'ru') || 'ru');
    }, []);

    useEffect(() => {
        axios.get(`${config["wsUrl"]}/api/categories/techSupport`)
            .then(({data}) => {
                setSupportBlocks(replaceItems(data.data, lang));
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });
    }, [sessionKey, config, languages, param, lang, currentBlock]);

    useEffect(() => {
        if (!currentBlock) {
            return;
        }
        const {translations, svg, menuOrder} = currentBlock;
        setSvg(svg);
        setMenuOrder(menuOrder);
        const trAz = translations.find(tr => (tr.lang === 'az'));
        const trEn = translations.find(tr => (tr.lang === 'en'));
        const trRu = translations.find(tr => (tr.lang === 'ru'));

        setTitleAz(trAz ? trAz.name : "");
        setTitleEn(trEn ? trEn.name : "");
        setTitleRu(trRu ? trRu.name : "");

    }, [currentBlock, lang]);


    const editBlock = block => {
        setCurrentBlock(block);
    };

    const saveTechSupport = () => {
        const block = {
            sessionKey,
            svg,
            menuOrder,
            translations: [
                {lang: 'az', name: titleAz},
                {lang: 'en', name: titleEn},
                {lang: 'ru', name: titleRu}
            ]
        }

        axios.put(`${config["wsUrl"]}/api/categories/${currentBlock.id}`, block)
            .then(({data}) => {
                setCurrentBlock(null);
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });
    }

    return (
        <div>
            <ul className="support-blocks">
                {supportBlocks && supportBlocks.map(block => (
                    <li key={block.id}
                        className="m-1 support-blocks__item" >
                        <h2>{block.title}</h2>
                        <div dangerouslySetInnerHTML={{__html: block.svg}}></div>
                        <button className="btn btn-secondary" onClick={()=>{editBlock(block)}}>Изменить</button>
                        <Link to={`/module/entity/${block.name}`} className="link">Перейти к элементам</Link>
                    </li>
                ))
                }
            </ul>
            {currentBlock && <div className="tech-support-edit">
                <div>Индекс: <NumberInput value={menuOrder} onChange={event => {setMenuOrder(event.target.value)}} /></div>
                Azerbaijani: <TextInput value={titleAz} onChange={event => {setTitleAz(event.target.value)}} />
                English: <TextInput value={titleEn} onChange={event => {setTitleEn(event.target.value)}} />
                Russian: <TextInput value={titleRu} onChange={event => {setTitleRu(event.target.value)}} />
                SVG: <MultiRowInput value={svg} onChange={event => {setSvg(event.target.value)}}  />
                <button className="btn btn-primary" onClick={saveTechSupport}>Сохранить</button>
                <button className="btn" onClick={()=>{setCurrentBlock(null)}}>Закрыть</button>
            </div>}
        </div>
    )
};

export default TechSupport;