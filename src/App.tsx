import React, { useState } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 
import quotes from '../src/app/quotes.json'


function App() {
  interface RandomQuote {
    quote: string;
    author: string;
  }

  const getQuote = (): RandomQuote => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  const [quote, setQuote] = useState(getQuote())
  return (
    <div id="wrapper">
      <div id="quote-box">
        <FaQuoteLeft size={30} />
        <div className="quote-text" id="text"><h4>{quote.quote}</h4></div>
        <FaQuoteRight size={30} />
        <div className="quote-author" id="author">~ {quote.author}</div>
        <div className="buttons">
          <span>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&{quote.quote}" className="btn btn-primary">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a href="https://tumblr.com" className="btn btn-primary">
              <FontAwesomeIcon icon={faTumblr} size="1x" />
            </a>
          </span>
          <span>
            <Button id="new-quote" variant="primary" onClick={getQuote}>
              New Quote
            </Button>
          </span>
        </div>
      </div>
      <div className="footer"></div>

    </div>
  );
}

export default App;
