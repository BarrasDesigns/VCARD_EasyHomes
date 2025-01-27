const vistaId = "miVista"; // El ID del elemento
const vista = document.getElementById(vistaId);

const cambiarColorTarjeta = () => {
    if (vista) {
        vista.style.background = "yellow";
    } else {
        console.error(`No se encontró un elemento con el ID "${vistaId}"`);
    }
};

// Llamar a la función
cambiarColorTarjeta();
