const divisas = [
    {id: 1, nombre: "dolar", precio: 280},
    {id: 2, nombre: "euro", precio: 300},
    {id: 3, nombre: "real", precio: 60},
    {id: 4, nombre: "libra", precio: 320}
]

for(const item of divisas){
    let monedaACambiar = prompt("que moneda desea cambiar?");
    if(monedaACambiar=== item.nombre){
        let cantidad = parseInt(prompt("cuanto desea cambiar?"));
        let precioFinal = cantidad * item.precio;
        alert(precioFinal)
    }else if(cantidad >= 100){
        let precioFinal = (cantidad * 0.95) * item.precio ;
        alert(precioFinal)
    }else if (cantidad >= 500){
        let precioFinal = (cantidad * 0.90) * item.precio;
        alert(precioFinal)
    }
    break;
}

/* const mediosDePago = [
    {id: 1, nombre: "transferencia", recargo: 0},
    {id: 2, nombre: "efectivo", recargo: 0},
    {id: 3, nombre: "tarjeta", recargo: 500}
]

for (const item of mediosDePago){
    let medioDePago = prompt("Como desea pagar? (TRANSFERENCIA, EFECTIVO, TARJETA)")
    if (medioDePago === item.nombre) {
        alert(`"Usted tendra un recargo de" ${item.recargo}`)
    }
    break;
} */

/* let divisa = prompt("¿Qué moneda desea cambiar? (EURO, DOLAR, LIBRA, REAL)");

while (divisa!== "dolar" || "euro" || "libra" || "real"){
    alert("MONEDA NO ENCONTRADA");
    divisa = prompt("¿Qué moneda desea cambiar? (EURO, DOLAR, LIBRA, REAL)");
}

if (divisa == "dolar"){
    alert("USTED VA A COMPRAR DOLARES");
    let cantidad = prompt("INGRESAR LA CANTIDAD A CAMBIAR");
    if (cantidad <= 100) {
        alert("PRECIO FINAL $" + (cantidad * 310));
    }else if (cantidad > 101 && cantidad < 500) {
        alert("PRECIO FINAL $" + (cantidad * 290));
    }else if (cantidad > 501) {
        alert("PRECIO FINAL $" + (cantidad * 275));
    }
}
    

if (divisa == "euro"){
    alert("USTED VA A COMPRAR EUROS");
    let cantidad = prompt("INGRESAR LA CANTIDAD A CAMBIAR");
    if (cantidad <= 100) {
        alert("PRECIO FINAL $" + (cantidad * 330));
    }else if (cantidad > 101 && cantidad < 500) {
        alert("PRECIO FINAL $" + (cantidad * 315));
    }else if (cantidad > 501) {
        alert("PRECIO FINAL $" + (cantidad * 290));
    }
}

if (divisa == "libra"){
    alert("USTED VA A COMPRAR LIBRAS ESTERLINAS");
    let cantidad = prompt("INGRESAR LA CANTIDAD A CAMBIAR");
    if (cantidad <= 100) {
        alert("PRECIO FINAL $" + (cantidad * 360));
    }else if (cantidad > 101 && cantidad < 500) {
        alert("PRECIO FINAL $" + (cantidad * 345));
    }else if (cantidad > 501) {
        alert("PRECIO FINAL $" + (cantidad * 330));
    }
}

if (divisa == "real"){
    alert("USTED VA A COMPRAR REALES");
    let cantidad = prompt("INGRESAR LA CANTIDAD A CAMBIAR");
    if (cantidad <= 100) {
        alert("PRECIO FINAL $" + (cantidad * 60));
    }else if (cantidad > 101 && cantidad < 500) {
        alert("PRECIO FINAL $" + (cantidad * 58));
    }else if (cantidad > 501) {
        alert("PRECIO FINAL $" + (cantidad * 55));
    }
}

let formaDePago = prompt("¿Cómo desea pagar? (CREDITO, DEBITO, TRANSFERENCIA)");
let mensajeGracias = "GRACIAS POR SU COMPRA";

if (formaDePago.toLowerCase = "credito"){
    alert("Usted tendrá un 10% de recargo.");
}else if(formaDePago.toLowerCase = "debito"){
    alert("Usted tendrá un 5% de recargo.");
}else if(formaDePago.toLowerCase = "transferencia"){
    alert("Usted no tendrá recargo.");
}
alert(mensajeGracias); */
