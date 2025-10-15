import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list.js";
console.log(cryptocurrencyList)
function Table({amount, anyError}) {

  const totalCoins =(rate)=>{
    console.log("calculating ", rate, " = ", Number(crypto.rate) * Number(amount))
    
    let temp=Number(rate) * Number(amount)
    console.log({temp})
    if(!temp ) temp=0
    return temp.toFixed(8);
  }

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
       
          {cryptocurrencyList.map(crypto=>(
          <tr key={crypto.code}>
            <td>{crypto.name}</td>
            <td>1 USD = {(crypto.rate)} {crypto.code}</td>
            <td> {anyError ? "n/a" : totalCoins(crypto.rate)} </td>
          </tr>

          ))}

        </tbody>
      </table>
    </div>
  );
}

export default Table;
