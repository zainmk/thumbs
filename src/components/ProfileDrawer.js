import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LetterAvatars from './Avatar';

import RecommendIcon from '@mui/icons-material/Recommend';
import PreviewIcon from '@mui/icons-material/Preview';

import { useContext } from 'react';

import { UserContext } from '../helpers/userContext';

export default function ProfileDrawer() {

  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const toggleDrawer = ()=> setOpen(!open)

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <div style={{ textAlign: "center"}}>
          <p> {user} </p>
          <img src={'/string.webp'} alt='user avatar' width={'125px'} />
          <p> Level 1 </p>
        </div>
      <Divider />
      </List>
      <List>
          <ListItem key={'Likes'} disablePadding>
            <ListItemButton> <ListItemIcon> <RecommendIcon sx={{ color: '#40ff40' }}/> </ListItemIcon> <ListItemText primary={'Likes'} /></ListItemButton>
          </ListItem>
          <ListItem key={'Dislikes'} disablePadding>
            <ListItemButton > <ListItemIcon> <RecommendIcon sx={{ transform: "rotate(180deg)", color: "#ff8080" }}/> </ListItemIcon> <ListItemText primary={'Dislikes'} /></ListItemButton>
          </ListItem>
          <ListItem key={'Watchlist'} disablePadding>
            <ListItemButton> <ListItemIcon> <PreviewIcon sx={{ color: "#8080ff" }}/> </ListItemIcon> <ListItemText primary={'Watchlist'} /></ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer}><LetterAvatars/></Button>
      <Drawer open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}