// let num1;
// do {
//     num1 = parseInt(prompt("ingresa cuanto dinero queres calcular"));
// } while(isNaN(num1))

// let operacion = prompt(`
//     seleccione la moneda:
//     1- Dolar 
//     2- Euro 
//     3- real `);

// function calcular(plata, cambioDeMoneda){
//     switch (cambioDeMoneda){
//         case "1":
//             return plata * 1455;
//         case "2":
//             return plata * 1800;
//         case "3":
//             return plata * 168; 
//         default:
//             return "operación inválida."   
//     }
// }

// let resultado = calcular(num1, operacion)
// alert("El resultado es: " + resultado) 

const palabraClave = "ingresar";

const respuesta = prompt("Bienvenido! Ingresa la palabra '" + palabraClave + "' para continuar.");

if (respuesta.toLowerCase() === palabraClave) {
    console.log("Bienvenido!");
} else {
    alert("Lo siento, la palabra ingresada es incorrecta. Por favor, inténtalo de nuevo.");

}

const colorModeButton = document.querySelector("#color-mode");
const body = document.body;

colorModeButton.addEventListener("click", cambiaModoDeColor)

function cambiaModoDeColor() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Cambiar a ligth mode"
    } else {
        colorModeButton.innerText = "Cambiar a dark mode"
    }
}

const lista = document.querySelector("#agregar")
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregarSubmit = document.querySelector("#agregar-submit");

agregarForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const dolar = document.createElement("li");
    dolar.innerText = parseFloat(agregarInput.value) * 1370;
    lista.append(dolar)

    agregarForm.reset();
    agregarInput.focus();
})

const listaeEuro = document.querySelector("#agregar-euro")
const agregarFormEuro = document.querySelector("#form-euro");
const agregarInputEuro = document.querySelector("#input-euro")
const agregarSubmitEuro = document.querySelector("#submit-euro");

agregarFormEuro.addEventListener("submit", (e) => {
    e.preventDefault();

    const euro = document.createElement("li");
    euro.innerText = parseFloat(agregarInputEuro.value) * 1800;
    lista.append(euro)

    agregarFormEuro.reset();
    agregarInputEuro.focus();
})

const listaReal = document.querySelector("#agregar-real")
const agregarFormReal = document.querySelector("#form-real");
const agregarInputReal = document.querySelector("#input-real");
const agregarSubmitReal = document.querySelector("#submit-real");

agregarFormReal.addEventListener("submit", (e) => {
    e.preventDefault();

    const real = document.createElement("li");
    real.innerText = parseFloat(agregarInputReal.value) * 168;
    lista.append(real)

    agregarFormReal.reset();
    agregarInputReal.focus();
})