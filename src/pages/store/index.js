import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api'

import { AuthContext } from '../../contexts/auth-context'

import './styles.css'

import StorePokemon from '../../components/store-pokemon'
import Chest from '../../components/chest'

export default function Store() {
  const [pokemons, setPokemons] = useState([])
  const [name, setName] = useState('')
  const [rarity, setRarity] = useState('')
  const [chests, setChests] = useState([])

  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    initPokemons()
  }, [name, rarity])

  async function init() {
    await initPokemons()
    await initChests()
  }

  async function initPokemons() {
    const pokemons = (await api.get(`/pokemons?name=${name}&rarity=${rarity}`)).data
    setPokemons(pokemons)
  }

  async function initChests() {
    const chests = (await api.get('/chests')).data
    setChests(chests)
  }

  async function buyPokemon(pokemon) {
    try {
      const user = (await api.post('/me/buy/'+pokemon.id)).data
      setUser(user)
      await initPokemons()
    } catch (err) {

    }
  }

  return (
    <div className="container">
    <div className="store-header">
      <div>
        <label>Search by name</label>
        <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Filter by rarity</label>
        <select value={rarity} onChange={(e) => setRarity(e.target.value)}>
          <option value="">All</option>
          <option value="COMMON">Common</option>
          <option value="RARE">Rare</option>
          <option value="SUPER_RARE">Super Rare</option>
          <option value="ULTRA_RARE">Ultra Rare</option>
        </select>
      </div>
    </div>
    {chests.map(chest => (
      <Chest chest={chest} />
    ))}
    {pokemons.map(pokemon => (
      <StorePokemon key={pokemon.id} pokemon={pokemon} buyPokemon={() => buyPokemon(pokemon)} />
    ))}
    </div>
  );
}