import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Delete from '@mui/icons-material/Delete';


function Cards(){
    return ( 
    <Card sx={{ minWidth: 275, margin:"20px" }}>
        <CardContent sx={{ display: "flex", gap:"20px", flexDireciton: "row" }}>
            <Box>
                <Paper elevation={24} sx={{ height:"120px", width: "120px"}}> 
                    <img alt={'testImage'} src={ 'logo192.png'} style={{ height:"100%", width: "100%" }} />
                </Paper>
            </Box>
            <Box>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    music / movie / game
                </Typography>
                <Typography variant="h5" component="div">
                    name / title
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    author / director / studio
                </Typography>
                <Typography variant="body2">
                    description of media
                </Typography>
            </Box>
        </CardContent>
        <CardActions>
            <Button>
                <Delete />
            </Button>
        </CardActions>
    </Card>
    )

}
export default Cards;