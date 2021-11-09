import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';

import './SCSS/index.scss';
import './SCSS/common.scss';
import './SCSS/ico-fonts.scss';

console.log('%cATTENTION', 'color: red; font-family: sans-serif; font-size: 40px');

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
