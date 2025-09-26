function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;

    let division = (peso / (estatura * estatura));


    alert("Su índice de masa corporal es: "+ division);
}