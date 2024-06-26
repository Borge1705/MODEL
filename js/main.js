const openModal = document.querySelectorAll('.hero__cta'); // Obtener todos los elementos con clase "hero__cta"
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento de enlace predeterminado
    modal.classList.add('modal--show'); // Agregar clase para mostrar el modal
  });
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show'); // Eliminar la clase para ocultar el modal
});

const openModaln = document.querySelectorAll('.hero_ctac');
const modaln = document.querySelector('.modal_c');
const closeModaln = document.querySelector('.modal_close');

openModaln.forEach(button => {

  button.addEventListener('click', (e) => {
    e.preventDefault();
    modaln.classList.add('modal--show');
  })
})

closeModaln.addEventListener('click', (e) => {
  e.preventDefault();
  modaln.classList.remove('modal--show');
})
