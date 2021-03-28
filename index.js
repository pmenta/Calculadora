var valor;
valor = document.getElementById('visor')

function botao(num) {
    valor.value += num
}

function soma(num) {
    valor.value += num
}
function subtrai(num) {
    valor.value += num
}
function multiplica(num) {
    valor.value += num
}
function divide(num) {
    valor.value += num
}
function reseta() {
    valor.value = ''
}

function analise() {
    
    if (valor.value.indexOf('*') == 0 || valor.value.indexOf('/') == 0) {
        while (valor.value.indexOf('*') == 0 || valor.value.indexOf('/') == 0) {
        valor.value = valor.value.substr(1)
        }
    } 
    if (valor.value.lastIndexOf('*') == valor.value.length - 1 || valor.value.lastIndexOf('/') == valor.value.length - 1 || valor.value.lastIndexOf('+') == valor.value.length - 1 || valor.value.lastIndexOf('-') == valor.value.length - 1) {
        while (valor.value.lastIndexOf('*') == valor.value.length - 1 || valor.value.lastIndexOf('/') == valor.value.length - 1 || valor.value.lastIndexOf('+') == valor.value.length - 1 || valor.value.lastIndexOf('-') == valor.value.length - 1) {
        valor.value = valor.value.split('').reverse().join('');
        valor.value = valor.value.substr(1)
        valor.value = valor.value.split('').reverse().join('');
        }
    }
}
function calcula() {
    analise()
    valor.value = eval(valor.value)
}