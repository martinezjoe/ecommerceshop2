// Mostrar Menu 

const toggle = document.querySelector('.nav__toggle');

const close = document.querySelector('.nav__menu-close');

const navMenu = document.querySelector('.nav__menu');

const navLinks = document.querySelectorAll('.nav__link');

toggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

close.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});


// --------------------------------------------------------------------

// Cambiar el color del link del nav correspondiente a la seccion que ve el usario 

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	});
};

window.addEventListener('scroll', scrollActive);

// ------------------------------------------------------

// Animacion Scroll Reveal

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.home__title, .offer__data');
sr.reveal('.button-home', {delay:800, origin: 'bottom'});
sr.reveal('.home__img', {delay:800, origin: 'bottom'});
sr.reveal('.collection__box', {delay:500, interval: 500});
sr.reveal('.featured__product, .new__box', {delay:100, interval: 100, origin: 'bottom'});





