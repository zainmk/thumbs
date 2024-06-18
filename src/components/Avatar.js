import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

import { useContext, useEffect, useState } from 'react';
import { Context } from '../helpers/userContext';

import { recallUserData } from '../helpers/database';


export default function LetterAvatars(props) {


  const [userID] = useContext(Context); //Improting userID from context


    //Context trying, return basic user key
    const userIDValue = userID;
    const [userData, setUserData] = useState({name:" "});

    useEffect(() => {
  
      if(userIDValue){
        recallUserData(userIDValue).then((res) => setUserData(res))
      }
  
    }, [userIDValue]);



    //Can make this function a global fnciton, used wheneevr you have to deal with user database!!!
    //You enter the users array of objects, and enter userID for user you want, RETURNS users information in an object
    /*
  function findingUser(users, userID) {
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
    */



  return (
    <Stack direction="row" spacing={2}>

      <Avatar sx={{ bgcolor: deepOrange[500] }}>{userData?.name.substring(0,1)}</Avatar>
    </Stack>
  );
}