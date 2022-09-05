import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import Login from './routes/Login'
import Register from './routes/Register'
import Account from './routes/Account'
import axios from "axios";
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer";
import { UserAuthContextProvider } from "./context/AuthContext";

function App() {
  const [data, setData] = useState([])

  const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  // Making API request after the component re-renders and set the dependency to monitor changes to the apiURL
  useEffect(() => {
    axios.get(apiURL)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [apiURL])

  return (
    <ThemeProvider>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
