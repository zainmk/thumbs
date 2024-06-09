//Function: For Returning Star Wars API Cal
export function httpGet(theUrl, headerText="'Content-type', 'application/x-www-form-urlencoded'")
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader(headerText.substring(1, headerText.search(",")-1), headerText.substring(headerText.search(",")+3, headerText.length-1));
    xmlHttp.send( null );

    //Returns xmlHttp.responseText containing whole object in string form, only want name part
    return xmlHttp.response;
}