import '../App.js';
import React, { useState, useEffect } from "react";

import TitleBar from '../components/TitleBar.js';
import CardList from '../components/CardList.js';
import Box from '@mui/material/Box';

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
      <Box sx={{ display: 'flex', flexDirection: 'column', height:"100vh" }}>
        <TitleBar  />
        <Box sx={{ flex: 1, backgroundImage:"url('rollinghills.gif')" }}>
          <CardList cardData={cardData} setCardData={setCardData} />
        </Box>
      </Box>
  );
}

export default MainPage;