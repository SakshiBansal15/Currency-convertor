import React, { useState, useEffect } from "react";

const FetchDataExample = () => {
  const [data, setData] = useState(null); // Store fetched data
  const [error, setError] = useState(null); // Handle errors

  useEffect(() => {
    // Fetch data from API
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_o82Ad8Ojza96JPZL9xnNAf0Z9YmGBCeP0rbSIW4E"
    ) // Replace with the actual API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response
      })
      .then((response) => {
        setData(response); // Store data in state
      })
      .catch((error) => {
        setError(error.message); // Handle errors
      });
  }, []); 

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h3>Currency Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre> 
    </div>
  );
};

export default FetchDataExample;
