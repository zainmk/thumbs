import Cards from './Cards.js';
import Box from '@mui/material/Box';


function CardList(){

    const test = [1, 2, 3];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", backgroundImage:"url('rollinghills.gif')"}}>
            {test.map((element) => {
                return (
                    <Cards />
                )
            })}
        </Box>
    )

}

export default CardList;