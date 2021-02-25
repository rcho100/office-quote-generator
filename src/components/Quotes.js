import React, { useEffect } from 'react';

const Quotes = () => {

  useEffect(() => {
    getQuoteData();
  }, [])

  const getQuoteData = () => {
    return fetch('https://www.officeapi.dev/api/quotes/random')
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const handleClick = () => {
    getQuoteData();
  }

  return (
    <div className='quote-box'>

      <div className='text'>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>

      <div className='author'>
        <p>- John Doe</p>
      </div>

      <div className='div-btn'>
        <button onClick={handleClick} className="new-quote-btn">New Quote</button>
      </div>
    </div>
  )
}

export default Quotes;