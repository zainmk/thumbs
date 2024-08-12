import * as React from 'react'
import { IconButton } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import RecommendIcon from '@mui/icons-material/Recommend';


function LibraryTools({ data, watchList, setWatchList }){

    return (
        <>
            <IconButton  sx={{ transform: "rotate(180deg)" }} > <RecommendIcon/> </IconButton>
            <IconButton> <RecommendIcon/> </IconButton>
            <IconButton onClick={ () => setWatchList(Array.from(new Set([...watchList, data.imdbID]))) } > <PreviewIcon/> </IconButton>
        </>
        
    )

}
export default LibraryTools;