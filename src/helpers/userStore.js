let userKey;
console.log(userKey)

/*
Function: To store the users authentication userKey
*/
export function storeUserKey(KeyInsert) {
    userKey = KeyInsert;
    console.log(userKey);
}


/*
Function: To return the users authentication userKey
*/
export function returnUserKey() {
    console.log(userKey);
    return userKey;
}

// TODO: MAKE A HOOK FOR USERKEY


