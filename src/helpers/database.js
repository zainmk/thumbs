import { storeUserKey } from "./userStore";

const FIREBASE_USERS = 'https://thumbsapp-748bd-default-rtdb.firebaseio.com/users.json';

export const getAllUsers = async() => fetch(FIREBASE_USERS).then(res => res.json())

export async function addUser(userData) {

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
    throw new Error(data.message || 'Could not create quote.');
  } else {
      console.log("Success!!!", data)
  }
  
}

export async function authenticateUser(userData) { // TODO: authenticate by validating entry existence (failed query = invalid)

  const { name, password } = userData;
  const allUserData = await getAllUsers();
  const userKeys = Object.keys( allUserData ); 

  for (let i = 0; i < userKeys.length; i ++) {
    if ((allUserData[userKeys[i]].name === name) && (allUserData[userKeys[i]].password === password)) {
      storeUserKey(userKeys[i]) 
      return userKeys[i];
    }
  }

  return null;

}


/*
Function: With given key, returns all user data with that key
*/
//NOT WORKING< IT SENDING back userdata but where its called it getting back a promise...
export async function recallUserData(profileKey) {
  let userData;

  getAllUsers().then(res => userData=res[profileKey]).then(function(value) {
      return userData;
  })

}

