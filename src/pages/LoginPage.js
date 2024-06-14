import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom"

import { authenticateUser } from "../helpers/database.js";
import { storeUserKey } from '../helpers/userStore.js';

function LoginPage() {

    const navigate = useNavigate();

    const [usernameEntry, setUsernameEntry] = useState("");
    const [passwordEntry, setPasswordEntry] = useState("");

    const onLogin = () => { // maybe change to useCallback => [usernameEntry, passwordEntry]

        if (usernameEntry === "" || passwordEntry === "") { // bound check user input
            alert("Enter a name and password")
        } 
        else {
            
            const userEntry = { name: usernameEntry, password: passwordEntry }
            authenticateUser(userEntry).then(res => {
                if(res) {
                    storeUserKey(res); // TODO: Store within an app-wide context, to be used throughout
                    navigate('/');
                } else {
                    alert("Wrong Credentials, Try Again!");
                    setUsernameEntry("");
                    setPasswordEntry("");
                }
            })
        }

    };

    return (
    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundImage: 'url(./thumbs.png)', height: "100vh", width: "100wh" }} >
        <Paper elevation={24} sx={{ display: 'flex', flexDirection: "column", gap: "24px", padding: "120px 40px 120px 40px" }}>
        <Typography
            variant="h4"
            align="center"
        >
            Login
        </Typography>
        <TextField
            required
            value={usernameEntry}
            onChange={event => setUsernameEntry(event.target.value)}
            label="Username"
        />
            <TextField
            required
            value={passwordEntry}
            onChange={event => setPasswordEntry(event.target.value)}
            label="Password"
        />
        <Button variant="contained" onClick={ onLogin }>
            Login
        </Button>
        <Button variant="contained" onClick={() => navigate('/registration')}>
            Create Account
        </Button>
        </Paper>
    </Box>
    )
}
export default LoginPage;