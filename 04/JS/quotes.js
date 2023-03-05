const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

  const quote = document.querySelector("#quotes p:first-child");
  const author = document.querySelector("#quotes p:last-child");

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
 // 리스트의 요소 dict 하나를 정의
  quote.innerText = randomQuote.quote; // 그 자료형에서 해당하는 key의 value 반환
  author.innerText = randomQuote.author;

 /* 랜덤한 함수를 만들어내는 Math.random()로 랜덤 float 생성.
 여기서 * 10과 Math.floor,ceil,round 등으로 정수형 변환*/