// Получаем user-id из URL
const params = new URLSearchParams(window.location.search);
const userId = params.get('user');

// Ссылка на JSON с GitHub (замени на свой репозиторий)
const dataUrl = 'https://raw.githubusercontent.com/username/repo/main/data.json';

fetch(dataUrl)
  .then(res => res.json())
  .then(data => {
      const userData = data[userId];
      if(userData) {
          document.getElementById('name').innerText = userData.name;
          document.getElementById('text').innerText = userData.text;

          document.getElementById('spotify-btn').onclick = () => {
              window.open(userData.spotify, '_blank');
              setTimeout(() => {
                  window.open(userData.site, '_blank');
              }, 15000);
          };

          document.getElementById('site-btn').onclick = () => {
              window.open(userData.site, '_blank');
          };
      } else {
          document.getElementById('name').innerText = 'Пользователь не найден';
          document.getElementById('text').innerText = '';
          document.querySelector('.buttons').style.display = 'none';
      }
  })
  .catch(err => {
      document.getElementById('name').innerText = 'Ошибка загрузки данных';
      console.error(err);
  });
