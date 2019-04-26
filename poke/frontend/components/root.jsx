import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container'
import {HashRouter, Route} from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import {Switch} from 'react-router-dom';

const Root =({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
                <Route exact path='/' component={PokemonIndexContainer} />
            </Switch>
         </HashRouter>
    </Provider>
);

export default Root;