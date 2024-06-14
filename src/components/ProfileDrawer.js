import * as React from 'react';
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
import users from "../fake-database/userDatabase.json";
import image from '../fake-database/pigeon.jpg';





export default function ProfileDrawer() {


  //Can make this function a global fnciton, used wheneevr you have to deal with user database!!!
  //You enter the users array of objects, and enter userID for user you want, RETURNS users information in an object
  function findingUser(users, userID="10000001") {
    var results = [];
    var searchVal = userID;

    for (var i=0 ; i < users.users.length ; i++)
    {
        if (users.users[i]["id"] === searchVal) {
            results.push(users.users[i]);
        }
    }
    return results[0];
  }


  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div style={{ textAlign: "center"}}>
          <p>{findingUser(users,"10000001").name}</p>
          <img src={image} alt='relevant description' />
          <p>{"Nothing"}</p>



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
      <Button onClick={toggleDrawer(true)}><LetterAvatars/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}