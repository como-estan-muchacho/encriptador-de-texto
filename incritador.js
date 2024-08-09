function encriptar() {
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var texto = document.querySelector("#input-texto").value;
    if (texto == "") {
        alert("Lo siento, pero no debe estar vacío.");


    } else if (texto.match(caracteres) != texto.match(caracteres)) {
        alert("El texto no puede contener Mayusculas ni acentos por favor ni caracteres especiales.");
    } else {

        var texto = document.querySelector("#input-texto").value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;
    }
}
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}
var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

function copiar() {
    var copiado = document.querySelector(".text-input-salida");
    copiado.select();
    copiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiado.value);
}

var boton3 = document.querySelector("#btn-copiar");
boton3.onclick = copiar;

const elemento = document.querySelector('.text-input-salida');

// Agrega un evento para cambiar los estilos al hacer clic
elemento.addEventListener('click', () => {
    elemento.classList.add('activado');
});


