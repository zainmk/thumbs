import Cards from './Cards.js';
import Box from '@mui/material/Box';
import SearchCard from './SearchCard.js';
import MediaCard from './MediaCard.js';
import TextCard from './TextCard.js';


function CardList({ cardData, setCardData }){

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", alignItems: "center", }}>
        <Cards type={<SearchCard setCardData={setCardData}/>} />

        <Cards type={ <TextCard />} />

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