import React, { useState, useEffect } from 'react';

const Quotes = () => {

  const [quote, setQuote] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');

  useEffect(() => {
    getQuoteData();
  }, [])

  const getQuoteData = () => {
    return fetch('https://www.officeapi.dev/api/quotes/random')
    .then(res => res.json())
    .then(data => {
      setQuote(data.data.content);
      setQuoteAuthor(`${data.data.character.firstname} ${data.data.character.lastname}`);
    })
  }

  const handleClick = () => {
    getQuoteData();
  }

  return (
    <div className='quote-box'>

      <div className='text'>
        <p>{quote}</p>
      </div>

      <div className='author'>
        <p>- {quoteAuthor}</p>
      </div>

      <div className='div-btn'>
        <button onClick={handleClick} className="new-quote-btn">New Quote</button>
      </div>
    </div>
  )
}

export default Quotes;