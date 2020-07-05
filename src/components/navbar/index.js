import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth-context'
import { useHistory } from 'react-router-dom'

import './styles.css'

export default function Navbar() {

  const history = useHistory()
  const { user, logout, logged } = useContext(AuthContext)

  return (
    <div className="navbar">
      <nav>
        <Link to="/">Pokemon Store</Link>
        {
          !logged? 
          <>
          <Link className="login-btn" to="/login">Login</Link>
          <Link className="register-btn" to="/register">Register</Link>
          </>
          :
          <>
            <Link to="/profile">Profile</Link>
            <p style={{margin: 0, marginRight: 10 }}>Hi {user.name}, You have {user.coins} coins</p>
            <button onClick={() => {logout(); history.push('/login')}} style={{margin: 0}}>Log Out</button>
          </>
        }
      </nav>
    </div>
  )
}