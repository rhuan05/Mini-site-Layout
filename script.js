const menuHamb = document.querySelector('.menuHamb');

menuHamb.addEventListener('click', () => {
    const header = document.querySelector('header');
    header.classList.toggle('active');
});