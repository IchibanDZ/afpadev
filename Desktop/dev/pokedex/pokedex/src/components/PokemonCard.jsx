// PokemonCard.jsx
import React from 'react';

const PokemonCard = ({ name, image, pokedex_id, types }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain mb-4"
      />
      <p className="text-gray-500 text-sm">N° {pokedex_id || 'Inconnu'}</p>
      <h1 className="text-lg font-bold capitalize mb-2">{name}</h1>
      <div className="flex justify-center gap-2">
        {types.length > 0 ? (
          types.map((type, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-white text-sm ${getTypeColor(type)}`}
            >
              {type}
            </span>
          ))
        ) : (
          <span className="px-3 py-1 rounded-full text-gray-500 text-sm">Aucun type</span>
        )}
      </div>
    </div>
  );
};

// Helper function to assign colors to Pokémon types
const getTypeColor = (type) => {
  const colors = {
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-500',
    poison: 'bg-purple-500',
    flying: 'bg-indigo-400',
    bug: 'bg-lime-500',
    normal: 'bg-gray-400',
    ground: 'bg-orange-500',
    rock: 'bg-gray-700',
    psychic: 'bg-pink-500',
    ice: 'bg-cyan-500',
    dragon: 'bg-indigo-800',
    dark: 'bg-gray-800',
    steel: 'bg-gray-600',
    fairy: 'bg-pink-300',
  };
  return colors[type?.toLowerCase()] || 'bg-gray-300';
};

export default PokemonCard;
