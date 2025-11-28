(() => {
  const $links = document.querySelectorAll('.book__link');

  $links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target;
      const targetElement = document.getElementById(target);
      targetElement.classList.toggle('visually-hidden');
      e.currentTarget.firstElementChild.classList.toggle('book__figure-click');
      if (targetElement.classList.contains('visually-hidden')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    })
  })
})()
