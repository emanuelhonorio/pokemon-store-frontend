import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Navbar from './components/navbar'

import AuthProvider from './contexts/auth-context' 

function App() {


  return (
    <>
    <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Routes />
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
