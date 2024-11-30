import React from 'react'

const CurrencyDropdown = ({
    currencies,
    title,
    currency,
    setCurrency,
    
}) => {
  return (
    <div>
      <label
        className="block text-2xs font-medium text-gray-500"
        htmlFor={title}
      >
        {title}{" "}
      </label>
      <div
        className=" w-full border-2 border-black rounded-md p-2 shadow-sm focus:border-blue-800 focus:ring-2 focus:ring-blue-500 
         hover:border-blue-500"
      >
        <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
          {currencies?.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CurrencyDropdown
