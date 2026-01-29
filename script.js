const form = document.getElementById('myForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const inputValue = document.getElementById('textInput').value;
    if (inputValue.trim() === '') {
        output.innerHTML = '<p style="color: red;">Erreur : le champ ne peut pas être vide.</p>';
    } else {
        output.innerHTML = '<p>Vous avez saisi : ' + inputValue + '</p>';
    }
    form.reset(); // Réinitialise le formulaire
});