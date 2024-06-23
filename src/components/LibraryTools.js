import * as React from 'react'

import { IconButton } from '@mui/material';
import RecommendIcon from '@mui/icons-material/Recommend';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


function LibraryTools(){

    return (
        <>
            <IconButton sx={{ transform: "rotate(180deg)" }}> <RecommendIcon/> </IconButton>
            <IconButton> <RecommendIcon/> </IconButton>
            <IconButton> <LibraryAddIcon/> </IconButton>
        </>
        
    )

}
export default LibraryTools;