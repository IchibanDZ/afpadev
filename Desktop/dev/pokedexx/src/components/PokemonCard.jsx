import React from 'react';

const PokemonCard = ({ name , image, pokedex_id, types}) => {

    return (
        <div className='card'>
            <img src={image} alt={name} className='pokemon-image' />
            <p>ID :{pokedex_id}</p>
            <h1>{name}</h1>
            <h2>{types}</h2>
            <div className='types'>
                {types.map((type) => {
                    <span key={type} className='type-badge'>{type}</span>
                })}
            </div>

        </div>
    )
}

export default PokemonCard;