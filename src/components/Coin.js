import React from "react";

//CSS
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1 className="coin-name">{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">Cap: $ {marketcap.toLocaleString()}</p>
        </div>
      </div>
      <h1>
        This is a Crypto Tracker app that shows current Coin status. I used
        CoinGecko API to render coins.
      </h1>
      <h3>
        Demo :{" "}
        <a href="https://crypto-tracker-epmjn00l8-bartugenccan.vercel.app/">
          https://crypto-tracker-epmjn00l8-bartugenccan.vercel.app/
        </a>
      </h3>
    </div>
  );
};

export default Coin;
