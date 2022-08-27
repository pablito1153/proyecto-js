let divisa = prompt("¿Qué moneda desea cambiar? (EURO, DOLAR, LIBRA, REAL)");

let mensajeGracias = "GRACIAS POR SU COMPRA";

/* while (divisa!== "dolar" || "euro" || "libra" || "real"){
    alert("MONEDA NO ENCONTRADA");
    divisa = prompt("¿Qué moneda desea cambiar? (EURO, DOLAR, LIBRA, REAL)");
} */

if (divisa == "dolar"){
    alert("USTED VA A COMPRAR DOLARES");
    let cantidad = prompt("INGRESAR LA CANTIDAD A CAMBIAR");
    if (cantidad < 100) {
        alert("PRECIO FINAL $" + (cantidad * 310));
    }else if (cantidad > 101 && cantidad < 500) {
        alert("PRECIO FINAL $" + (cantidad * 290));
    }else if (cantidad > 501) {
        alert("PRECIO FINAL $" + (cantidad * 275));
    }
    alert(mensajeGracias);
}

if (divisa == "euro"){
    alert("USTED VA A COMPRAR EUROS");
    let cantidad = prompt("INGRESAR LA CANTIDAD A CAMBIAR");
    if (cantidad < 100) {
        alert("PRECIO FINAL $" + (cantidad * 330));
    }else if (cantidad > 101 && cantidad < 500) {
        alert("PRECIO FINAL $" + (cantidad * 315));
    }else if (cantidad > 501) {
        alert("PRECIO FINAL $" + (cantidad * 290));
    }
    alert(mensajeGracias);
}

if (divisa == "libra"){
    alert("USTED VA A COMPRAR LIBRAS ESTERLINAS");
    let cantidad = prompt("INGRESAR LA CANTIDAD A CAMBIAR");
    if (cantidad < 100) {
        alert("PRECIO FINAL $" + (cantidad * 360));
    }else if (cantidad > 101 && cantidad < 500) {
        alert("PRECIO FINAL $" + (cantidad * 345));
    }else if (cantidad > 501) {
        alert("PRECIO FINAL $" + (cantidad * 330));
    }
    alert(mensajeGracias);
}

if (divisa == "real"){
    alert("USTED VA A COMPRAR REALES");
    let cantidad = prompt("INGRESAR LA CANTIDAD A CAMBIAR");
    if (cantidad < 100) {
        alert("PRECIO FINAL $" + (cantidad * 60));
    }else if (cantidad > 101 && cantidad < 500) {
        alert("PRECIO FINAL $" + (cantidad * 58));
    }else if (cantidad > 501) {
        alert("PRECIO FINAL $" + (cantidad * 55));
    }
    alert(mensajeGracias);
}

let formaDePago = prompt("¿Cómo desea pagar? (CREDITO, DEBITO, TRANSFERENCIA)")

if (formaDePago.toLowerCase = "credito"){
    alert("Usted tendrá un 10% de recargo.")
    }else if(formaDePago.toLowerCase = "debito"){
        alert("Usted tendrá un 5% de recargo.")
    }else if(formaDePago.toLowerCase = "transferencia"){
        alert("Usted no tendrá recargo.")
    }
