const div = document.querySelector('div');
const position = document.querySelector('#position');

//on récupère la position de la souris dans la div uniquement
div.addEventListener('mousemove', () => {
    console.log(`X: ${event.offsetX}, Y: ${event.offsetY}`);
    position.textContent = `X: ${event.offsetX}, Y: ${event.offsetY}`;
});