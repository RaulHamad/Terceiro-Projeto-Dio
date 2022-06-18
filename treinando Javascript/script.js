// inicio minha funcao
function contar(){
    var ini = document.getElementById('num1')
    var fimm = document.getElementById('num2')
    var passo = document.getElementById('num3')
    var res = document.getElementById('res')
//condicionais caso nao insira dados
if (ini.value.length == 0 || fimm.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] faltam dados')
    res.innerHTML = 'impossivel contar'
}
//converte para number os valores
else {
    res.innerHTML = 'contando ....'
    var i = Number(ini.value)
    var f = Number(fimm.value)
    var p = Number(passo.value)
   // if condicional caso o passo seja = 0
    if (p <= 0){
        window.alert('passo invalido, considerando passo 1')
        p = 1
    }
    // quando inicio < fimm e uso do for
if (i < f){
for(c = i; c <= f; c +=p){
    res.innerHTML += `${c} \u{1F449}`
}
}else{
    for(var c = i; c >= f; c -= p){
    res.innerHTML += `${c} \u{1F449}`
    }
}
}}