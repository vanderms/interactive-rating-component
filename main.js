({
  ratingComponent: document.querySelector('.nv-rating-component'),
  form: document.querySelector('.form'),
  modal: document.querySelector('.nv-modal'),

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const rating = this.form.rating.value;
      const userRatingParagraph = this.modal.querySelector('.user-rating');
      userRatingParagraph.textContent = `You selected ${rating} out of 5`;
      this.ratingComponent.dataset.state = 'hidden';
      this.modal.dataset.state = 'display';
    });
  },
}.init());
