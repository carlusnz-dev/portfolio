// when the button is pressed, add class .pressed, when it is released, remove class .pressed
document.querySelector('.btn').addEventListener('click', function() {
    this.classList.add('pressed');
    setTimeout(() => {
        this.classList.remove('pressed');
    }, 100);
});

// navbar scrolled
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});

// .nav-link active when current section is visible on the screen
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', navHighlighter);
function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

// click link open in new tab
const links = document.querySelectorAll('a[href^="http"]');
links.forEach(link => {
    link.setAttribute('target', '_blank');
});

document.querySelector('#about .img-fluid').addEventListener('click', function() {
    // confirm dialog box
    if (confirm('Veja mais fotos em meu Instagram! Deseja continuar?')) {
        window.open('https://www.instagram.com/carlusnz/', '_blank');
    }
});