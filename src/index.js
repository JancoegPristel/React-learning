import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


import 'antd/dist/antd.min.css';
import '@assets/css/tailwind.css';
import '@assets/css/antd.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    BrowserRouter >
    <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode> <
    /BrowserRouter>
);

reportWebVitals();