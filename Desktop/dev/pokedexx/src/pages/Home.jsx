import React, { useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);


    const getPokemon = async () => {
        try {
        setLoading(true);
        const response = await axios.get('https://tyradex.vercel.app/api/v1/pokemon');
        setPokemon(response.data.results);
        setLoading(false);
    } catch (error) {
        console.log('Erreur lors de la récupération des Pokémons' ,error);
    }  finally {
        setLoading(false);
    } 
};
    return (
        <div>
            <button onClick={getPokemon}>Get Pokemon</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {pokemon.map((pokemon) => {
                        return (
                            <PokemonCard
                                key={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.image}
                                pokedex_id={pokemon.pokedex_id}
                                types={pokemon.types}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    );
};

    export default Home;