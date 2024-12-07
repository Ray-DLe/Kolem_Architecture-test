// Массив с путями к фоновым изображениям
const bgImages = [
    'assets/images/background1.jpg',
    'assets/images/background2.jpg',
    'assets/images/background3.jpg',
    'assets/images/background4.jpg',
    'assets/images/background5.jpg',
    'assets/images/background6.jpg',
    'assets/images/background7.jpg',
    'assets/images/background8.jpg',
    'assets/images/background9.jpg',
    'assets/images/background10.jpg',
    'assets/images/background11.jpg'
];

let currentIndex = 0; // Индекс текущего изображения
const heroSection = document.querySelector('.hero');

// Предзагрузка изображений
const preloadImages = () => {
    bgImages.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
};

preloadImages();

// Функция плавной смены фона
function switchBackground() {
    currentIndex = (currentIndex + 1) % bgImages.length; // Переключение индекса
    heroSection.style.transition = "background-image 1s ease-in-out";
    heroSection.style.backgroundImage = `url('${bgImages[currentIndex]}')`;
}

// Автоматическая смена фона каждые 5 секунд
setInterval(switchBackground, 5000);
