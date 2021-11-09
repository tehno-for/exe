import React, {useEffect, useState} from 'react';
import classNames from 'classnames';

import {TextInput} from "../FormElements";

const EntityDetails = ({className, item, onChangeItem}) => {
    const [seoKeywords, setSeoKeywords] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [h1Title, setH1Title] = useState("");

    useEffect(()=>{
        setH1Title(item.h1Title);
        setSeoKeywords(item.seoKeywords);
        setSeoDescription(item.seoDescription);
        setSeoTitle(item.seoTitle);
    },[item]);

    useEffect( () => {
        onChangeItem({
            lang: item.lang,
            seoKeywords,
            seoDescription,
            seoTitle,
            h1Title
        })
    }, [ seoDescription, seoKeywords, h1Title, seoTitle, item, onChangeItem]);

    return (
        <div className={classNames(className, "entity-item-details")} data-lang={item.lang}>
            <label htmlFor={`seoKeywordsEntityDetail${item.lang}`}>SEO Keywords</label>
            <TextInput id={`seoKeywordsEntityDetail${item.lang}`} value={seoKeywords} onChange={event=>{setSeoKeywords(event.target.value);}} />
            <label htmlFor={`seoDescriptionEntityDetail${item.lang}`}>SEO Description</label>
            <TextInput id={`seoDescriptionEntityDetail${item.lang}`} value={seoDescription} onChange={event=>{setSeoDescription(event.target.value);}} />
            <label htmlFor={`titleEntityDetail${item.lang}`}>Заголовок</label>
            <TextInput id={`titleEntityDetail${item.lang}`} value={seoTitle} onChange={event=>{setSeoTitle(event.target.value);}} />
            <label htmlFor={`h1TitleEntityDetail${item.lang}`}>Заголовок H1</label>
            <TextInput id={`h1TitleEntityDetail${item.lang}`} value={h1Title} onChange={event=>{setH1Title(event.target.value);}} />

        </div>
    )
};

export default EntityDetails;