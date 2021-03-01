
export const postTarea = ({id,nombreTarea,jwt}) => { 
  return fetch(`https://api-tareas-mern.herokuapp.com/api/tareas/${id}`,
    {
      method: 'POST',
      body: JSON.stringify({ nombre: nombreTarea, estado: false }),
      headers: {
        'Content-Type': 'application/json',
        'auth-token': jwt,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((err) => console.log(err))
}