import React, {useEffect, useState} from 'react';
import cookie from "js-cookie";


import {LoginForm, MainApp} from './Components';

const {environment} = require('./.env');
const config = require('./config')[environment];

function App() {
  const [sessionKey, setSessionKey] = useState(cookie.get('sessionKey'));

  //
  useEffect(() => {
    setSessionKey(cookie.get('sessionKey'));
  }, []);

  useEffect(() => {
    if (sessionKey) {
      cookie.set('sessionKey', sessionKey);
    } else {
      cookie.remove('sessionKey');
    }
  }, [sessionKey]);

  const setUsername = username => {
      cookie.set('username', username);
  }

  const logout = () => {
    setSessionKey("");
  };

  const errorLogin = error => {
    console.log(error);
  };

  const successLogin = details => {
    const {logo, sessionKey, siteUrl, itemLimit} = details;
    cookie.set('logo', logo);
    cookie.set('siteUrl', siteUrl);
    cookie.set('itemLimit', itemLimit);
    setSessionKey(sessionKey);
  }

  return (
    <div className="App">
      {sessionKey && <MainApp sessionKey={sessionKey}
                              config={config}
                              onLogout={logout}/>}
      {!sessionKey && <LoginForm config={config}
                                 onErrorLogin={errorLogin}
                                 getUsername={setUsername}
                                 onSuccessLogin={successLogin} />}
    </div>
  );
}

export default App;
