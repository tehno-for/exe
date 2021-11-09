import React, {useState} from 'react';
import axios from 'axios';

import './LoginForm.scss';

const LoginForm = ({config, onSuccessLogin, onErrorLogin, getUsername}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const loginRequest = {username, password};
        axios.post(`${config["wsUrl"]}/system/login`, loginRequest)
            .then(({data}) => {
                if (data.error) {
                    onErrorLogin(data.error);
                } else {
                    onSuccessLogin(data.data);
                    getUsername(username);
                }
            })
            .catch(({error}) => {
                console.error(error);
            });
    };

    return (
        <div className="form login-form">
            <div className="form__fieldBox">
                <svg className="form__icon prepend" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
                <input type="text" id="loginUsername" aria-placeholder="Username" placeholder="Username"
                       value={username} onChange={event => setUsername(event.target.value)}
                       className="form__input validate" data-validation="regex" data-regex=""/>
                <div className="form__error">error</div>
            </div>
            <div className="form__fieldBox">
                <svg className="form__icon prepend" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 48c79.529 0 144 64.471 144 144s-64.471 144-144 144c-19 0-37.076-3.675-53.66-10.34L224 368h-32v48h-48v48H48v-96l134.2-134.2A144 144 0 0 1 176 192c0-79.529 64.471-144 144-144m0-48C213.965 0 128 85.954 128 192c0 8.832.602 17.623 1.799 26.318L7.029 341.088A24.005 24.005 0 0 0 0 358.059V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-24h24c13.255 0 24-10.745 24-24v-20l40.049-40.167C293.106 382.604 306.461 384 320 384c106.035 0 192-85.954 192-192C512 85.965 426.046 0 320 0zm0 144c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"/></svg>
                <input type="password" id="loginPassword" aria-placeholder="Password" placeholder="Password"
                       value={password} onChange={event => setPassword(event.target.value)}
                       className="form__input validate" data-validation="regex" data-regex=""/>
                <div className="form__error">error</div>
            </div>
            <div className="form__buttonBox">
                <button onClick={login} className="form__btn">Sign In</button>
            </div>
        </div>
    )
};

export default LoginForm;
