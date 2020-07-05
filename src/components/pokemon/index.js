import React from 'react'

import './styles.css'

function Pokemon({ pokemon }) {
  const { id, name, rarity, price, image_url } = pokemon

  return (
    <>
      <div className="pokemon">
      <div className="rarity">{rarity.replace('_', ' ')}</div>
      <img className="image" src={image_url} alt={name} />
      <div className="number">N°{id}</div>
      <div className="name">{name}</div>
      </div>
    </>
  )
}

export default Pokemon