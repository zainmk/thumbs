import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

import users from "../fake-database/userDatabase.json";


export default function LetterAvatars(props) {

    //Can make this function a global fnciton, used wheneevr you have to deal with user database!!!
    //You enter the users array of objects, and enter userID for user you want, RETURNS users information in an object
  function findingUser(users, userID="10000001") {
    var results = [];
    var searchField = "id";
    var searchVal = userID;

    for (var i=0 ; i < users.users.length ; i++)
    {
        if (users.users[i]["id"] === searchVal) {
            results.push(users.users[i]);
        }
    }
    return results[0];
  }



  return (
    <Stack direction="row" spacing={2}>

      <Avatar sx={{ bgcolor: deepOrange[500] }}>{findingUser(users,"10000001").name.substring(0,1)}</Avatar>
    </Stack>
  );
}