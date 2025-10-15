import React, {useState} from "react";
import Table from "./Table";

function Main() {

  let [amount, setAmount] = useState();
  let [selected, setSelected] = useState(false)
  let [error, setError] = useState(false);
    let [errorTotal, setErrorTotal] = useState(false);
      let [errorMin, setErrorMin] = useState(false);
  let [total, setTotal] = useState(17042.67)


let anyError = false;                   // if any error, send error state to table to display n/a in 'number of coins'
 if(error || errorTotal || errorMin){
  anyError = true;
 }

  const handleInput = (e)=>{

    console.log(e.target.value)
    const inputValue = e.target.value;

    if (inputValue === "" || isNaN(Number(inputValue))) {
      setError(true);
      setErrorMin(false)
      setErrorTotal(false);
      return;
    }

    if (Number(e.target.value) < 0.01) { // handle with simple error only && e.target.value<total){  
      setErrorMin(true);
      setError(false);
      setErrorTotal(false);
      return;
    }
    if (Number(e.target.value) > total) {
      setErrorTotal(true);
      setError(false);
      setErrorMin(false)

      return;
    }

    setAmount(e.target.value)
    setError(false);
    setErrorMin(false)
    setErrorTotal(false);
    // not needed to track more than 1 transaction
    // let temp = total - e.target.value;
    // setTotal(temp);


  }


  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange $ <input className="w-10" data-testid="amount-input" required type="number" placeholder="USD" value={amount} onChange={handleInput} /> of my $
            <span>{total}</span>:
          </label>
         
            {error ?  <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">Amount cannot be empty</p>: "" }
            {errorMin ?  <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">Amount cannot be less than $0.01</p>: ""}
            {errorTotal ? <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">Amount cannot exceed the available balance.</p> : ""}
          
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table amount={amount} anyError={anyError} />
    </div>
  );
}

export default Main;
