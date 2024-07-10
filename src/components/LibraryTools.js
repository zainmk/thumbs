import * as React from 'react'
import { useState } from 'react';
import { IconButton } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import RecommendIcon from '@mui/icons-material/Recommend';
import { changeMediaDislikes, changeMediaLikes } from '../helpers/database';


function LibraryTools(props){

    const [isButtonsDisabled, setButtonsDisabled] = useState(false);
    //I want the user to only be able to like or dislike once, than disable buttons
    //If we want them to change it after, than we msut make a user storage of the users likes and disllikes for each media


    const likeMedia = () => {
        console.log("hello I like this")
        console.log("LibraryTools" + props.mediaID)
        changeMediaLikes(props.mediaID, true)
        setButtonsDisabled(true);

    }


    const dislikeMedia = () => {
        console.log("hello I dislike this")
        console.log(props.mediaID)
        changeMediaDislikes(props.mediaID, true)
        setButtonsDisabled(true);


    }

    return (
        <>
            <IconButton  onClick={ dislikeMedia } sx={{ transform: "rotate(180deg)" }}  disabled={isButtonsDisabled}> <RecommendIcon/> </IconButton>
            <IconButton onClick={ likeMedia }  disabled={isButtonsDisabled}> <RecommendIcon/> </IconButton>
            <IconButton> <PreviewIcon/> </IconButton>
        </>
        
    )

}
export default LibraryTools;