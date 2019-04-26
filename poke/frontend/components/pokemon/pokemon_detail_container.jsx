import React from 'react';
import PokemonDetail from './PokemonDetail'
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps)  => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
});

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
