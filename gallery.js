document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalDescription = document.getElementById('modalDescription');
    const close = document.getElementsByClassName('close')[0];
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    let currentIndex = 0;
    const projects = document.querySelectorAll('.project-card');
    
    // Открытие модального окна при клике на изображение
    projects.forEach((project, index) => {
        project.querySelector('img').addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalDescription.textContent = project.querySelector('h3').textContent;
            currentIndex = index;
        });
    });
    
    // Закрытие модального окна
    close.onclick = function() {
        modal.style.display = "none";
    }
    
    // Перелистывание изображений
    next.onclick = function() {
        currentIndex = (currentIndex + 1) % projects.length;
        updateModal();
    }
    
    prev.onclick = function() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateModal();
    }
    
    function updateModal() {
        const project = projects[currentIndex];
        modalImg.src = project.querySelector('img').src;
        modalDescription.textContent = project.querySelector('h3').textContent;
    }
    
    // Закрытие по клику вне изображения
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    
    // Управление клавишами
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === "block") {
            if (e.key === "ArrowLeft") prev.click();
            if (e.key === "ArrowRight") next.click();
            if (e.key === "Escape") modal.style.display = "none";
        }
    });
});
