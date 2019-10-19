const menu = document.querySelector('.menu-main'),
    menuButton = document.querySelector('.button-menu');

menuButton.addEventListener('click', e => {
    e.preventDefault();

    menuButton.classList.toggle('open');
    menu.classList.toggle('open');
})