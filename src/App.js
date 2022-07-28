import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import Login from './routes/Login'
import Register from './routes/Register'
import Account from './routes/Account'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
