import React, { useState } from 'react'

const ContextUsuario = React.createContext({})

export function UsuarioContextProvider({children}) {
  const [jwt, setJWT] = useState(null)
  const [errorLogin, setErrorLogin] = useState('')
  const [errorRegister, setErrorRegister] = useState('')
  const [message, setMessage] = useState('')
  
  return (
    <ContextUsuario.Provider
      value={{
        jwt,
        setJWT,
        errorLogin,
        setErrorLogin,
        errorRegister,
        setErrorRegister,
        setMessage,
        message,
      }}
    >
      {children}
    </ContextUsuario.Provider>
  )
}

export default ContextUsuario
