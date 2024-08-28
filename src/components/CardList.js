import Cards from './Cards.js';
import Box from '@mui/material/Box';
import SearchCard from './SearchCard.js';
import MediaCard from './MediaCard.js';
import CircularProgress from '@mui/material/CircularProgress';

function CardList({ mediaList, setMediaList, isLoading }){

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
        <Cards type={<SearchCard setMediaList={setMediaList}/>} />
        {isLoading ? <CircularProgress /> : mediaList?.map((media) => (
            <Cards 
                key={media.imdbID} 
                onDelete={ ()=> setMediaList(mediaList?.filter((entry) => entry.imdbID !== media.imdbID)) } 
                type={<MediaCard media={media} setMediaList={setMediaList}/>}
            />
        ))}
    </Box>
    )
}
export default CardList;