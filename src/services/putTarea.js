export const putTarea = ({idTarea, nombreTarea, jwt}) => {
  return fetch(`https://api-tareas-mern.herokuapp.com/api/tareas/${idTarea}`, {
    method: "PUT",
    body: JSON.stringify({
      nombre: nombreTarea,
    }),
    headers: {
      "Content-Type": "application/json",
      "auth-token": jwt,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((err) => console.log(err))
}
