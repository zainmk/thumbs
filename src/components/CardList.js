import Cards from './Cards.js';
import Box from '@mui/material/Box';
import SearchCard from './SearchCard.js';
import MediaCard from './MediaCard.js';
import TextCard from './cards/TextCard.js';



function CardList({ mediaList, setMediaList }){

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", alignItems: "center", }}>
        <Cards type={<SearchCard setMediaList={setMediaList}/>} />
        <Cards type={ <TextCard />} />
        {mediaList?.map((media) => (
            <Cards 
                key={media.imdbID} 
                onDelete={()=> {
                    setMediaList(mediaList?.filter((entry) => entry.imdbID !== media.imdbID))
                }} 
                type={<MediaCard data={media}/>}
            />
        ))}
    </Box>
    )
}
export default CardList;