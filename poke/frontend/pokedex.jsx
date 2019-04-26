import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import configureStore from './store/store';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { requestAllPokemon } from './actions/pokemon_actions';
import Root from './components/root';
import {HashRouter , Route } from 'react-router-dom';
import { fetchSinglePokemon } from './util/api_util';
import { receiveSinglePokemon } from './actions/pokemon_actions';
import { requestSinglePokemon } from './actions/pokemon_actions';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore(); 
    // window.getState = store.getState; 
    // window.dispatch = store.dispatch;
    // window.requestSinglePokemon = requestSinglePokemon;
    // // window.fetchAllPokemon = fetchAllPokemon;
    // // window.receiveAllPokemon = receiveAllPokemon;
    // window.receiveSinglePokemon = receiveSinglePokemon;
    // window.fetchSinglePokemon = fetchSinglePokemon;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});