export const loginGoogle = (response) => {
  return fetch(
    'https://api-tareas-mern.herokuapp.com/api/usuarios/googlelogin',
    {
      method: 'POST',
      body: JSON.stringify({ tokenId: response.tokenId }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      return response
    })
}
