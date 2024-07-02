import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import LibraryTools from './LibraryTools';


function MediaCard({ data }){

    const [image, setImage] = useState()
    useEffect(() => {
        if(data.Poster && data.Poster !== 'N/A'){
            fetch(data.Poster)
                .then(res => res.blob())
                .then(res => URL.createObjectURL(res))
                .then(res => setImage(res))
        }
        
    }, [data])

    return ( 
        <Box sx={{ display: "flex", gap:"20px", flexDirection: "row" }}>
            <Box>
                <Paper elevation={24} sx={{ width :"120px" }}> 
                    <img alt={''} src={ image } style={{ width:"100%" }} />
                </Paper>
            </Box>
            <Box>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.Type}
                </Typography>
                <Typography variant="h5" component="div">
                    {data.Title} | ({data.Year})
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    artist | director | studio
                </Typography>
                <Typography variant="body2">
                    description of media
                </Typography>
                <Box sx={{ display:"flex", flexDirection: "row" }} >
                    <LibraryTools mediaID={data.imdbID=null ? 0 : data.imdbID}/>
                </Box>
            </Box>
        </Box>
    )
}
export default MediaCard;