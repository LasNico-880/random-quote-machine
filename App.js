import React, { useState, useEffect } from "react";
import "./App.css";

const quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  }
];

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Función para obtener una cita aleatoria
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  // Obtener la cita inicial cuando el componente se monta
  useEffect(() => {
    const { quote, author } = getRandomQuote();
    setQuote(quote);
    setAuthor(author);
  }, []);

  // Cambiar cita al hacer clic en "New Quote"
  const handleNewQuote = () => {
    const { quote, author } = getRandomQuote();
    setQuote(quote);
    setAuthor(author);
  };

  return (
    <div id="quote-box">
      <p id="text">"{quote}"</p>
      <p id="author">- {author}</p>
      <div className="buttons">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
        <button id="new-quote" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
