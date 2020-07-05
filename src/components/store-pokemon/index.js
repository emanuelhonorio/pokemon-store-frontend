import React from 'react'

import './styles.css'

function StorePokemon({ pokemon, buyPokemon }) {
  const { id, name, rarity, price, image_url } = pokemon

  return (
    <>
      <div className="store-pokemon">
      <div className="rarity">{rarity.replace('_', ' ')}</div>
      <img className="image" src={image_url} alt={name} />
      <div className="number">N°{id}</div>
      <div className="name">{name}</div>
      {
        pokemon.owned ?
        <button style={{margin: 0, width: '100%'}}>OWNED</button> 
        :
        <button onClick={buyPokemon} style={{margin: 0, width: '100%'}}>comprar por <span className="price">x{price}</span></button>
      }
      </div>
    </>
  )
}

export default StorePokemon