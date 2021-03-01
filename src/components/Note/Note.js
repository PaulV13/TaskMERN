import React, { useCallback, useState, useContext } from 'react'
import TareaContext from '../../context/TareaContext'
import { useLogin } from '../../hooks/useLogin'
import { getTareas } from '../../services/getTareas'
import { postTarea } from '../../services/postTarea'
import { putTarea } from '../../services/putTarea'

import './Note.css'

const Note = ({ show, setShow }) => {
  const {
    listaTareas,
    setTareas,
    nombreTarea,
    setNombreTarea,
  } = useContext(TareaContext);
  const { jwt } = useLogin()
  const [errorTarea, setErrorTarea] = useState('')
  const { edit, idTarea, setEdit } = useContext(TareaContext)

  const tareaHandler = useCallback(
    (e) => {
      setNombreTarea(e.target.value)
    },
    [setNombreTarea]
  )

  const submitHandler = useCallback(
    (e) => {
      const id = localStorage.getItem('id')
      e.preventDefault()
      if (!edit) {
        postTarea({ id, nombreTarea, jwt }).then((data) => {
          if (data.error !== null) {
            setErrorTarea(data.error);
          } else {
            setTareas([
              ...listaTareas,
              {
                _id: data.tarea._id,
                nombre: data.tarea.nombre,
                estado: data.tarea.estado,
              },
            ])
            setNombreTarea('')
            setErrorTarea('')
            setShow(!show)
          }
        })
      } else {
        if (nombreTarea !== '') {
          putTarea({idTarea, nombreTarea, jwt}).then((data) => {
            console.log(data)
            getTareas().then((tareas) => setTareas(tareas))
            setNombreTarea('')
            setEdit(false)
            setErrorTarea('')
            setShow(!show)
          })
        } else {
          setErrorTarea('La tarea no puede ser vacia')
        }
      }
    },
    [
      listaTareas,
      nombreTarea,
      setTareas,
      jwt,
      setNombreTarea,
      edit,
      idTarea,
      setEdit,
      setShow,
      show,
    ]
  )

  return (
    <>
      <form className="form-tarea">
        {show ? (
          <textarea
            value={nombreTarea}
            onChange={tareaHandler}
            type="text"
            className="todo-input"
            autoFocus
          />
        ) : (
          ""
        )}
      </form>
      {show ? (
        <div className="form-info">
          <div>
            {errorTarea ? (
              <section className="errorTarea">{errorTarea}</section>
            ) : (
              ""
            )}
          </div>
          <div className="button">
            <button onClick={submitHandler} className="todo-button">
              Save
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default React.memo(Note)
