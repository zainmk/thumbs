import Cards from './Cards.js';
import Box from '@mui/material/Box';
import SearchCard from './SearchCard.js';
import MediaCard from './MediaCard.js';



function CardList({ cardData, setCardData }){

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", alignItems: "center", backgroundImage:"url('rollinghills.gif')"}}>
        <Cards type={<SearchCard setCardData={setCardData}/>} />
        <SearchCard setCardData={setCardData} />
        {cardData.map((element) => {
            return (
                <Cards 
                    key={element.imdbID} 
                    onDelete={()=>setCardData(cardData.filter(entry => entry.Title !== element.Title))} 
                    type={<MediaCard data={element}/>}
                />
            )
        })}
    </Box>
    )

}

export default CardList;