import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

//Component Imports
import Header from "./components/Header";
import CoinList from "./components/CoinList";

function App() {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    const response = await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    setCoins(response.data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="App">
      <Header />
      <CoinList coins={coins} />
    </div>
  );
}

export default App;
