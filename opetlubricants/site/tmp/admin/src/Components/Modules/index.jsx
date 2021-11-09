import React from 'react';
import {useParams} from 'react-router-dom';

import Settings from "./Settings";
import Translations from "./Translations";
import Entity from "./Entity";
import OpetObject from "./OpetObject";
import Category from "./Category";
import Product from "./Product";

import './Modules.scss';
import '../FormElements/FormElements.scss';
import TechSupport from "./TechSupport";

const Modules = ({sessionKey, config, languages}) => {
    const {module, param} = useParams();

    switch (module) {

        case 'settings': {
            return (
                <Settings sessionKey={sessionKey}
                          config={config} />
            );
        }

        case 'translations': {
            return (
                <Translations sessionKey={sessionKey}
                              config={config}
                              languages={languages} />
            );
        }

        case 'entity': {
            return (
                <Entity sessionKey={sessionKey}
                        config={config}
                        languages={languages}
                        param={param}/>
            );
        }

        case 'object': {
            return (
                <OpetObject sessionKey={sessionKey}
                            config={config}
                            languages={languages}
                            param={param}/>
            );
        }


        case 'category': {
            return (
                <Category sessionKey={sessionKey}
                            config={config}
                            languages={languages}
                            param={param}/>
            );
        }

        case 'product': {
            return (
                <Product sessionKey={sessionKey}
                         config={config}
                         languages={languages}
                         param={param}/>
            );
        }

        case 'tech-support': {
            return (
                <TechSupport sessionKey={sessionKey}
                         config={config}
                         languages={languages}
                         param={param}/>
            );
        }

        default: {
            return (
                <div>


                </div>
            )
        }
    }
}

export default Modules;