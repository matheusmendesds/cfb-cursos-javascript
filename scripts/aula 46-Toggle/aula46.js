const caixaCursos = document.querySelector("#caixaCursos")
const brn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoveCurso=document.getElementById("btnRemoverCurso")
const btnAddAntes=document.getElementById("btnAddAntes")
const btnAddDepois=document.getElementById("btnAddDepois")
const nomeCurso=document.getElementById("nomeCurso")

let indice=0

const tirarSelecao=()=>{
    const cursoSelecionados=[...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})
const cursoSelecionado=()=>{
    const cursoSelecionados=[...document.querySelectorAll(".selecionado")]
    return cursoSelecionados[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    try{
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    }catch(ex){
        alert("Selecione um")
    }
})

btnRemoveCurso.addEventListener("click",(evt)=>{
    const cs=cursoSelecionado()
    if(cs!=undefined){      
        cs.remove()
    }else{
        alert("Selecione um curso")
    }    
}) 

btnAddAntes.addEventListener("click",(evt)=>{
    
    if(nomeCurso.value!=""){
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado())
    }else{
        alert("Digite o nome do curso")
    }
})

btnAddDepois.addEventListener("click",(evt)=>{
    if(nomeCurso.value!=""){
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
    }else{
        alert("Digite o nome do curso")
    }  
})