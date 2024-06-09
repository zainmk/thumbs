import '../App.js';
import React from "react";
import image from '../fake-database/pigeon.jpg';

import TitleBar from '../components/TitleBar.js';
import LetterAvatars from '../components/Avatar.js';

import CardList from '../components/CardList.js';

import users from "../fake-database/userDatabase.json";
import { httpGet } from '../helpers/request.js';

//Make a div, than do what you want in your card.

function MainPage() {

  return (
    <div className='MainPage'>
      <TitleBar />
      <div style={{ display: "flex", flexDirection: "row"}}> 
        <div style={{flex: 20, border: "2px solid black"}}> 
          Profile Info 

            { /*
                Card Name:  Basic Profile Template
                Description: Has picture of profile
            */}
            <div style={{border: "2px solid white"}}>
              <img src={image} alt='relevant description' />
            </div>

            { /*
                Card Name:  Basic Profile Template
                Description: Adding letter avatar for profile
            */}
            <div style={{border: "2px solid white", "padding-left": "80px"}}>
              {/*enter initial of profile person, fake initial : H*/}
              <LetterAvatars name="D" />
            </div>
            
            { /*
                Card Name:  Basic Profile Template
                Description: Tagline description
            */}
            <div style={{border: "2px solid white"}}>
              <p>Name : {JSON.stringify(users, null, 2).substring(JSON.stringify(users, null, 2).search("name") + 6, JSON.stringify(users, null, 2).search("profileDescription")-4)}</p>
            </div>


            { /*
                Card Name:  Basic Profile Template
                Description: Tagline description
            */}
            <div style={{border: "2px solid white"}}>
              <p>Date Of Birth : {JSON.stringify(users, null, 2).substring(JSON.stringify(users, null, 2).search("DateOfBirth") + 14, JSON.stringify(users, null, 2).search("End")-4)}</p>
            </div>

            { /*
                Card Name:  Basic Profile Template
                Description: Description
            */}
            <div style={{border: "2px solid white"}}>
              <p>Description : {JSON.stringify(users, null, 2).substring(JSON.stringify(users, null, 2).search("profileDescription") + 20, JSON.stringify(users, null, 2).search("DateOfBirth")-5)}</p>
            </div>

        </div>


        <div style={{flex: 60, border: "2px solid black" }}>
          <CardList />
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
              <a href="https://docs.google.com/document/d/1YHfOfMTHxckLrYp10GOTC3uVzykLQSCbtJKRlVOhnbg/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><button>Go to Google Docs For APP Planning Document</button></a>
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
              <a href="https://hackertyper.com/" target="_blank" rel="noopener noreferrer">              <button>Click Here to Hack into the pentagon!!!!!!</button></a>
            </div>


            { /*
                Card Name:  Basic Card Template
                Description: Has Basic button and paragraph
            */}
            <div style={{border: "1px solid black"}}>
              <p> Card for listeng to persons documentary on living without a job</p>
              <a href="https://thatsthefinger.com/" target="_blank" rel="noopener noreferrer">              <button>Click Here to Hack into persons DAtAbASES!!!</button></a>
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

export default MainPage;




