import React, {useContext, useEffect, useState} from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect ( () => {
    setDisplayCoin(allCoin);
  }, [allCoin])


  return (
    <div className="home">
      <div className="hero">
        <h1> Largest <br />Crypto Marketplace</h1>
        <p> Welcome to the world's largest cryptocurrency
          marketplace. Sign up to explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder='Search Crypto'></input>
          <button type='submit'> Search </button>
        </form>
      </div>
      <div className="cryptoTable">
        <div className="tableLayout">
          <p> # </p>
          <p> Coins </p>
          <p> Price</p>
          <p style= {{textAlign: "center"}}> 24h Change</p>
          <p className="marketCap"> Market Cap</p>
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <div className="tableLayout" key={index}>
              <p> {item.market_cap_rank}</p>
              <div className='price'>
                <img src={item.image} />
                <p></p>
                <p>{item.name +' - '+ item.symbol}</p>
              </div>
              <p> {currency.symbol} {item.current_price.toLocaleString()} </p>
              <p className= {item.price_change_percentage_24h >0 ? "green": "red"}> {Math.floor(item.price_change_percentage_24h * 100)/100}%</p>
              <p className='marketCap'> {currency.symbol}{item.market_cap.toLocaleString()} </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
