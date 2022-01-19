(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal--ice-cream1-open]'),
    closeModalBtn: document.querySelector('[modal--ice-cream1-close]'),
    modal: document.querySelector('[modal--ice-cream1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
