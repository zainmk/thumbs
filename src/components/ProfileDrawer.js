import * as React from 'react';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';

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
          <ListItem key={'home'} disablePadding>
            <ListItemButton> <ListItemIcon> <HomeIcon /> </ListItemIcon> <ListItemText primary={'HOME'} /></ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ color: 'white' }}>{user[0]}</Avatar>
        </Stack>
      </Button>
      <Drawer open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}