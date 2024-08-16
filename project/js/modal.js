const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

// Функция для открытия модального окна
const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

const checkScrollEnd = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
        openModal();
        window.removeEventListener('scroll', checkScrollEnd);
    } 
};

window.addEventListener('scroll', checkScrollEnd);

modalCloseButton.onclick = closeModal;

window.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

modalTrigger.onclick = openModal;
