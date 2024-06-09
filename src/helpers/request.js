//Function: For Returning Star Wars API Cal
export function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    //Returns xmlHttp.responseText containing whole object in string form, only want name part
    const name = xmlHttp.responseText.substring(xmlHttp.responseText.search("name")+6 , xmlHttp.responseText.search("height")-2)

    return name;
}