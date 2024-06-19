import '../App.js';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

import TitleBar from '../components/TitleBar.js';
import CardList from '../components/CardList.js';




function MainPage() {

  const [cardData, setCardData] = useState([]) // TODO: consider a context for this variable

  useEffect(() => {
    if(cardData.length !== 0){
      localStorage.setItem('cardData', JSON.stringify(cardData));
    }
  }, [cardData]);


  useEffect(() => {
    const existingCardData = JSON.parse(localStorage.getItem('cardData'));
    setCardData(existingCardData ? existingCardData : [])
  }, []);

  return (
    <div style={{flex: 60, border: "2px solid black"}} className='MainPage'>
      <TitleBar />
        <div style={{ border: "2px solid black" }}>
          <CardList cardData={cardData} setCardData={setCardData} />
          { /*
            Instructions: Copy the basic Card Template, and paste it at the bttom IN card NewsFeed Div section
            */}

          <div className="App">

          </div>
        </div>
      </div>
  );
}





//Function: For Returning Star Wars API Cal
function httpGet(theUrl, headerText="'Content-type', 'application/x-www-form-urlencoded'")
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader(headerText.substring(1, headerText.search(",")-1), headerText.substring(headerText.search(",")+3, headerText.length-1));
    xmlHttp.send( null );
    //Returns xmlHttp.responseText containing whole object in string form, only want name part
    

    return xmlHttp.responseText;
}


export default MainPage;




