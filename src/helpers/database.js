
const FIREBASE_DOMAIN = 'https://thumbsapp-748bd-default-rtdb.firebaseio.com/';


/*
Function: To respond with a json file of all users collection
*/
export function getAllUsers() {
    return fetch(
        "https://thumbsapp-748bd-default-rtdb.firebaseio.com/users.json",).then(res => res.json()).then(res => (res))

      
}



/*
Function: To add a new entry ot the user collection in GFirebase databse
*/
export async function addUser(userData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/users.json`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not create quote.');
    } else {
        console.log("Success!!!")
    }
  
    return null;
}

/*
Function: Gets users datae(object of name and password entered from login page
Than gets all users data, check if there is amtch of entered data and all userdata than respond with true or fasle
Authetticate
*/
//hella  INsecure, but eh it works?!?!?!
//Recalls all data fomr databse, all user pass and names, than checks each one if it fits
export async function authenticateUser(userData, _callback) {
  let authentication = false; //is it ready?

  
  const allUserData = await getAllUsers();

  //should get data back and than do this. How to make this await for the req to end


  var keys = await Object.keys( allUserData );  //gets all the id's, keys, from the database, allUserData (They are not in order remeber!!!)
  

  //Goes through all units in json array of objects, has keys to get the first indexs
  for (let counter = 0; counter < keys.length; counter ++) {

    if ((allUserData[keys[counter]].name === userData.name) && (allUserData[keys[counter]].password === userData.password)) {
      authentication = true; //is there is a match than true
    }
  }

  //return true if there was a match of name and password
  if (authentication) {
    console.log("Authenticated!!!")
    return authentication;
  } else {
    return authentication;
  } 
}