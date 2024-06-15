import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function Cards({ onDelete, type }){

    return ( 
    <Card className="cards" sx={{ margin:"20px", width: "80%" }}>
        <CardContent>
            { type }
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