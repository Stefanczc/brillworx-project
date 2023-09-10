const openModalLink = document.getElementById('openModalLink');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const submitBtn = document.getElementById('submitBtn');
const thankMsg = document.getElementById('thankMsg');
const modalForm = document.getElementById('modalForm');
const openModalBtnMainPage = document.getElementById('contactus-main');
const theModalBtn = document.getElementById('the-project-btn');

openModalLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

openModalBtnMainPage.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

theModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modalForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (modalForm.checkValidity()) {
        modalForm.style.display = 'none';
        thankMsg.style.display = 'grid';
        thankMsg.style.placeItems = 'center';
    }
});
