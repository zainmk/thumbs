import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom"

function LoginPage() {

    const navigate = useNavigate();

    return (
    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundImage: 'url(./thumbs.png)', height: "100vh", width: "100wh" }} >
        <Paper elevation={24} sx={{ display: 'flex', flexDirection: "column", gap: "24px", padding: "120px 40px 120px 40px" }}>
        <Typography
            variant="h4"
        >
            Create an Account | Login
        </Typography>
        <TextField
            required
            label="Username"
        />
            <TextField
            required
            label="Password"
        />
        <Button variant="contained" onClick={() => navigate('/')}>
            Login
        </Button>
        </Paper>
    </Box>
    )
}
export default LoginPage;