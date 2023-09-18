const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0"
            }
            else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }
            catch {
                pantalla.textContent = "Error"
            }

            return; 
        }
        
        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonApretado;
        }
        else {
            pantalla.textContent += botonApretado;
        }
    })
});

function sin() {
    pantalla.textContent = Math.sin(pantalla.textContent);
}
function cos() {
    pantalla.textContent = Math.cos(pantalla.textContent);
}
function tan() {
    pantalla.textContent = Math.tan(pantalla.textContent);
}
function pi() {
    pantalla.textContent = 3.14159265359;
}