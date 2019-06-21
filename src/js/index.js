const endpoint = 'https://api.quotable.io/random';

function getQuote() {
  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayQuote(data);
    })
    .catch(function() {
      console.log('An error occurred');
    });
}

function displayQuote(quote) {
  const { content, author } = quote;

  const quoteText = document.querySelector('.quote-text');
  quoteText.textContent = content;

  const quoteAuthor = document.querySelector('.quote-author');
  quoteAuthor.textContent = `- ${author}`;

  const tweetButton = document.querySelector('.tweet');
  tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();
