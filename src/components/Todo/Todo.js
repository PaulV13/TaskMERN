import React, { useCallback, useContext } from 'react'
import TareaContext from '../../context/TareaContext'
import { useLogin } from '../../hooks/useLogin'
import { deleteTarea } from '../../services/deleteTarea'

import './Todo.css'

const Todo = ({ tarea, listaTareas, setTareas, setNombreTarea, setEdit, setShow}) => {
  const { jwt } = useLogin()
  const { setIdTarea, nombreTarea } = useContext(TareaContext)

  const deleteHandler = useCallback(() => {
    deleteTarea({ tarea, jwt }).then(() => {
      const todoDiv = document.getElementById(`${tarea._id}`)
      todoDiv.className = 'todo fall'
      setNombreTarea('')
      setEdit(false)
      setShow(false)
      setTimeout(() => {
        setTareas(listaTareas.filter((el) => el._id !== tarea._id))
      }, 1000)
    })
  }, [listaTareas, setTareas, tarea, jwt,setEdit,setShow,setNombreTarea])

  const changeTarea = () => {
    if (nombreTarea === '')
    {
      setShow(true)
    }
    else {
      setNombreTarea(tarea.nombre)
    }
    setNombreTarea(tarea.nombre)
    setIdTarea(tarea._id)
    setEdit(true)
  }

  return (
    <div id={tarea._id} className="todo" onClick={changeTarea}>
      <li id={tarea.nombre} className="todo-item">
        {tarea.nombre}
      </li>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default React.memo(Todo)