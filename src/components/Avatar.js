import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../helpers/userContext';

import { getUserData } from '../helpers/database';


export default function LetterAvatars() {

  const { userID } = useContext(UserContext);
  const [ userName, setUserName ] = useState("");

  useEffect(() => {

    if(userID){
      getUserData(userID).then((res) => setUserName(res.name))
    }

  }, [userID]);


  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{userName[0]}</Avatar>
    </Stack>
  );
}