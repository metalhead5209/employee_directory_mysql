
// ***** OPEN / CLOSE NEW BOOK MODAL *****
const modal = document.querySelector('.modal-container')
const addEmp = document.querySelector('#add-emp');
const closeModal = document.querySelector('#close-modal-btn');


addEmp.addEventListener('click', () => {
    modal.style.display = 'block';
})

