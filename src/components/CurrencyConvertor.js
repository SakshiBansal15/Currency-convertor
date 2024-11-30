import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import React, { useEffect, useState } from 'react'
import CurrencyDropdown from './CurrencyDropdown';
// https://api.frankfurter.app/currencies
//  https://api.frankfurter.app/latest
//   https://api.frankfurter.app/latest?amount=1&from=USD&to=EUR


const CurrencyConvertor = () => {

  const [currencies,setCurrencies]=useState([]);
  const [amount,setAmount]=useState(1);
  const [fromCurrency,setFromCurrency]=useState('INR')
  const [toCurrency,setToCurrency]=useState('USD')
  const [convertedAmount,setConvertedAmount]=useState(null)

  const fetchCurrencies=async()=>{
    try {
       const res=await fetch("https://api.frankfurter.app/currencies")
       const data=await res.json()
       setCurrencies(Object.keys(data))
    } catch (error) {
        console.log("error in fetching data")
    }
  }
 console.log(currencies)
  useEffect(()=>{
    fetchCurrencies();
  },[])

  const convertCurrency=async()=>{
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data= await res.json() 

      setConvertedAmount(data.rates[toCurrency]+" "+toCurrency)

         

    } catch (error) {
      console.log("error");
    }
  }
  const swap=()=>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <div className=" max-w-xl w-1/3 mx-auto bg-white p-5 rounded-lg shadow-md text-xl bg-opacity-30 ">
      <h1 className="mb-5  text-gray-900 font-bold  text-center text-2xl sm:text-lg md:text-base lg:text-2xl">
        Currency Convertor
      </h1>
      <div className="flex justify-evenly   sm:flex-col lg:flex-row">
        <CurrencyDropdown
          className="w-full"
          currencies={currencies}
          title="from"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        <button
          className=" m-2  font-bold  text-blue-800  rounded hover:bg-blue-500 hover:text-white transition w-20 h-10"
          onClick={swap}
        >
          swap
        </button>
        <CurrencyDropdown
          className="w-full"
          currencies={currencies}
          title="to"
          currency={toCurrency}
          setCurrency={setToCurrency}
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="Amount"
          className="block text-2xs font-medium text-gray-800"
        >
          Amount:
        </label>
        <input
          className=" w-full border-2 border-black rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
         hover:border-blue-500"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="flex justify-end mt-5">
        <button
          className=" border-2 font-bold  text-blue-900  rounded bg-white  hover:bg-blue-500 hover:text-white transition text-sm px-2 py-1 sm:text-base sm:px-4 sm:py-2 "
          onClick={convertCurrency}
        >
          Convert
        </button>
      </div>
      <div className="font-bold flex justify-center mt-4 text-gray-800 text-xl sm:text-lg md:text-base lg:text-2xl">
        Converted Amount : {convertedAmount}
      </div>
    </div>
  );
}

export default CurrencyConvertor
