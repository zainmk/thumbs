const AUTH_FIREBASE_USERS = async(path = '') => {
    console.log(process.env.REACT_APP_AUTH_URL)
    const authToken = await fetch(process.env.REACT_APP_AUTH_URL).then(res => res.json())
    return `https://thumbsapp-748bd-default-rtdb.firebaseio.com/users/${path}.json?access_token=${authToken}`
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
