import { useEffect, useState } from "react"
import { AiFillTwitterSquare } from "react-icons/ai";
function App() {

  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() => {
    getQuote();     //Get Initial Quote
  }, [])

  const getQuote = () => {
    fetch("https://api.quotable.io/random") //I used an api to get the quotes
    .then((response) => {return response.json()})
    .then((data) => {
      setQuoteInfo({ // Assign text and author values
        text: data.content,
        author: data.author,
      });
    });
  }
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>

        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text + " " + quoteInfo.author } id="tweet-quote" target="_blank" title="Tweet Quote"><AiFillTwitterSquare className="twitter-icon"/></a>

      </div>
    </div>
  );
}

export default App;
