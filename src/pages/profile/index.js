import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/auth-context'
import Pokemon from '../../components/pokemon'

import './styles.css'

export default function Profile() {

  const { user, getMe } = useContext(AuthContext)

  console.log(user)

  useEffect(() => {
    getMe()
  }, [])


  return (
    <div className="container">
      <h2>My profile</h2>
      <div>
        <label>Name</label>
        <input type="text" value={user.name} disabled readOnly />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={user.email} disabled readOnly />
      </div>
      <div>
        <label>Coins</label>
        <input type="text" value={user.coins} disabled readOnly />
      </div>
      <div>
        <label>My Pokemons ({user.pokemons?.length})</label>
        { user.pokemons && user.pokemons.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
        )) }
      </div>
    </div>
  )
}

/*

{ user.pokemons.map(pokemon => (
  <Pokemon key={pokemon.id} pokemon={pokemon} />
)) }

*/