import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThumbsUpDownTwoTone } from '@mui/icons-material';

import Button from '@mui/material/Button';
import ProfileDrawer from './ProfileDrawer';

import { useNavigate } from "react-router-dom"

export default function TitleBar() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar>
          <ProfileDrawer/>
            <Typography
                variant="h6"
                component="div"
                sx={{flexGrow: 1, textAlign: "center"}}
              >
                t h u m b s <ThumbsUpDownTwoTone /> 
              </Typography>
              <Button color="inherit" onClick={()=> navigate('/login')}>Login</Button>
          </Toolbar>
        </AppBar>
    </Box>
  );
}