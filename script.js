const div = document.querySelector('body');
const header = document.querySelector('header');
const nivScroll = document.getElementById('nivScroll');

//on change la couleur de fond du header au scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.style.backgroundColor = 'rgba(172, 15, 15, 0.8)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0)';
    }
});

//on affiche en % en texte le niveau de scroll en pourcentage a nivScroll
window.addEventListener('scroll', () => {
    nivScroll.textContent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) + '%';
});