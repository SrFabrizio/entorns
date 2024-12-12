function calcularSuma() {
    const num1 = parseFloat(document.getElementById('num1').value);  // Convertimos a número
    const num2 = parseFloat(document.getElementById('num2').value);  // Convertimos a número
    const suma = num1 + num2; 
    document.getElementById('resultado').innerText = `La suma es: ${suma}`;
}
