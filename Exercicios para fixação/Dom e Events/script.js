
const btnEnviar=document.querySelector("#botao")
const tabelaBody=document.getElementById("tabelaB")
const btnGravar=document.getElementById("btnGravar")
const tes=document.getElementById("teste")
let n=document.querySelector("#inome")
let t=document.querySelector("#times")
let i=document.querySelector("#idade")





btnEnviar.addEventListener("click",(evt)=>{    
    let nome=n.value
    let time=t.value
    let idade=i.value
    let indice=0
    if (nome && time != "" && idade > 0){
        const nElemento=document.createElement("tr")
        nElemento.setAttribute("id","e"+ indice)

        const nom=document.createElement("td")
        nom.setAttribute("class","caixa")
        nom.setAttribute("id","n" + indice)
        nom.innerHTML=nome
        
        const idad=document.createElement("td")
        idad.setAttribute("class","caixa")
        idad.innerHTML=idade
        
        const tim=document.createElement("td")
        tim.setAttribute("class","caixa")
        tim.innerHTML=time
        
        nElemento.appendChild(nom)
        nElemento.appendChild(idad)
        nElemento.appendChild(tim)

        tabelaBody.appendChild(nElemento)
        indice ++
    
        return nElemento
        } else {
        alert("ERRO! Insira os dados corretamente")
        }

})


// btnEnviar.addEventListener("click",(evt)=>{
//         const nElemento=document.createElement("tr")
//         nElemento.setAttribute("id","l" + indice)

//         const nom=document.createElement("td")
//         nom.setAttribute("class","caixa")
//         nom.setAttribute("id","n" + indice)
//         nom.innerHTML=nome
//         nElemento.appendChild(nom)

//         const idad=document.createElement("td")
//         idad.setAttribute("class","caixa")
//         idad.innerHTML=idade
//         nElemento.appendChild(idad)

//         const tim=document.createElement("td")
//         tim.setAttribute("class","caixa")
//         tim.innerHTML=time
//         nElemento.appendChild(tim)

//         tabelaBody.appendChild(nElemento)
//         indice ++
//     })
