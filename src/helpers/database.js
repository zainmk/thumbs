// Reference for using Firebase RealTime DB -> https://firebase.google.com/docs/database/rest/start
// TODO: SWITCH TO FIREBASE 'LOCKED' DATABASE TO SECURE

const FIREBASE_USERS = (path = '') => `https://thumbsapp-748bd-default-rtdb.firebaseio.com/users/${path}.json`

const FIREBASE_RECORDS = (path = '') => `https://thumbsapp-748bd-default-rtdb.firebaseio.com/records/${path}.json`

export const createUser = async({ username, password }) => fetch(FIREBASE_USERS(), { method: 'PATCH', body: JSON.stringify({[username]: { password: password }}) })
export const getUser = async(user) => fetch(FIREBASE_USERS(user)).then(res => res.json())
export const getMediaList = async(user) => fetch(FIREBASE_USERS(`${user}/media_list`)).then(res => res.json())


//TO DO, have to make it so, when you add a media, it checks if its already in records or not. if is than do nothing, if not than add 
export const updateMediaList = async(user, newMediaList) => fetch(FIREBASE_USERS(`${user}/media_list`), { method: 'PUT', body: JSON.stringify(newMediaList)}).then(console.log(newMediaList)).then(createMediaValues(newMediaList[newMediaList.length]))
        const createMediaValues = async(newMedia) => fetch(FIREBASE_RECORDS(`mediaStats/${newMedia.imdbID}`), {method: 'PUT', body: JSON.stringify({"likes": `${0}`, "dislikes": `${0}`})}).then(console.log("It Worked!"))

/* 

for viewing: 

Make a function that, increments the total number of likes for a 
specific movie. Global among users. 

Make a function that, returns the number of likes of a specific
movie. Global mo
ng users 

*/





//MUST TRY ALL THIS CODE ONLINE IF IT WORSK OR NOT!!!!
// SECTION : -------------------------------------------------------------Code with likes and dislikes from user


export const getMediaInfo = async(imdbID) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}`)).then(res =>res.json())

export const changeMediaLikesByOne = async(imdbID, currentLikesValue, changeValue) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}/`), { method: 'PATCH', body: JSON.stringify({"likes": `${currentLikesValue+changeValue}`})}).then(console.log(`${currentLikesValue+changeValue}`))


export function changeMediaLikes(imdbID, change) { 
    let value = 0;
    let currentLikesValue = 0;
    let changeValue = 0;

    //you can specify if you want to increment or decrement the likes of a particular media
    //if change is true = adds, false = subtracts
    if (change) {
        changeValue = 1;
    } else {
        changeValue = -1;
    }
    value = getMediaInfo(imdbID).then(res => {
        currentLikesValue = parseInt(res.likes);    //Try it online, than check if this works
        //now equal to total like
        console.log("total likes is " + currentLikesValue)
    })
    .then(changeMediaLikesByOne(imdbID,currentLikesValue, changeValue))
    //true than it adds one, false and than it subtracts one
} 



export const changeMediaDislikesByOne = async(imdbID, currentDislikesValue, changeValue) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}/`), { method: 'PATCH', body: JSON.stringify({"dislikes": currentDislikesValue+changeValue})}).then(console.log("Disliked!"))

export function changeMediaDislikes(imdbID, change) { 
    let value = 0;
    let currentDislikesValue = 0;
    let changeValue = 0;

    //you can specify if you want to increment or decrement the dislikes of a particular media
    //if change is true = adds, false = subtracts
    if (change) {
        changeValue = 1;
    } else {
        changeValue = -1;
    }
    value = getMediaInfo(imdbID).then(res => {
        currentDislikesValue = parseInt(res.dislikes);    //Try it online, than check if this works
        //now equal to total dislikes
        console.log("getMediaDislikes function gives " + currentDislikesValue)
    })
    .then(changeMediaDislikesByOne(imdbID,currentDislikesValue, changeValue))
    //true than it adds one, false and than it subtracts one
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




