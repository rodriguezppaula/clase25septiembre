function calcularIMC() {
    
    let peso = parseFloat(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);

    let division = (peso / (estatura * estatura)).toFixed(2);
    let nivel = "";

    if (division < 18.5) {
        nivel = "Bajo peso";
    } else if (division >= 18.5 && division <= 24.9) {
        nivel = "Normal";
    } else if (division >= 25 && division <= 29.9) {
        nivel = "Sobrepeso";
    } else {
        nivel = "Obesidad";
    }

    alert("Tu índice de masa corporal es: " + division + "\n Y se encuentra en nivel: " + nivel);
}
