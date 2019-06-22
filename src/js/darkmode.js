let darkThemeToggle = document.getElementById('darkThemeToggle');

darkThemeToggle.addEventListener('change', () => {
  let darkthemeEnabled = document.body.classList.toggle('dark-theme');
  localStorage.setItem('dark-theme-enadled', darkthemeEnabled);
});

if (JSON.parse(localStorage.getItem('dark-theme-enadled'))) {
  document.body.classList.add('dark-theme');
  darkThemeToggle.setAttribute('checked', 'checked');
}
