const caixa1=document.querySelector("#q1")
const btn_c=[...document.querySelectorAll(".curso")]
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c" + chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    caixa1.appendChild(novoElemento)    
})
   