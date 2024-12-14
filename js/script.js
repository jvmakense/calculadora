function somar() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);

    let resultado = num1 + num2;
    const display = document.getElementById('display')
    display.innerHTML = resultado;
}
function subtrair() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);

    let resultado = num1 - num2;
    const display = document.getElementById('display')
    display.innerHTML = resultado;
}
function multiplicar() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);

    let resultado = num1 * num2;
    const display = document.getElementById('display')
    display.innerHTML = resultado;
}
function divisao() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);

    if(num2 == 0) {
        display.innerHTML = 'Não e possivel dividir por 0'
    }
    else{
        let resultado = num1 / num2;
        const display = document.getElementById('display')
        display.innerHTML = resultado;
    }
}

function exponeciacao() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);

    let resultado = num1 ** num2;
    const display = document.getElementById('display')
    display.innerHTML = resultado;
}

function limpar() {
    const num1 = document.getElementById('numero1');
    const num2 = document.getElementById('numero2');

    input1.value = '';
    input2.value = '';
}