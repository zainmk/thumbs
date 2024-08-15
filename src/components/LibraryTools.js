import * as React from 'react'
import { IconButton } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import RecommendIcon from '@mui/icons-material/Recommend';


function LibraryTools({ status, setStatus }){

    const toDislikeStyles = { border: status==="dislike" ? "1px solid white" : "", margin: status==="dislike" ? "-1px" : "" }
    const toLikeStyles = { border: status==="like" ? "1px solid white" : "", margin: status==="like" ? "-1px" : "" }
    const toWatchStyles = { border: status==="watch" ? "1px solid white" : "", margin: status==="watch" ? "-1px" : "" }

    return (
        <>
            <IconButton onClick={()=> setStatus(status === 'dislike' ? '':'dislike')} sx={{ transform: "rotate(180deg)" }} > 
                <RecommendIcon sx={toDislikeStyles} /> 
            </IconButton>

            <IconButton onClick={()=> setStatus(status === 'like' ? '' : 'like')}> 
                <RecommendIcon sx={toLikeStyles} /> 
            </IconButton>

            <IconButton onClick={()=> setStatus(status === 'watch' ? '' : 'watch')}>
                <PreviewIcon sx={toWatchStyles} /> 
            </IconButton>
        </>
        
    )

}
export default LibraryTools;