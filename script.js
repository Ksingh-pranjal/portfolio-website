//======================
//1. Hamburger Menu Toggle
//======================

const navbar = document.querySelector('.nav-links');
const menuIcon = document.createElement('div');
menuIcon.id = 'menu';
menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header').appendChild(menuIcon);

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('nav-toggle');
});

//close menu on link click(mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('nav-toggle');
    });
});

//======================
//2. Smooth Scrolling
//======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// 3. Section Fade-in Animation on Scroll
// =====================
const faders = document.querySelectorAll('section, .project-card, .edu-item, .skill-item');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    fader.classList.add('opacity-0'); // initially hidden
    appearOnScroll.observe(fader);
});

// =====================
// 4. Navbar Active Link Highlight
// =====================
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.getAttribute('href') === `#${current}`) {
            li.classList.add('active');
        }
    });
});

// =====================
// 5. Back-to-Top Button
// =====================
const backToTop = document.createElement('button');
backToTop.id = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// =====================
// 7. Contact Form Validation (basic)
// =====================
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Optional: Integrate EmailJS or backend API here
    alert('Thank you for reaching out! Will Contact soon.');
    this.reset();
});