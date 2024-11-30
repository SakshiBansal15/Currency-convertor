import React,{useEffect,useState} from 'react';
import './App.css';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {

 


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center bg-[url('https://img.freepik.com/premium-vector/global-currency-background_115579-405.jpg')] bg-cover bg-center ">
      <CurrencyConvertor></CurrencyConvertor>
    </div>
  );
}

export default App;

//   fca_live_o82Ad8Ojza96JPZL9xnNAf0Z9YmGBCeP0rbSIW4E   key
//   https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_o82Ad8Ojza96JPZL9xnNAf0Z9YmGBCeP0rbSIW4E    url