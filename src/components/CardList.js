import Cards from './Cards.js';
import Box from '@mui/material/Box';
import SearchCard from './SearchCard.js';


function CardList({ cardData, setCardData }){

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", alignItems: "center", backgroundImage:"url('rollinghills.gif')"}}>
        <SearchCard setCardData={setCardData} />
        {cardData.map((element) => {
            return (
                <Cards key={element.imdbID} data={element} onDelete={()=>{
                    setCardData(cardData.filter(entry => entry.Title !== element.Title))
                }
                } />
            )
        })}
    </Box>
    )

}

export default CardList;