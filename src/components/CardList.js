import Cards from './Cards.js';
import Box from '@mui/material/Box';
import SearchCard from './SearchCard.js';
import MediaCard from './MediaCard.js';

function CardList({ mediaList, setMediaList, watchList, setWatchList }){

    // TODO: Add 'loading' state and render image possibly (while cards are loading)

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", alignItems: "center", }}>
        <Cards type={<SearchCard setMediaList={setMediaList}/>} />
        {mediaList?.map((media) => (
            <Cards 
                key={media.imdbID} 
                onDelete={()=> {
                    setMediaList(mediaList?.filter((entry) => entry.imdbID !== media.imdbID))
                }} 
                type={<MediaCard data={media} watchList={watchList} setWatchList={setWatchList}/>}
            />
        ))}
    </Box>
    )
}
export default CardList;