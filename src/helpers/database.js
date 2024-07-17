const AUTH_FIREBASE_USERS = async(path = '') => {
    // const authToken = await fetch(process.env.REACT_APP_AUTH_URL).then(res => res.text()).catch(err => console.log(err))
    // TODO: Fix backend for auth and replace with actual token value
    return `https://thumbsapp-748bd-default-rtdb.firebaseio.com/users/${path}.json`
    // return `https://thumbsapp-748bd-default-rtdb.firebaseio.com/users/${path}.json?access_token=${authToken}`
}

const FIREBASE_RECORDS = (path = '') => `https://thumbsapp-748bd-default-rtdb.firebaseio.com/records/${path}.json`

export const createUser = async({ username, password }) => fetch(await AUTH_FIREBASE_USERS(), { method: 'PATCH', body: JSON.stringify({[username]: { password: password }}) })
export const getUser = async(user) => fetch(await AUTH_FIREBASE_USERS(user)).then(res => res.json())

export const getMediaList = async(user) => fetch(await AUTH_FIREBASE_USERS(`${user}/media_list`)).then(res => res.json())
export const updateMediaList = async(user, newMediaList) => fetch(await AUTH_FIREBASE_USERS(`${user}/media_list`), { method: 'PUT', body: JSON.stringify(newMediaList)})

export const getWatchList = async(user) => fetch(await AUTH_FIREBASE_USERS(`${user}/watch_list`)).then(res => res.json())
export const updateWatchList = async(user, newWatchList) => fetch(await AUTH_FIREBASE_USERS(`${user}/watch_list`), { method: 'PUT', body: JSON.stringify(newWatchList)})








export const getMediaInfo = async(imdbID) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}`)).then(res =>res.json())
export const changeMediaLikesByOne = async(imdbID, currentLikesValue, changeValue) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}/`), { method: 'PATCH', body: JSON.stringify({"likes": `${currentLikesValue+changeValue}`})}).then(console.log(`${currentLikesValue+changeValue}`))
// export function changeMediaLikes(imdbID, change) { 
//     let value = 0;
//     let currentLikesValue = 0;
//     let changeValue = 0;

//     //you can specify if you want to increment or decrement the likes of a particular media
//     //if change is true = adds, false = subtracts
//     if (change) {
//         changeValue = 1;
//     } else {
//         changeValue = -1;
//     }
//     value = getMediaInfo(imdbID).then(res => {
//         currentLikesValue = parseInt(res.likes);    //Try it online, than check if this works
//         //now equal to total like
//         console.log("total likes is " + currentLikesValue)
//     })
//     .then(changeMediaLikesByOne(imdbID,currentLikesValue, changeValue))
//     //true than it adds one, false and than it subtracts one
// } 



// export const changeMediaDislikesByOne = async(imdbID, currentDislikesValue, changeValue) => fetch(FIREBASE_RECORDS(`mediaStats/${imdbID}/`), { method: 'PATCH', body: JSON.stringify({"dislikes": currentDislikesValue+changeValue})}).then(console.log("Disliked!"))

// export function changeMediaDislikes(imdbID, change) { 
//     let value = 0;
//     let currentDislikesValue = 0;
//     let changeValue = 0;

//     //you can specify if you want to increment or decrement the dislikes of a particular media
//     //if change is true = adds, false = subtracts
//     if (change) {
//         changeValue = 1;
//     } else {
//         changeValue = -1;
//     }
//     value = getMediaInfo(imdbID).then(res => {
//         currentDislikesValue = parseInt(res.dislikes);    //Try it online, than check if this works
//         //now equal to total dislikes
//         console.log("getMediaDislikes function gives " + currentDislikesValue)
//     })
//     .then(changeMediaDislikesByOne(imdbID,currentDislikesValue, changeValue))
//     //true than it adds one, false and than it subtracts one
// } 
