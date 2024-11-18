const showMoreBtn = document.querySelector('.catalog-btn');
const hiddenItems = document.querySelectorAll('.catalog-mobile');

// Функція для показу елементів
showMoreBtn.addEventListener('click', () => {
  hiddenItems.forEach(item => {
    item.style.display = 'block'; // Показуємо елемент
    item.classList.remove('catalog-mobile'); // Видаляємо клас 'hidden' для анімації

    // Плавна анімація по появі
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 10); // невелика затримка для початку анімації
  });

  // Приховуємо кнопку після натискання
  showMoreBtn.style.display = 'none';
});