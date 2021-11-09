import React, {useState, useEffect} from 'react';
import {Route} from "react-router-dom";
import axios from "axios";
import cookie from "js-cookie";

import {Modules, Sidebar} from "../index";

import './MainApp.scss';

const MainApp = ({sessionKey, config, onLogout}) => {
    const [languages, setLanguages] = useState([]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (!cookie.get('lang'))
            cookie.set('lang', 'ru');
    }, []);

    useEffect(() => {
        axios.post(`${config["wsUrl"]}/system/getLanguagesByCompany`, {sessionKey})
            .then(({data}) => {
                if (data.error) {
                    onLogout();
                } else {
                    setLanguages(data.data);
                }
            });
        const cookieUsername = cookie.get('username');
        if (cookieUsername) setUsername(cookieUsername)
    }, [sessionKey, config, onLogout]);


    return (
        <main className="main">
            <Sidebar sessionKey={sessionKey}
                     config={config}
                     username={username}
                     onLogout={onLogout} />
            <header className="header">

            </header>
            <section className="module">
                <Route path="/module/:module/:param" children={
                    <Modules
                        sessionKey={sessionKey}
                        config={config}
                        languages={languages}
                    />
                } />
            </section>
            <footer className="footer">

            </footer>
        </main>
    )
};

export default MainApp;
