// Funciones de cálculo
function interes(ci, mes) {
    const inte = 0.02;
    return ci * Math.pow((1 + inte), mes);
}

function sueldo(venta1, venta2, venta3, sueldoBase) {
    return (venta1 * 0.1) + (venta2 * 0.1) + (venta3 * 0.1) + sueldoBase;
}

function descuento(cantidad) {
    return cantidad * 0.15;
}

function calificacion(cal1, cal2, cal3, calex, calt) {
    const prom = (cal1 + cal2 + cal3) / 3;
    return (prom * 0.55) + (calex * 0.3) + (calt * 0.15);
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    return edad;
}

function palabrasANumeros(arr) {
    const traducciones = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    return arr.map(palabra => traducciones[palabra] !== undefined ? traducciones[palabra] : -1);
}

function calcularPago(horas) {
    const pago = 150;
    let resultado;

    if (horas > 40) {
        let horasdo = horas - 40;
        if (horasdo > 8) {
            let horastr = horasdo - 8;
            resultado = (horastr * (pago * 3) + (horasdo - horastr) * (pago * 2) + (horas - horasdo) * pago);
        } else {
            resultado = (horasdo * (pago * 2) + (horas - horasdo) * pago);
        }
    } else {
        resultado = horas * pago;
    }

    return resultado;
}

function utilidades(tiempo, sueldoBase) {
    if (tiempo < 1) {
        sueldoBase *= 1.05;
    } else if (tiempo >= 1 && tiempo < 2) {
        sueldoBase *= 1.07;
    } else if (tiempo >= 2 && tiempo < 5) {
        sueldoBase *= 1.10;
    } else if (tiempo >= 5 && tiempo < 10) {
        sueldoBase *= 1.15;
    } else if (tiempo >= 10) {
        sueldoBase *= 1.20;
    }
    return sueldoBase;
}

function eliminarScripts(html) {
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

// Validaciones
function validarNumero(value) {
    return /^\d+(\.\d+)?$/.test(value);
}

function validarTexto(value) {
    return /^[a-zA-Z\s]+$/.test(value);
}

function validarEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

document.addEventListener("DOMContentLoaded", () => {
    // Manejo de formularios
    document.getElementById("interesForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const ci = document.getElementById("ci").value;
        const mes = document.getElementById("mes").value;

        if (!validarNumero(ci) || !validarNumero(mes)) {
            alert("Por favor, ingrese valores válidos para el capital y meses.");
            return;
        }

        const resultado = interes(parseFloat(ci), parseInt(mes));
        document.getElementById("resultadoInteres").innerText = `El capital final es: ${resultado.toFixed(2)}`;
    });

    document.getElementById("sueldoForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const venta1 = document.getElementById("venta1").value;
        const venta2 = document.getElementById("venta2").value;
        const venta3 = document.getElementById("venta3").value;
        const sueldoBase = document.getElementById("sueldoBase").value;

        if (!validarNumero(venta1) || !validarNumero(venta2) || !validarNumero(venta3) || !validarNumero(sueldoBase)) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }

        const resultado = sueldo(parseFloat(venta1), parseFloat(venta2), parseFloat(venta3), parseFloat(sueldoBase));
        document.getElementById("resultadoSueldo").innerText = `El sueldo total es: ${resultado.toFixed(2)}`;
    });

    document.getElementById("descuentoForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const cantidad = document.getElementById("cantidad").value;

        if (!validarNumero(cantidad)) {
            alert("Por favor, ingrese una cantidad válida.");
            return;
        }

        const resultado = descuento(parseFloat(cantidad));
        document.getElementById("resultadoDescuento").innerText = `Descuento: ${resultado.toFixed(2)}`;
    });

    document.getElementById("calificacionForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const cal1 = document.getElementById("cal1").value;
        const cal2 = document.getElementById("cal2").value;
        const cal3 = document.getElementById("cal3").value;
        const calex = document.getElementById("calex").value;
        const calt = document.getElementById("calt").value;

        if (!validarNumero(cal1) || !validarNumero(cal2) || !validarNumero(cal3) || !validarNumero(calex) || !validarNumero(calt)) {
            alert("Por favor, ingrese calificaciones válidas.");
            return;
        }

        const resultado = calificacion(parseFloat(cal1), parseFloat(cal2), parseFloat(cal3), parseFloat(calex), parseFloat(calt));
        document.getElementById("resultadoCalificacion").innerText = `La calificación total es: ${resultado.toFixed(2)}`;
    });

    document.getElementById("edadForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
        const edad = calcularEdad(fechaNacimiento);
        document.getElementById("resultadoEdad").innerText = `Tienes ${edad} años.`;
    });

    document.getElementById("palabrasForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const palabras = document.getElementById("palabras").value.split(",").map(palabra => palabra.trim());
        const resultado = palabrasANumeros(palabras);
        document.getElementById("resultadoPalabras").innerText = `Resultado: ${resultado.join(", ")}`;
    });

    document.getElementById("horasForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const horas = document.getElementById("horas").value;

        if (!validarNumero(horas)) {
            alert("Por favor, ingrese un número válido de horas.");
            return;
        }

        const resultado = calcularPago(parseFloat(horas));
        document.getElementById("resultadoHoras").innerText = `Pago total: ${resultado.toFixed(2)}`;
    });

    document.getElementById("utilidadesForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const tiempo = document.getElementById("tiempo").value;
        const sueldoBase = document.getElementById("sueldoUtilidades").value;

        if (!validarNumero(tiempo) || !validarNumero(sueldoBase)) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }

        const resultado = utilidades(parseFloat(tiempo), parseFloat(sueldoBase));
        document.getElementById("resultadoUtilidades").innerText = `Su sueldo ajustado es: ${resultado.toFixed(2)}`;
    });

    document.getElementById("registroForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const comentarios = document.getElementById("comentarios").value;
        const aceptar = document.getElementById("aceptar").checked;

        if (!validarTexto(nombre)) {
            alert("El nombre solo puede contener letras.");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, ingrese un email válido.");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            alert("La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un dígito.");
            return;
        }

        if (!comentarios || comentarios.length > 50) {
            alert("Los comentarios son obligatorios y no pueden exceder los 50 caracteres.");
            return;
        }

        if (!aceptar) {
            alert("Debes aceptar las condiciones del servicio.");
            return;
        }

        alert("Registro exitoso");
    });

    document.getElementById("eliminarScriptsForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const html = document.getElementById("htmlInput").value;
        const resultado = eliminarScripts(html);
        document.getElementById("resultadoScripts").innerText = resultado;
    });
});
