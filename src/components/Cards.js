import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';


function Cards({ onDelete, data }){

    return ( 
    <Card className="cards" sx={{ margin:"20px", width: "80%" }}> {/* TODO: MAKE A CARD WRAPPER COMPONENT */}
        <CardContent sx={{ display: "flex", gap:"20px", flexDirection: "row" }}> 
            <Box>
                <Paper elevation={24} sx={{ height:"120px", width: "120px"}}> 
                    <img alt={'testImage'} src={ 'logo192.png'} style={{ height:"100%", width: "100%" }} />
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
            </Box>
        </CardContent>
        <CardActions>
            <Button variant='outlined' startIcon={<DeleteIcon />} onClick={ onDelete }>
                Delete
            </Button>
        </CardActions>
    </Card>
    )

}
export default Cards;