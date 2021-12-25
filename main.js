// Déclaration des variables

const picker1 = document.getElementById("picker-1");
const picker2 = document.getElementById("picker-2");

const form = document.getElementById("form");
const gradient = document.getElementById("gradient");
const btn = document.getElementById("btn");

// Écouteurs d'événements sur les deux inputs avec la fonction Generate

picker1.addEventListener("input", generate);
picker2.addEventListener("input", generate);

// La fonction generate recupere les valeurs des inputs color #283H19;

function generate(){

    const color1 = picker1.value;
    const color2 = picker2.value;
   form.style.background = `linear-gradient(${color1}, ${color2})`;
    gradient.textContent = `background : linear-gradient(${color1}, ${color2});`;
};