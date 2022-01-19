(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal--ice-cream3-open]'),
    closeModalBtn: document.querySelector('[modal--ice-cream3-close]'),
    modal: document.querySelector('[modal--ice-cream3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
