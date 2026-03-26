
const sobre = document.getElementById("sobre");
const musica = document.getElementById("musica");


function abrirSobre(){
    sobre.classList.add("abierto");

    musica.play().catch(() => {
        console.log("El navegador bloqueó el audio");
    });
}


function irFormulario(){
    window.location.href = "https://forms.gle/dzWmzsUbm5cbgKpx7";
}


const fechaEvento = new Date("April 4, 2026 14:00:00").getTime();

setInterval(() => {
    const ahora = new Date().getTime();
    const diff = fechaEvento - ahora;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("contador").innerHTML =
         + dias + "d " + horas + "h " + minutos + "m";
}, 1000);
