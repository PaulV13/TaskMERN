import React, { useState } from 'react'

const ContextTarea = React.createContext({})

export function TareaContextProvider({children}) {
  const [listaTareas, setTareas] = useState([])
  const [status, setStatus] = useState('all')
  const [nombreTarea, setNombreTarea] = useState('')
  const [edit, setEdit] = useState(false)
  const [idTarea, setIdTarea] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <ContextTarea.Provider
      value={{
        listaTareas,
        setTareas,
        status,
        setStatus,
        nombreTarea,
        setNombreTarea,
        edit,
        setEdit,
        idTarea,
        setIdTarea,
        loading,
        setLoading,
      }}
    >
      {children}
    </ContextTarea.Provider>
  );
}

export default ContextTarea
