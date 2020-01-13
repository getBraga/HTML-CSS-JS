function initMenuBurguer(){
    this.ativaBurguer = document.querySelector('.js-burguer')
  this.menuBurguer = document.querySelectorAll('.menu-hamburguer');
  function clickToBurguer(event) {
    event.preventDefault();
      ativaBurguer.classList.toggle('ativo');
  }
  menuBurguer.forEach((link)=> {
    link.addEventListener('click', clickToBurguer);
  })
}
initMenuBurguer();

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  function scrollToSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
   
    section.scrollIntoView({
      behavior:'smooth',
      block:'start',
    });
    ativaBurguer.classList.toggle('ativo');
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSuave);
   
  })
}

initScrollSuave()

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
        
        }else {
          section.classList.remove('ativo');
        }
      
      })
      ativaBurguer.classList.remove('ativo');
    } 
    animaScroll()
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimaScroll();