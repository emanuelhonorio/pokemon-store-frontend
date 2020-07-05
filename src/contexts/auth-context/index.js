import React, { useState, useEffect } from 'react'
import authService from '../../services/auth'
import api from '../../services/api'

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const tokenKey = '_pokemon_token'
  const [user, setUser] = useState({})
  const [logged, setLogged] = useState(true)

  useEffect(() => {
    if (authService.isLogged()) {
      setLogged(true)
      getMe()
    } else {
      setLogged(false)
    }
  }, [])


  async function getMe(user) {
    return api.get('/me').then(response => setUser({...response.data}))
  }

  async function logout() {
    localStorage.removeItem(tokenKey)
    setUser({})
    setLogged(false)
  }

  async function login(email, password) {
    return api.post('/authenticate', {
      email,
      password
    }).then(async response => {
      await localStorage.setItem(tokenKey, response.data.token)
      setUser({...response.data.user})
      setLogged(true)
    })
  }

  function getToken() {
    return localStorage.getItem(tokenKey)
  }

  async function register(user) {
    return api.post('/users', user)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout, getMe, logged }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;