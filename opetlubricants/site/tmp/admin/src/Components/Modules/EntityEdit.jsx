import React from 'react';
import classNames from 'classnames';

import EntityDetails from "./EntityDetails";

const EntityEdit = ({entity, languages, lang, onEdit}) => {

    const translations = {};

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
        onEdit(translations);
    };

    return (
        <div>
            <ul className="tab-pills" data-target="#langTabsItem">
                {
                    languages.map(l => (
                        <li onClick={event=>{changePill(event, l.lang)}}
                            className={classNames("pill", {active: l.lang===lang})}
                            key={l.lang}>{l.name}</li>
                    ))
                }
            </ul>
            <div className="tabs" id="langTabsItem">
                {
                    entity["arrParams"].map(translation => (
                        <EntityDetails className={classNames("tab-content", {active: translation.lang===lang})}
                                           key={translation.lang}
                                           item={translation}
                                           onChangeItem={setTranslation}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default EntityEdit;