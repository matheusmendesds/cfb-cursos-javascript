const caixa1=document.getElementById('q1')
const caixa2=document.getElementById('q2')
const btn=document.getElementById('botao')
const btn2=document.getElementById('botao2')
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})

btn2.addEventListener("click",()=>{
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})

//Resolução do CFB Cursos
//trocar o botão copiar por Transferir, então fazer um array
//com cursos não selecionados, assim fazendo q o botão deixe selecionados 
//de um lado e nao selecionados do outro

// btn.addEventListener("click",()=>{
//     const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
//     const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
//     cursosSelecionados.map((el)=>{
//         caixa2.appendChild(el)
//     })
//     cursosNaoSelecionados.map((el)=>{
//         caixa1.appendChild(el)
//     })
// })
