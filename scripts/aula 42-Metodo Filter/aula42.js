// Primeiro Metódo
// const filtroMaior18=(valor)=>{
//     if(valor >= 18)
//         return valor
// }

// const idades=[12,21,30,17,44,12,50]
// const maior=idades.filter(filtroMaior18)

// console.log(idades)
// console.log(maior)

//Segundo Metódo
const filtroMaior18=(valor)=>{
    if(valor >= 18)
        return valor
}
    
const idades=[12,21,30,17,44,12,50]
const maior=idades.filter((val,ind,arr)=>{
    if(val >=18)
        return val
})
const menor=idades.filter((val,ind,arr)=>{
    if(val < 18)
        return val
})
    
console.log(idades)
console.log(maior)
console.log(menor)