import * as React from 'react'
import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import RecommendIcon from '@mui/icons-material/Recommend';


function LibraryTools({ data, watchList, setWatchList }){

    useEffect(()=> {
        console.log(watchList)
    }, [watchList])


    // const likeMedia = () => {
    //     console.log("hello I like this")
    //     console.log("LibraryTools" + props.mediaID)
    //     changeMediaLikes(props.mediaID, true)
    //     setButtonsDisabled(true);

    // }


    // const dislikeMedia = () => {
    //     console.log("hello I dislike this")
    //     console.log(props.mediaID)
    //     changeMediaDislikes(props.mediaID, true)
    //     setButtonsDisabled(true);


    // }

    return (
        <>
            <IconButton  sx={{ transform: "rotate(180deg)" }} > <RecommendIcon/> </IconButton>
            <IconButton> <RecommendIcon/> </IconButton>
            <IconButton onClick={ () => setWatchList(Array.from(new Set([...watchList, data.imdbID]))) } > <PreviewIcon/> </IconButton>
        </>
        
    )

}
export default LibraryTools;