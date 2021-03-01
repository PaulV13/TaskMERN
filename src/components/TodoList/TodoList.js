import React, { useEffect, useContext } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { getTareas } from '../../services/getTareas'
import TareaContext from '../../context/TareaContext'
import Todo from '../Todo/Todo'

import './TodoList.css'

const TodoList = ({setNombreTarea, setEdit, setShow, show}) => {
  const { listaTareas, setTareas, setLoading, loading,} = useContext(TareaContext)
  const { jwt } = useLogin()

  useEffect(() => {
    if (jwt !== null) {
      setLoading(true)
      getTareas().then((tareas) => {
        setTareas(tareas)
        setLoading(false)
      })
    }
  },[setTareas, jwt, setLoading])

  return (
    <div className="todo-container">
      {loading ? 'Cargando...' : ''}
      <ul className="todo-list">
        {
          listaTareas.map((tarea) => (
          <Todo
            key={tarea._id}
            tarea={tarea}
            listaTareas={listaTareas}
            setTareas={setTareas}
            setNombreTarea={setNombreTarea}
            setEdit={setEdit}
            setShow={setShow}
            show={show}
          />
        ))
        }
      </ul>
    </div>
  )
}

export default React.memo(TodoList)