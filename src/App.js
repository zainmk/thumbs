import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);