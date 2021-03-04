import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useLogin } from "../../hooks/useLogin";
import TareaContext from "../../context/TareaContext";
import TodoList from "../../components/TodoList/TodoList";
import Note from "../../components/Note/Note";
import Logout from "../../components/Logout/Logout";

import "./Home.css";

export default function Home() {
  const [, setLocation] = useLocation();
  const { setJWT } = useLogin();
  const { setNombreTarea, setEdit, nombreTarea } = useContext(TareaContext);
  const [show, setShow] = useState(false);

  useEffect(
    useCallback(() => {
      localStorage.getItem("token") === null
        ? setLocation("/")
        : setJWT(localStorage.getItem("token"));
    }, [setLocation, setJWT]),
    [setLocation]
  );

  const handleAddNote = () => {
    nombreTarea !== "" ? setShow(true) : setShow(!show);

    setNombreTarea("");
    setEdit(false);
  };

  return (
    <div className="container-home">
      <Logout />
      <header className="header_tarea">
        <h2>Notes</h2>
      </header>
      <div className="add-note">
        <button className="add-button" onClick={handleAddNote}>
          Add note
        </button>
      </div>
      <div className="content">
        <TodoList
          setNombreTarea={setNombreTarea}
          setEdit={setEdit}
          show={show}
          setShow={setShow}
        />
        <div className="form-content">
          <Note show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
}
