let num1;
do {
    num1 = parseInt(prompt("ingresa cuantos dinero queres calcular"));
} while(isNaN(num1))

let operacion = prompt(`
    seleccione la moneda:
    1- Dolar 
    2- Euro 
    3- real `);

function calcular(plata, cambioDeMoneda){
    switch (cambioDeMoneda){
        case "1":
            return plata * 1455;
        case "2":
            return plata * 1007;
        case "3":
            return plata * 168; 
        default:
            return "operación inválida."   
    }
}

let resultado = calcular(num1, operacion)
alert("El resultado es: " + resultado) 