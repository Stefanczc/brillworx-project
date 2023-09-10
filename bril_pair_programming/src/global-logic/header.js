const headerLogo = document.getElementById('header-logo'); // Logo image

// scroll down function with ease transition

function scrollDown() {
    
    if (window.scrollY > 0) {
        headerLogo.style.transition = 'height 300ms ease 0s';
        headerLogo.style.height = '24px';
    } else {
        headerLogo.style.transition = 'height 300ms ease 0s';
        headerLogo.style.height = '60px';
    }
}

// event listener for window

window.addEventListener('scroll', scrollDown);

const navLinks = document.querySelectorAll('.jdnavbar a');
const activePage = window.location.pathname;

navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})