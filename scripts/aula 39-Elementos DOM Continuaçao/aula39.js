const caixa1=document.querySelector("#q1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos" )

console.log(caixa1.firstElementChild.innerHTML="TESTE UM")
console.log(caixa1.children[3].innerHTML="TESTE DOIS")

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)

