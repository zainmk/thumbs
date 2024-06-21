// Reference for using Firebase RealTime DB -> https://firebase.google.com/docs/database/rest/start
// TODO: SWITCH TO FIREBASE 'LOCKED' DATABASE TO SECURE

const FIREBASE_USERS = (path = '') => `https://thumbsapp-748bd-default-rtdb.firebaseio.com/users/${path}.json`

export async function createUser({ username, password }) {
  
  const entry = { [username]: {
    password: password
  }}

  const options = {
    method: 'PATCH',
    body: JSON.stringify(entry),
  }

  fetch(`${FIREBASE_USERS()}`, options)
  
}

export const getUser = async(username) => fetch(`${FIREBASE_USERS(username)}`).then(res => res.json())