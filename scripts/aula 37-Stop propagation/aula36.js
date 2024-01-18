const caixa1=document.querySelector('#q1')
const cursos=[...document.querySelectorAll(".curso")]

caixa1.addEventListener("click",()=>{
    console.log("clicou")
})

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        evt.stopPropagation()
    })
})