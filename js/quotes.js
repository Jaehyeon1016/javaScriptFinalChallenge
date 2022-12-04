const quotes = [
  {
    quote: "hi",
    author: "Zach",
  },{
    quote: "yeah",
    author: "Claude",
  },{
    quote: "damn",
    author: "Peter",
  },{
    quote: "Ready",
    author: "Eric",
  },{
    quote: "wow",
    author: "Soo",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
