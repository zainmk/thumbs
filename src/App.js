import './App.css';
import React, { useState } from "react";
import image from './fake-database/pigeon.jpg';
import banner from './fake-database/banner.jpg';


//Make a div, than do what you want in your card.

function App() {



  return (
    <div className='App'>

      <div style={{ height: "50px" }}> music app ♪ 
      </div>

      <div style={{ display: "flex", flexDirection: "row", height: "100vh"}}>  {/* remove the 'vh' when adding actual content*/}
        <div style={{flex: 20, border: "2px solid black"}}> 
          Profile Info 

            { /*
                Card Name:  Basic Profile Template
                Description: Has picture of profile
            */}
            <div style={{border: "2px solid white"}}>
              <img src={image} alt='image' />
            </div>


            { /*
                Card Name:  Basic Profile Template
                Description: Tagline description
            */}
            <div style={{border: "2px solid white"}}>
              <p>Tagline: Shit Dropper</p>
            </div>

            { /*
                Card Name:  Basic Profile Template
                Description: Description
            */}
            <div style={{border: "2px solid white"}}>
              <p>Description: Straiught from the ghettos of compton, we the pigeons flew across the seas to master the art of dropping hot shit globally. All records, people and cars know of our white hot trash. And we wont stop
                  until every record store and parking lot knows our shit.
              </p>
            </div>

        </div>
        <div style={{flex: 60, border: "2px solid black" }}>
          Card NewsFeed 
          { /*
            Instructions: Copy the basic Card Template, and paste it at the bttom IN card NewsFeed Div section
            */}

          <div className="App">


            { /*
                Card Name:  Basic Card Template
                Description: Has Reason paragraph
            */}
            <div style={{border: "1px solid black"}}>
              <p> The reason: Back before the age of time and man there was a goo, the goo was boo the boo was scary ad the scry was a ghost called neko. Ooo</p>
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
              <button>Click Here to Hack into DAtAbASES!!!</button>
            </div>


            { /*
                Card Name:  Basic Card Template
                Description: Has Basic button and paragraph
            */}
            <div style={{border: "1px solid black"}}>
              <p> Card for listeng to persons documentary on living without a job</p>
              <button>Click Here to Hack into persons DAtAbASES!!!</button>
            </div>


            { /*
                Card Name:  Star Wars API Card
                Description: Testing to do an api call with star wars api for card
            */}
            <div>
              <button> The name of a person in star wars is {httpGet("https://swapi.dev/api/people/" + Math.floor(Math.random() * (4 - 1 + 1)) + 1 )}</button>
            </div>


          </div>
        </div>

        <div style={{flex: 20, border: "2px solid black" }}>
          Settings 

          { /*
                Card Name:  Basic Settings Template
                Description: Intial COOL changes
            */}
            <div style={{border: "2px solid white"}}>
              <button>Change Profile from loser to dope boy</button>
            </div>


            { /*
                Card Name:  Basic Settings Template
                Description: Intial COMA changes
            */}
            <div style={{border: "2px solid white"}}>
              <button>Induce COMA upon Self</button>
            </div>

            
            { /*
                Card Name:  Basic Settings Template
                Description: Intial to log out to be a loser changes
            */}
            <div style={{border: "2px solid white"}}>
              <button>Logout and become a super LOSER</button>
            </div>


        </div>
      </div>
    </div>
  );
}





//Function: For Returning Star Wars API Cal
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    //Returns xmlHttp.responseText containing whole object in string form, only want name part
    const name = xmlHttp.responseText.substring(xmlHttp.responseText.search("name")+6 , xmlHttp.responseText.search("height")-2)

    return name;
}


export default App;





