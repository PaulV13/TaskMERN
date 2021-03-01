import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import UsuarioContext from '../../context/UsuarioContext'
import TareaContext from '../../context/TareaContext'
import { useLogin } from '../../hooks/useLogin'

import './Logout.css'

const Logout = () => {
  const { setJWT, setEmail, setPassword, setErrorLogin } = useLogin()
  const [, setLocation] = useLocation()
  const { setMessage } = useContext(UsuarioContext)
  const name = localStorage.getItem('name')
  const [userName, setUserName] = useState('')
  const {setNombreTarea, setEdit} = useContext(TareaContext)

  useEffect(() =>{
    if(name !== null){
      setUserName(name.charAt(0).toUpperCase() + name.slice(1))
    }
  },[setUserName, name])
  

  const handlerLogout = useCallback(() => {
    setJWT(null)
    localStorage.removeItem('name')
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    setPassword('')
    setEmail('')
    setMessage('')
    setErrorLogin('')
    setLocation('/')
    setNombreTarea('')
    setEdit(false)
  }, [setJWT, setMessage, setErrorLogin, setLocation, setEmail, setPassword, setNombreTarea,setEdit])

  return (
    <div className="form-logout">
      <div className="form-logout-field">
        <h4>Hi! {userName}</h4>
        <button className="logout" type="text" onClick={handlerLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default React.memo(Logout)
