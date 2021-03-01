
export const deleteTarea = ({ tarea, jwt }) => {
  return fetch(`https://api-tareas-mern.herokuapp.com/api/tareas/${tarea._id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': jwt,
    },
  })
    .then((res) => res.json())
    .then((data) => { return data })
    .catch((err) => console.log(err))
}
