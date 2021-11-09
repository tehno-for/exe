import React, {useEffect, useState} from 'react';
import moment from "moment";
import classNames from 'classnames';

import DateInput from "../FormElements/DateInput";
import EntityItemDetails from "./EntityItemDetails";

const EntityItemEdit = ({entity, item, languages, lang, sessionKey, siteUrl, onEdit}) => {
    const [showDate, setShowDate] = useState("");

    const translations = {};

    useEffect(() => {
        setShowDate(moment(item ? item["showDate"] : new Date()).format("YYYY-MM-DDTHH:mm"));
    }, [item]);

    const changePill = (event, lang) => {
        const ul = event.target.parentNode;
        [...ul.children].forEach(li=> {
            li.classList.remove('active');
        });
        event.target.classList.add('active');
        const tabs = document.querySelector(event.target.parentNode.dataset.target);
        [...tabs.children].forEach(tab=>{
            if (tab.dataset.lang===lang) {
                tab.classList.add('active');

            }else {
                tab.classList.remove('active');
            }
        })
    };

    const setTranslation = edItem => {
        translations[edItem.lang] = edItem;
        onEdit({
            id: item.id,
            showDate,
            translations
        });
    };

    return (
        <div>
            {entity && entity.hasDate === 1 && <DateInput type="datetime-local" value={showDate} onChange={event=>{setShowDate(event.target.value)}}/>}
            <ul className="tab-pills" data-target="#langTabs">
                {
                    languages.map(l => (
                        <li onClick={event=>{changePill(event, l.lang)}}
                            className={classNames("pill", {active: l.lang===lang})}
                            key={l.lang}>{l.name}</li>
                    ))
                }
            </ul>
            <div className="tabs" id="langTabs">
                {
                    item["arrTranslations"].map(translation => (
                        <EntityItemDetails className={classNames("tab-content", {active: translation.lang===lang})}
                                           key={translation.lang}
                                           siteUrl={siteUrl}
                                           entity={entity}
                                           sessionKey={sessionKey}
                                           item={translation}
                                           onChangeItem={setTranslation}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default EntityItemEdit;