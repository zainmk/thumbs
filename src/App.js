import './App.css';
import React, { useState } from "react";


//Make a div, than do what you want in your card.

function App() {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(1);

  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };


  return (
    <div className='App'>
      <div style={{ height: "50px" }}> music app ♪ </div>
      <div style={{ display: "flex", flexDirection: "row", height: "100vh"}}>  {/* remove the 'vh' when adding actual content*/}
        <div style={{flex: 20, border: "2px solid black"}}> 
          Profile Info 
        </div>
        <div style={{flex: 60, border: "2px solid black" }}>
          Card NewsFeed 
          { /*
            Instructions: Copy the basic Card Template, and paste it at the bttom IN card NewsFeed Div section
            */}

          <div className="App">

            { /*
                Card Name:  Basic Card Template
                Description: Has paragraph of card info
            */}
            <div style={{border: "1px solid black"}}>
              card info
            </div>


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
              <button> The name of a person in star wars is {httpGet("https://swapi.dev/api/people/" + counter )}</button>
            </div>


          </div>
        </div>
        <div style={{flex: 20, border: "2px solid black" }}>
          Settings 
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





