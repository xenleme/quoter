const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.className += ' hidden';
});

newQuoteButton.addEventListener('click', () => {
  loader.classList.remove('hidden');
});
