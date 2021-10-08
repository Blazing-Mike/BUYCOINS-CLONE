function classToggle() {
    const navs = document.querySelectorAll('.Navbar__items');

    navs.forEach(nav => nav.classList.toggle('Navbar__toggleShow'));
}

document.querySelector('.hamburger')
    .addEventListener('click', classToggle);