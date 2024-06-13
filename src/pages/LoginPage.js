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

    //Making states to capture values
    const [usernameEntry, setUsernameEntry] = useState("Alan");
    const [passwordEntry, setPasswordEntry] = useState("Alan");



    //When they click LOGIN button, what happens, thye sumbit login FORM
    const submitFormHandler = (event) => {
        event.preventDefault();

        console.log("Logining In Account Form Button Clicked!")

        //Create an Object
        const userData = {};

        //Add Properties, some are just dummy properties
        userData.name = usernameEntry;
        userData.password = passwordEntry;

          if (usernameEntry === "" || passwordEntry === "") {
            alert("Enter name and password")
          } else {

        


        let userKey;

        //A promise .than chain, wait for them to get the whole anwer, than proceed with infor throughout this function
        //Function im calling, has alot of waiting time
        authenticateUser(userData).then(res => console.log(userKey=res)).then(function(value) {
            if(userKey) {
                storeUserKey(userKey);
                navigate('/',{userKey : userKey});
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
        <Button variant="contained" onClick={() => navigate('/registration')}>
            Create Account
        </Button>
        <Button variant="contained" onClick={submitFormHandler}>
            Login
        </Button>
        </Paper>
    </Box>
    )
}
export default LoginPage;