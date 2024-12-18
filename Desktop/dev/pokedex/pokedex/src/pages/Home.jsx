// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://tyradex.vercel.app/api/v1/pokemon');
        if (response.data.results) {
          setPokemonList(response.data.results);
        } else {
          console.error('Données Pokémon manquantes');
          setPokemonList([]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon :', error);
        setPokemonList([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Pokédex</h1>
      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : pokemonList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pokemonList.map((poke) => (
            <PokemonCard
              key={poke.pokedex_id}
              name={poke.name?.fr || 'Inconnu'}
              image={poke.sprites?.regular || 'https://via.placeholder.com/150'}
              pokedex_id={poke.pokedex_id}
              types={poke.types?.map((type) => type.name) || []}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Aucun Pokémon disponible.</p>
      )}
    </div>
  );
};

export default Home;
