import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThumbsUpDownTwoTone } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';

// TODO: consider adding dark mode for the entire app
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

export default function TitleBar() {

  return (
    <Box sx={{ flexGrow: 1, alignItems: "center" }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <Typography
                variant="h6"
                component="div"
                sx={{flexGrow: 1}}
              >
                t h u m b s <ThumbsUpDownTwoTone /> 
              </Typography>
              <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}