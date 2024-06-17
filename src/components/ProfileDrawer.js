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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import LetterAvatars from './Avatar';


export default function ProfileDrawer() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = ()=> setOpen(!open)

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <div style={{ textAlign: "center"}}>
          <p>name</p>
          <img src={'/thumbs.png'} alt='user avatar' width={'125px'} />
          <p> profile info </p>
        </div>
      <Divider />
      </List>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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