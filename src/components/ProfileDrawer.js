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
import { useContext, useEffect } from 'react';

import { Context } from '../helpers/userContext';

import { recallUserData } from '../helpers/database';


export default function ProfileDrawer() {

  const [userID] = useContext(Context); //Improting userID from context

  const [userData, setUserData] = useState();



  //Context trying, return basic user key
  const userIDValue = userID;

  useEffect(() => {

    if(userIDValue){
      recallUserData(userIDValue).then((res) => setUserData(res))
    }

  }, [userIDValue]);


  const [open, setOpen] = useState(false);

  const toggleDrawer = ()=> setOpen(!open)

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <div style={{ textAlign: "center"}}>
          <p>The user ID: {userID}</p>
          <p>{ userData?.name } </p>
          <img src={'/thumbs.png'} alt='user avatar' width={'125px'} />
          <p> {userData?.profileDescription} </p>
          <p> {userData?.DateOfBirth} </p>
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