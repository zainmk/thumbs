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


export default function ProfileDrawer(userID) {

  //Context trying, return basic user key
  const userIDValue = useContext(Context);

  console.log(recallUserData(userIDValue));


   useEffect(() => {
    const fetchData = async()=> {
      const data = await recallUserData(userIDValue)()

      console.log(data)
    }
    fetchData()
    }, [userIDValue]);



  const [open, setOpen] = useState(false);

  const toggleDrawer = ()=> setOpen(!open)

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <div style={{ textAlign: "center"}}>

          {/*data.name*/}

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