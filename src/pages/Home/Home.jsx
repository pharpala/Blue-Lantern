import React from 'react'
import './Home.css'

const Home = () => {
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
      </div>
    </div>
  )
}

export default Home
