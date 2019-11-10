function initSectionToScroll(){

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function sectionToScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }


  linksInternos.forEach((link) => {
    link.addEventListener('click', sectionToScroll);
  });
}

function initAnimaScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.80;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) 
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
        
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimaScroll();