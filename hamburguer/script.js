function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });


  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();


function initAnimaScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.75;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0; 
        if(isSectionVisible) {
          section.classList.add('ativo');
        }

      })
    } 
    animaScroll()
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimaScroll();