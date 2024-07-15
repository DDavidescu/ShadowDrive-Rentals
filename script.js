// NAV BAR
const toggleMenuOpen = () => document.body.classList.toggle('open')

/*=============== CHANGE BACKGROUND NAVBAR ===============*/
function scrollNavbar(){
    const navbar = document.getElementById('navbar')
    if(this.scrollY >= 50) navbar.classList.add('scroll-navbar'); else navbar.classList.remove('scroll-navbar')
}
window.addEventListener('scroll', scrollNavbar)


/*=============== EMBARK BUTTON ===============*/
const embark = document.getElementById('homeButton')
const about = document.getElementById('about')
embark.addEventListener('click', () => {
    about.scrollIntoView({behavior: "smooth"});
});


/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular-container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
    },
});

/*=============== MIXITUP FEATURED ===============*/
let mixerFeatured = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured-item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}

linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-title, .popular-container, .location-img, .location-info, .featured-filters`)
sr.reveal(`.home-subtitle`, {delay: 500})
sr.reveal(`.home-img`, {delay: 800})
sr.reveal(`.home-all-benefits, .featured-content`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.home-button`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.about-content-info, .offer-text-content`, {origin: 'left'})
sr.reveal(`.about-img ,.offer-img, .offer-img-big-rez`, {origin: 'right'})
sr.reveal(`.logos-content, .footer-content, .footer-text-content`, {interval: 100})
