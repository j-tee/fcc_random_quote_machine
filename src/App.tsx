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


interface RandomQuote {
  quote: string;
  author: string;
}
function App() {
  const getQuote = (): RandomQuote => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }
  const getColor = () => {
    const color1 = Math.floor(Math.random() * 128);
    const color2 = Math.floor(Math.random() * 128);
    const color3  = Math.floor(Math.random() * 128);

    return  `rgb(${color1}, ${color2}, ${color3})`;
  }
  const [quote, setQuote] = useState(getQuote())
  const [color, setColor] = useState<string>(getColor())
  
  const changeQuote = () => {
    setQuote(getQuote())
    setColor(getColor())
  }
    
  return (
    <div className="background" style={{backgroundColor:color}}>
      <div id="wrapper">
      <div id="quote-box">
        <FaQuoteLeft size={30} />
        <div className="quote-text" id="text"><h4>{quote.quote}</h4></div>
        <FaQuoteRight size={30} />
        <div className="quote-author" id="author">~ {quote.author}</div>
        <div className="buttons">
          <span>
            <a style={{backgroundColor:color}} id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&{quote.quote}" className="btn btn-primary">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a style={{backgroundColor:color}} href="https://tumblr.com" className="btn btn-primary">
              <FontAwesomeIcon icon={faTumblr} size="1x" />
            </a>
          </span>
          <span>
            <Button style={{backgroundColor:color}} id="new-quote" variant="primary" onClick={changeQuote}>
              New Quote
            </Button>
          </span>
        </div>
      </div>
      <div className="footer"></div>

    </div>
    </div>
  );
}

export default App;
