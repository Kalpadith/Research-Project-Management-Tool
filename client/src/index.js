import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";

import {Provider} from 'react-redux';

axios.defaults.baseURL = 'http://localhost:5000';


import index from './@core/store';
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <Provider store={index}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

