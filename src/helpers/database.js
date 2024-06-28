// Reference for using Firebase RealTime DB -> https://firebase.google.com/docs/database/rest/start
// TODO: SWITCH TO FIREBASE 'LOCKED' DATABASE TO SECURE

const FIREBASE_USERS = (path = '') => `https://thumbsapp-748bd-default-rtdb.firebaseio.com/users/${path}.json`

const FIREBASE_RECORDS = (path = '') => `https://thumbsapp-748bd-default-rtdb.firebaseio.com/records/${path}.json`

export const createUser = async({ username, password }) => fetch(FIREBASE_USERS(), { method: 'PATCH', body: JSON.stringify({[username]: { password: password }}) })
export const getUser = async(user) => fetch(FIREBASE_USERS(user)).then(res => res.json())
export const getMediaList = async(user) => fetch(FIREBASE_USERS(`${user}/media_list`)).then(res => res.json())
export const updateMediaList = async(user, newMediaList) => fetch(FIREBASE_USERS(`${user}/media_list`), { method: 'PUT', body: JSON.stringify(newMediaList)}).then(createMediaValues(newMediaList[newMediaList.length-1]))
        const createMediaValues = async(newMedia) => fetch(FIREBASE_RECORDS(`mediaStats/${newMedia.imdbID}`), {method: 'PUT', body: JSON.stringify({"likes": "1", "dislikes":"1"})})


/* 
Make a function that, increments the total number of likes for a 
specific movie. Global among users. 

Make a function that, returns the number of likes of a specific
movie. Global mong users 

Make a function that sends to databas, user liked that 
specific movie or not, can be boolean value. 
Each movie can have a "Liked" property, true, false, null?

*/


let currentLikesValue;


export const getMediaLikes = async(imdbID) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}`)).then(res =>res.json())

export const increaseMediaLikesByOne = async(imdbID) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}/`), { method: 'PATCH', body: JSON.stringify({"likes": currentLikesValue+1})})

export function increaseMediaLikes(imdbID) { 
    let value = 0;
    
    value = getMediaLikes(imdbID).then(res => {
        currentLikesValue = res.likes;
        console.log("getMediaLikes function gives " + currentLikesValue)
    })
    .then(increaseMediaLikesByOne(imdbID))

} 


/*
export function increaseMediaLikes(imdbID) {

    console.log("i am being called")

    const currentLikesValue = async(user) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}/likes`)).then(res => console.log(res.json()))
    
    console.log("current like for this media is" + currentLikesValue); //checking....

    const updateLikes = async(imdbID) => fetch(FIREBASE_RECORDS(`mediaStats/`), { method: 'PATCH', body: JSON.stringify({[imdbID]: { likes: currentLikesValue + 1 }}) })
    updateLikes();
}
    */

