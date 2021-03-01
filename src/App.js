import React from 'react'
import './App.css'
import { UsuarioContextProvider } from './context/UsuarioContext'
import { Route } from 'wouter'
import { TareaContextProvider } from './context/TareaContext'

import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'

function App() {

  return (
    <UsuarioContextProvider>
      <div className="App">
        <Route path="/" component={Login} />
        <TareaContextProvider>
          <Route path="/Home" component={Home} />
        </TareaContextProvider>
        <Route path="/Register" component={Register} />
      </div>
    </UsuarioContextProvider>
  )
}

export default App
