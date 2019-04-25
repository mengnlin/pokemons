import { type } from "os";


export const fetchAllPokemon = () => (
    $.ajax({
        type: 'GET',
        url: '/api/pokemon'
    })
);
