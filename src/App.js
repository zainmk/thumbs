import './App.css';

function App() {

  return (
    <div className='App'>
      <div style={{ height: "50px" }}> music app ♪ </div>
      <div style={{ display: "flex", flexDirection: "row", height: "100vh"}}>  {/* remove the 'vh' when adding actual content*/}
        <div style={{flex: 20, border: "2px solid black"}}> 
          Profile Info 
        </div>
        <div style={{flex: 60, border: "2px solid black" }}>
          Card Info 
        </div>
        <div style={{flex: 20, border: "2px solid black" }}>
          Settings 
        </div>
      </div>
    </div>
  );
}

export default App;