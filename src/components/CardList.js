import Cards from './Cards.js';
import Box from '@mui/material/Box';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';


function CardList(){

    const [testData, setTestData] = useState([1, 2, 3]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", backgroundImage:"url('rollinghills.gif')"}}>
            {testData.map((element) => {
                return (
                    <Cards data={testData} setData={setTestData} />
                )
            })}
            <AddIcon/>
        </Box>
    )

}

export default CardList;