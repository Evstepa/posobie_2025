(() => {
  const $btn = document.getElementById('btn');

  window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', event => {
      if (event.currentTarget.scrollY > 100) {
        $btn.classList.remove('d-none');
      } else {
        $btn.classList.add('d-none');
      }
    }, {passive: true});

    $btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  })

})()
