
let nombre
let precioSafari = 320000;
let precioAncestral = 420000;
let precioMenu = 45000;
let costoFinal
let reservas = {
    "Safari": {
       "fecha_check_in": {}
    },
    "Ancestral": {
        "fecha_check_in": {}
    }
}

function reservar (nombre, fecha_check_in, cabana) {
    nombre = prompt("Ingrese nombre de quien reserva");
    cabana = prompt("Seleccione cabaña: Ancestral (420.000 COP) o Safari (320.000 COP");
    menu = prompt("Deseas incluir el menú por 45.000 COP? Responde 'Sí' o 'No'")
    fecha_check_in = prompt("Ingrese fecha de llegada con formato DD/MM/AAAA");

    if (reservas[cabana]["fecha_check_in"].hasOwnProperty(fecha_check_in) === false) {
        reservas[cabana]["fecha_check_in"][fecha_check_in] = {};
        if (cabana === "Ancestral" && menu === "Sí") {
            costoFinal = precioAncestral + precioMenu;
        } else if (cabana === "Safari" && menu === "Sí") {
            costoFinal = precioSafari + precioMenu;
        } else if (cabana === "Ancestral" && menu === "No") {
            costoFinal = precioAncestral;
        } else if (cabana === "Safari" && menu === "No") {
            costoFinal = precioSafari;
        }
        console.log(costoFinal)
        alert("Reserva realizada, costo final: " + costoFinal);
    } else if (reservas[cabana]["fecha_check_in"].hasOwnProperty(fecha_check_in) === true) {
        alert("Fecha seleccionada no disponible, elija otra");
    } else {
        alert("Error en la selección de cabaña o fecha en formato incorrecto")
    }
}

for (cabanas_disponibles = 9; cabanas_disponibles > 0; cabanas_disponibles --) {
    reservar();
}

