/*
function somar() {
    let n1 = 20
    let n2 = 5
    let r = n1/n2
    let resto = r % 2
    if (resto === 0) {
        return `O resto é zero e seu resultado é ${r} e o resto é igual a ${resto}`
    } else {
        return `O resto não é zero e seu resultado é ${r} e o resto é igual a ${resto}`
    }
}
let res = somar()
console.log(res) */
/* Parametros na função */ 
function s(a = 0 , b = 0 ) {
    return a + b
    
}
console.log(s(4,5))

function pont(...valores){
    let res = 0 
    for (let v of valores) {
        res += v
    }   
    return res
}

console.log(pont(3,1,0,3,1,3,0))
//Funções anonimas
const f = function(...val) {

}

const soma = (v1, v2) => {

    let res = v1 + v2
    
    return res
    
}
console.log(soma(1,3))
//Função Geradora
function* generator(i) {
    yield i;
    yield i + 10;
    }
    
    const gen = generator(10);
    
    console.log(gen.next().value);
    // Expected output: 10
    
    console.log(gen.next().value);
    // Expected output: 20

// Função aninhada
function s() {
    const t = (v1,v2) => {
        let r = v1 - v2
        return r
    }  
}