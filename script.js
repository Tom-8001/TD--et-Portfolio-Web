const div = document.getElementById("div");

const couleur = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];

//on change la couleur de fond du div au clic avec une fonction fléchée
div.addEventListener("click", () => {
    div.style.backgroundColor = couleur[Math.floor(Math.random() * couleur.length)];
});