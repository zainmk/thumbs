const FIREBASE_USERS = 'https://thumbsapp-748bd-default-rtdb.firebaseio.com/users.json';

export const getAllUsers = async() => fetch(FIREBASE_USERS).then(res => res.json())

export async function addUser(userData) {

  // TODO: check for uniqeuness 

  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(`${FIREBASE_USERS}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create user.');
  } else {
      console.log("Success!!!", data)
  }
  
}

export async function authenticateUser(userData) { // TODO: authenticate by validating entry existence (failed query = invalid)

  const { name, password } = userData;
  const allUserData = await getAllUsers();
  const results = Object.keys(allUserData).filter(userKey => (allUserData[userKey].name === name && allUserData[userKey].password === password))
  return results.length === 1 ? results[0] : null

}

export const getUserData = async(profileKey)=> getAllUsers().then(res => res[profileKey])
