import { useContext, useState } from "react";
import UsuarioContext from "../context/UsuarioContext";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { jwt, setJWT } = useContext(UsuarioContext);
  const { errorLogin, setErrorLogin } = useContext(UsuarioContext);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://api-tareas-mern.herokuapp.com/api/usuarios/login", {
      method: "POST",
      body: JSON.stringify({ email: email.toLowerCase(), password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        data.error ? setErrorLogin(data.message) : setJWT(data.data.token);

        if (data.error == null) {
          const token = data.data.token;

          localStorage.setItem("name", data.name);
          localStorage.setItem("id", data.id);
          localStorage.setItem("token", token);
        }
      })
      .catch((err) => console.log(err));
  };

  return {
    emailHandler,
    passwordHandler,
    submitHandler,
    setJWT,
    jwt,
    email,
    password,
    setEmail,
    setPassword,
    errorLogin,
    setErrorLogin,
  };
}
