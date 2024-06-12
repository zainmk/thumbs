import '../App.js';
import React, { useState } from "react";
import Button from '@mui/material/Button';

import TitleBar from '../components/TitleBar.js';

import CardList from '../components/CardList.js';

//Make a div, than do what you want in your card.

const testData = [
  {
    Type: "movie",
    Title: "Star Wars: Episode IV - A New Hope",
    Year: 1977,
    imdbID: "tt0076759",
    Poster: ""
  },
  {
    Type: "movie",
    Title: "Inception",
    Year: 2010,
    imdbID: "tt1375666",
    Poster: ""
  },
  {
    Type: "game",
    Title: "Elden Ring",
    Year: 2022,
    imdbID: "tt10562854",
    Poster: ""
  }
]

function MainPage() {

  const [cardData, setCardData] = useState(testData) // TODO: consider a context for this variable // Add this to cache/cookies (keep track of entries locally


  return (
    <div style={{flex: 60, border: "2px solid black"}} className='MainPage'>
      <TitleBar />

        <div style={{ border: "2px solid black" }}>
          <CardList cardData={cardData} setCardData={setCardData} />
          { /*
            Instructions: Copy the basic Card Template, and paste it at the bttom IN card NewsFeed Div section
            */}

          <div className="App">


            { /*
                Card Name:  Basic Card Template
                Description: Has Reason paragraph
            */}
            <div style={{border: "1px solid black"}}>
              <h2>Go to Google Docs for App Planning</h2>
              <a href="https://docs.google.com/document/d/1YHfOfMTHxckLrYp10GOTC3uVzykLQSCbtJKRlVOhnbg/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><Button variant="contained">Go to Google Docs For APP Planning Document</Button></a>
            </div>


            { /*
                Card Name:  Basic Card Template
                Description: Has basic paragraph
            */}
            <div style={{border: "1px solid black"}}>
              <p> What up neko?</p>
            </div>


            { /*
                Card Name:  Basic Card Template
                Description: Has Basic button and paragraph
            */}
            <div style={{border: "1px solid black"}}>
              <p> Card for hacking into the pentagon</p>
              <h3>trust....</h3>
              <a href="https://hackertyper.com/" target="_blank" rel="noopener noreferrer"><Button variant="contained">Click Here to Hack into the pentagon!!!!!</Button> </a>
            </div>


            { /*
                Card Name:  Star Wars API Card
                Description: Testing to do an api call with star wars api for card
            */}
            {/* This is horrible coding thats porbbaly slowing app y a minute, im called HTTP requests 5 times for a simple name, dam bruh. Gordon Ramsey would not be pleased :() */}
            <div style={{border: "1px solid black"}}>
              <p> The name of a person in star wars is {httpGet("https://swapi.dev/api/people/" + Math.floor(Math.random() * (4 - 1 + 1)) + 1 ).substring(9,15) + "..."}</p>
            </div>
            { /*
                Card Name:  Dad Jokes API Card
                Description: Getting alot of api calls
            */}
            <div style={{border: "1px solid black"}}>
              <p>Dad Joke</p>
              {httpGet("https://api.api-ninjas.com/v1/dadjokes", "'X-Api-Key', '76W31ccV32mSLHBa/VU1vA==VzWQqlIjSZRbUAlu'" ).replace('"joke": ', "")}
            </div>
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




