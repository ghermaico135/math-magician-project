import React, { useState, useEffect } from 'react';
import './Quote.css';
import Navbar from './Navbar';

function Quote() {
  const [result, setResult] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, hasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      isLoading(true);

      const fetchResponse = await fetch('https://api.api-ninjas.com/v1/quotes?category=business', {
        method: 'GET',

        headers: { 'X-Api-Key': 'YwLUjg+exEy5ooLnLuX8vg==zjF4otWZ46utsveI' },
      });
      const response = await fetchResponse.json();

      setResult(response[0]);

      isLoading(false);
    };
    fetchQuote();
  }, [isLoading]);

  if (loading) {
    return <div>loading...</div>;
  } if (error) {
    hasError(true);
    return <div>Error...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <ul className="category-container">
          <li className="category-item">
            {' '}
            Quote :
            {result.quote}
          </li>
          <li className="category-item">
            Author :
            {result.author}
          </li>
          <li className="category-item">
            Category:
            {result.category}
          </li>
        </ul>
      </div>

    </>

  );
}

export default Quote;
