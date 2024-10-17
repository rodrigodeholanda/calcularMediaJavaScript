function calcularMedia() {
    let num1 = parseFloat(document.getElementById('inputNum1').value);
    let num2 = parseFloat(document.getElementById('inputNum2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira valores numéricos.');
        document.getElementById('inputNum1').value = '';
        document.getElementById('inputNum2').value = '';
        document.getElementById('media').innerHTML = '';
        return;
    }

    let media = (num1 + num2) / 2;
    
    document.getElementById('media').innerHTML = media;

    document.getElementById('inputNum1').value = '';
    document.getElementById('inputNum2').value = '';
    
}

