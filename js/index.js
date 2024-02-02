window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("subirArriba").style.display = "block";
    } else {
        document.getElementById("subirArriba").style.display = "none";
    }
}

// Función para animar el scroll hacia arriba
function subirArriba() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
}