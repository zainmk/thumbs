import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {addUser} from '../helpers/database.js';

import { useNavigate } from "react-router-dom"

function RegistrationPage() {

    const navigate = useNavigate();

    //Making states to capture values
    const [usernameEntry, setUsernameEntry] = useState("");
    const [passwordEntry, setPasswordEntry] = useState("");



    //When they click finish Creation button, what happens
    const submitFormHandler = (event) => {
        event.preventDefault();
    
        console.log("Creating Account Form Button Clicked!")

        //checking for white spaces
        const containsWhitespace = str => /\s/.test(str);
        
        //making suer username and passwor dinputs are validated
        if (containsWhitespace(usernameEntry) || containsWhitespace(passwordEntry) || usernameEntry === "" || passwordEntry === "") {
            alert("Username and password must have no spaces!");

        }else {

            
            //create dummy filligns for other rquried data entries and create a userData object
            const newUserDOB = "Jan, 1, 1800";
            const newUserProfileDescription = "oneDay...";
            const newUserID = Math.floor(Math.random() * (99999999 - 11111111) + 11111111)
            
            //Create an Object
            const newUser = {};

            //Add Properties, some are just dummy properties
            newUser.name = usernameEntry;
            newUser.password = passwordEntry;
            newUser.DateOfBirth = newUserDOB;
            newUser.profileDescription = newUserProfileDescription;
            newUser.id = newUserID;

            //addUser to GFirebase Dtabase, function from post.js
            addUser(newUser);

            navigate('/login');
        }
    };


    return (
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundImage: 'url(./thumbs.png)', height: "100vh", width: "100wh" }} >
                <Paper elevation={24} sx={{ display: 'flex', flexDirection: "column", gap: "24px", padding: "120px 40px 120px 40px" }}>
                <Button variant="contained" onClick={() => navigate('/login')}>Back</Button>
                <Typography
                    variant="h4"
                >
                    Create an Account
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
            <Button variant="contained" onClick={submitFormHandler}>Finish Creation</Button>
            </Paper>
        </Box>
    )
}
export default RegistrationPage;


/*
    <form className={classes.form} onSubmit={submitFormHandler}>

      {status === 'pending' && <div className='centered'><LoadingSpinner/></div>}

      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment' >Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
*/