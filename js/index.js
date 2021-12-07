const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }
})

const navLinks = document.querySelectorAll('.nav-link');
// console.log(navLinks);
navLinks.forEach((link) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.forEach(navlink => {navlink.style.color = 'white'});
        link.style.color = '#64ffda';
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // console.log(element);
        const navHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        // console.log(position);

        window.scrollTo({
            left: 0,
            top: position,
        })
    })
})
