import { useContext, useState } from "react";
import UsuarioContext from "../context/UsuarioContext";

export function useRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const { errorRegister, setErrorRegister } = useContext(UsuarioContext);
  const { message, setMessage } = useContext(UsuarioContext);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const nameHandler = (e) => {
    setNombre(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrorRegister("");
    fetch("https://api-tareas-mern.herokuapp.com/api/usuarios/registrar", {
      method: "POST",
      body: JSON.stringify({ name: nombre, email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.error !== null
          ? setErrorRegister(data.error)
          : setMessage(data.message);
      })
      .catch((err) => console.log(err));
  };

  return {
    emailHandler,
    passwordHandler,
    submitHandler,
    nameHandler,
    email,
    password,
    nombre,
    setEmail,
    setPassword,
    errorRegister,
    setErrorRegister,
    setMessage,
    message,
  };
}
