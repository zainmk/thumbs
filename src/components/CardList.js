import Cards from './Cards.js';
import Box from '@mui/material/Box';
import { useState } from 'react';
import SearchCard from './SearchCard.js';


function CardList(){

    const [testData, setTestData] = useState([1, 2, 3]);

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", backgroundImage:"url('rollinghills.gif')"}}>
        <SearchCard />
        {testData.map((element) => {
            return (
                <Cards key={element} data={testData} setData={setTestData} />
            )
        })}
    </Box>
    )

}

export default CardList;