import React from 'react';
import {render} from 'react-dom';
import {GlobalStyles} from "./global-styles";
import 'normalize.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import { firebase } from './lib/firebase.prod';
import {FirebaseContext} from './context/firebase';


render(
    <React.StrictMode>
        <HashRouter>
        <FirebaseContext.Provider value={{ firebase}}>
            <GlobalStyles/> 
            <App />
        </FirebaseContext.Provider>
        </HashRouter>
        </React.StrictMode>
    ,
    document.getElementById('root')
);

