import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { useContext } from 'react';
import { UserContext } from '../helpers/userContext';

export default function LetterAvatars() {

  const { user } = useContext(UserContext);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ color: 'white' }}>{user[0]}</Avatar>
    </Stack>
  );
}