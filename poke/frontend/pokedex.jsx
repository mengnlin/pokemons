import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import configureStore from './store/store';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { requestAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore(); 
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, root);
});