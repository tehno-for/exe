import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import cookie from "js-cookie";

import './Sidebar.scss';
import {Modal} from "../index";
import {TextInput} from "../FormElements";

const Sidebar = ({sessionKey, config, onLogout, username}) => {
    const [menu, setMenu] = useState([]);
    const [stateModalChangePassword, setStateModalChangePassword] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");


    useEffect(() => {
        axios.post(`${config["wsUrl"]}/system/getModules`, {sessionKey})
            .then(({data}) => {
                if (data.error) {
                    onLogout();
                } else {
                    setMenu(data.data);
                }
            });
    }, [sessionKey, config, onLogout]);

    const setActiveMenu = id => {
        for (const menuItem of [...document.querySelectorAll('.menu__link')]) {
            menuItem.classList.remove('active');
        }

        document.querySelector(`.menu__link[data-id="${id}"]`).classList.add('active');
    };

    const changePassword = () => {
        if (!newPassword || newPassword !== newPasswordRepeat) {
            return alert('Новый пароль пустой или не совпадает с повтором');
        }
        const request = {
            username, password, newPassword
        }


        axios.post(`${config["wsUrl"]}/system/changePassword`, request)
            .then(({data}) => {
                if (data.data && data.data.id) {
                    onLogout();
                } else {
                    alert('Произошла ошибка при смене пароля, возожно старый пароль был введен неправильно');
                }
            });
    }

    return (
        <aside className="sidebar">
            <div className="logo-bar">
                <a href={cookie.get('siteUrl')} rel="noopener noreferrer" target="_blank" className="link">
                <img className="logo" src={`${cookie.get('siteUrl')}${cookie.get('logo')}`} alt=""/></a>
            </div>
            <ul className="menu">
            {
                menu.map(menuItem => (
                    <li key={menuItem.id} className="menu__item">
                        <Link className="menu__link" data-id={menuItem.id}
                              to={`/module/${menuItem.module}/${menuItem.subModule}`}
                              onClick={()=>{setActiveMenu(menuItem.id)}}>{menuItem.description}</Link>
                    </li>
                ))
            }
            </ul>
            <button className="btn btn-password" onClick={()=>setStateModalChangePassword(true)}>Сменить пароль</button>

            <button className="btn btn-logout" onClick={onLogout}>Выйти</button>

            <Modal
                show={stateModalChangePassword}
                dialogSize="modal-sm"
                headText="Сменить пароль"
                dismissText="Закрыть"
                successText="Сменить"
                onSuccess={changePassword}
                onDismiss={() => {setStateModalChangePassword(false)}} >
                <div>Старый пароль: <TextInput type="password" value={password} onChange={event=>setPassword(event.target.value)} /></div>
                <div>Новый пароль: <TextInput type="password" value={newPassword} onChange={event=>setNewPassword(event.target.value)} /></div>
                <div>Повторите: <TextInput type="password" value={newPasswordRepeat} onChange={event=>setNewPasswordRepeat(event.target.value)} /></div>
            </Modal>
        </aside>
    )
};

export default Sidebar;
