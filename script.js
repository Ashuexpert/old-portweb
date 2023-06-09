// header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})



// typing effect

let typed = new Typed('.auto-input', {
    strings: ['"Front-End Developer"', '"Freelancer"', '"Youtuber"', '"Editor"'],
    typeSpeed: 50,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,

})


// Active link state on scroll 

// get all links
let navLinks = document.querySelector('nav ul li a')

// grt all sections

let sections = document.querySelectorAll('section')


window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 20
    
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});