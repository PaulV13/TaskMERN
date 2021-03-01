
export const getTareas = () => {
  const id = localStorage.getItem('id')
  const jwt = localStorage.getItem('token')
  
  if (jwt !== null) {
    return fetch(`https://api-tareas-mern.herokuapp.com/api/tareas/${id}`, {
      method: 'GET',
      headers: {
        'auth-token': jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data
      })
  }
}