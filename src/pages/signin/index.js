import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth-context'
import { useHistory } from "react-router-dom";

import './styles.css'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { login } = useContext(AuthContext)
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()
    setError(null)
    setLoading(true)
    
    try {
      const response = await login(email, password)
      setLoading(false)
      history.push('/')
    } catch (err) {
      const msg = err.response ? err.response.data.error : 'An error occured, try again'
      setError(msg)
      setLoading(false)
    }
  }

  return (
    <div className="container">
      {
        error && <p className="alert alert-error">{error}</p>
      }
      <h2>Sign In</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button disabled={isLoading}>Login</button>
      </form>
    </div>
  )
}