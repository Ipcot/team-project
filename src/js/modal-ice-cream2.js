(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal--ice-cream2-open]'),
    closeModalBtn: document.querySelector('[modal--ice-cream2-close]'),
    modal: document.querySelector('[modal--ice-cream2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
