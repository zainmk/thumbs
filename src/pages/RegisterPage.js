import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {addUser} from '../helpers/database.js';

import { useNavigate } from "react-router-dom"

function RegisterPage() {

    const navigate = useNavigate();

    const [usernameEntry, setUsernameEntry] = useState("");
    const [passwordEntry, setPasswordEntry] = useState("");
    const [confirmPasswordEntry, setConfirmPasswordEntry] = useState("");

    const onCreateAccount = () => {

        const valWhitespace = str => /\s/.test(str);
        const valAlphanumeric = str => /^[A-Za-z0-9]*$/.test(str);

        // TODO: make 'toasts' for users to display alerts
        if (valWhitespace(usernameEntry) || valWhitespace(passwordEntry) || !valAlphanumeric(passwordEntry) || !valAlphanumeric(usernameEntry)) {
            alert("invalid entry, no whitespace or special characters"); 
            setUsernameEntry("");
            setPasswordEntry("");
        }
        else if(usernameEntry === "" || passwordEntry === ""){ alert('username or password is empty') }
        else if(passwordEntry !== confirmPasswordEntry){ alert('passwords are not the same') }
        else {

            const newUser = {
                name: usernameEntry,
                password: passwordEntry,
                CardData: 
                    {
                        Favourites: "None"
                    },
                profileDescription: "oneDay...",
                id: Math.floor(Math.random() * (99999999 - 11111111) + 11111111)
            }

            addUser(newUser);
            navigate('/login');

        }
    };


    return (
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundImage: 'url(./thumbs.png)', height: "100vh", width: "100wh" }} >
                <Paper elevation={24} sx={{ display: 'flex', flexDirection: "column", gap: "24px", padding: "120px 40px 120px 40px" }}>
                <Typography
                    variant="h4"
                    align="center"
                >
                    register
                </Typography>
                <TextField
                    required
                    value={usernameEntry}
                    onChange={event => setUsernameEntry(event.target.value)}
                    label="username"
                />
                <TextField
                    required
                    value={passwordEntry}
                    type="password"
                    onChange={event => setPasswordEntry(event.target.value)}
                    label="password"
                />
                 <TextField
                    required
                    value={confirmPasswordEntry}
                    onChange={event => setConfirmPasswordEntry(event.target.value)}
                    label="confirm password"
                    type="password"
                />
            <Button variant="contained" onClick={ onCreateAccount }> create account </Button>
            <Button variant="contained" onClick={() => navigate('/login')}> back </Button>
            </Paper>
        </Box>
    )
}
export default RegisterPage;