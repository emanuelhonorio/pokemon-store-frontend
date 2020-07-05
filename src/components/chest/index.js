import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth-context'

import api from '../../services/api'

import './styles.css'

export default function Chest({ chest }) {

  const { setUser } = useContext(AuthContext)
  const [pokemon, setPokemon] = useState(null)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(null)

  async function buy(id) {
    try {
      setError(null)
      const response = (await api.post('/chests/buy/'+id)).data
      setUser(response.user)
      setPokemon(response.pokemon)
      setOpen(true)
    } catch (err) {
      const msg = err.response ? err.response.data.error : 'Unknown error, try again'
      setOpen(true)
      setError(msg)
    }
  }

  return (
    <>
    <div className="chest">
      <img src="https://i.pinimg.com/originals/dc/2f/0f/dc2f0f37346e111b6e1ee6465c43bcd4.gif" />
      <div className="name">{chest.name}</div>
      <button  onClick={() => buy(chest.id)} style={{margin: 0, width: '100%'}}>Comprar por ${chest.price}</button>
    </div>
    {
      open && pokemon &&
      <div className="chest-open">
        <h3>You won {pokemon.name}</h3>
        <img src={pokemon.image_url}/>
        <div><button onClick={() => {setOpen(false); setPokemon(null)}}>OK</button></div>
      </div>
    }
    {
      open && error &&
      <div className="chest-open">
        <h3>{error}</h3>
        <div><button onClick={() => {setOpen(false); setError(null)}}>OK</button></div>
      </div>
    }
    </>
  )
}