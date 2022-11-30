import { useState } from "react";
const { ethers } = require("ethers");
const provider = new ethers.providers.EtherscanProvider();

export default function TransactionHistory() {
  let [address, setAddress] = useState(" ");
  let [history, setHistory] = useState([]);

  async function requestHistory(event) {
    event.preventDefault();
    let reply = await provider.getHistory(address);
    console.log(reply);
    setHistory(reply);
  }

  function defineAddress(event) {
    setAddress(event.target.value);
    if (address === "") setHistory([]);
  }

  return (
    <main>
      <span>
        <h1>Get Transaction History</h1>
        <form>
          <input type="text" onChange={defineAddress} />
          <button onClick={requestHistory}>SEARCH</button>
        </form>
        <br />
        <h4> Open the console to see full transaction list! </h4>
      </span>
    </main>
  );
}

// 0xe688b84b23f322a994A53dbF8E15FA82CDB71127
