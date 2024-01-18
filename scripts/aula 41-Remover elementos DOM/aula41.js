const caixa1=document.querySelector("#q1")
const btn_c=[...document.querySelectorAll(".curso")]
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c" + chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const btn_lix=document.createElement("img")
    btn_lix.setAttribute("src","./lixeira.png")
    btn_lix.setAttribute("class","btn_lixeira")
    btn_lix.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lix)
    caixa1.appendChild(novoElemento)    
})
   