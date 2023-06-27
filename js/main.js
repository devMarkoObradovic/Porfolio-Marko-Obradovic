/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.header-text',{}); 
sr.reveal('.btn3',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about-col-1',{}); 
sr.reveal('.about-col-2',{}); 

/*SCROLL MY WORK*/
sr.reveal('.sub-title',{}); 
sr.reveal('.work-list',{}); 

/*SCROLL CONTACT*/
sr.reveal('.sub-title',{interval: 200}); 
sr.reveal('.contact-left',{interval: 400}); 
sr.reveal('.contact-right',{interval: 400}); 

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)