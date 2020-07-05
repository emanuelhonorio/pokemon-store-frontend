import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth-context'

import './styles.css'

import { useHistory } from 'react-router-dom'

export default function SignUp() {

  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { register } = useContext(AuthContext)

  async function handleSubmit(event) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const user = { name, email, password }
    
    try {
      const response = await register(user)
      history.push('/')
    } catch (err) {
      setError(err.response.data.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      {
        error && <p className="alert alert-error">{error}</p>
      }
      <h2>Sign Up</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button disabled={isLoading}>Regiter</button>
      </form>
    </div>
  )
}