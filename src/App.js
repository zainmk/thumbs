import './App.css';
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage.js";
import ProtectedRoutes from "./helpers/ProtectedRoutes.js";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { UserContext } from './helpers/userContext';
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  const [userID, setUserID] = useState(localStorage.getItem('user')); //TODO: CONSIDER A CUSTOM HOOK

  return (
    <UserContext.Provider value={{ userID, setUserID }}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<MainPage />} />
            </Route>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  )
}