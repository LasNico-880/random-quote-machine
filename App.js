const quotes = [
  {
    text: "La vida es lo que pasa mientras haces otros planes.",
    author: "John Lennon"
  },
  {
    text: "No cuentes los días, haz que los días cuenten.",
    author: "Muhammad Ali"
  },
  {
    text: "Sé tú el cambio que quieres ver en el mundo.",
    author: "Mahatma Gandhi"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function setQuote() {
  const quote = getRandomQuote();
  document.getElementById("text").textContent = quote.text;
  document.getElementById("author").textContent = quote.author;
  document.getElementById("tweet-quote").href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(`"${quote.text}" - ${quote.author}`);
}

document.getElementById("new-quote").addEventListener("click", setQuote);

// Mostrar frase al cargar
setQuote();
