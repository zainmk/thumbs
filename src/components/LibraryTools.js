import * as React from 'react'

import { IconButton } from '@mui/material';
import RecommendIcon from '@mui/icons-material/Recommend';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { increaseMediaLikes } from '../helpers/database';


function LibraryTools(props){

    const likeMedia = () => {
        console.log("hello I like this")
        console.log("LibraryTools" + props.mediaID)
        increaseMediaLikes(props.mediaID)

    }


    const dislikeMedia = () => {
        console.log("hello I dislike this")
        console.log(props.mediaID)


    }

    return (
        <>
            <IconButton  onClick={ dislikeMedia } sx={{ transform: "rotate(180deg)" }}> <RecommendIcon/> </IconButton>
            <IconButton onClick={ likeMedia }> <RecommendIcon/> </IconButton>
            <IconButton> <LibraryAddIcon/> </IconButton>
        </>
        
    )

}
export default LibraryTools;