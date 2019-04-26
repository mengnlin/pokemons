import React from 'react';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.props.requestSinglePokemon(this.props.match.params.pokemonId);
        }
    }

    render() {
        const { pokemon } = this.props;
        return(
            <figure>
                <img src={pokemon.image_url} alt={pokemon.name} />
            </figure>
        );
    }
    
}

export default PokemonDetail;