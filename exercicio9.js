let idadeusuario = prompt("Qual é sua idade?")
let idademelhoramigo = prompt("Qual é a idade do seu melhor amigo(a)?")

let resultado = Number(idadeusuario) > Number(idademelhoramigo)
let diferença = Number(idadeusuario) - Number(idademelhoramigo)

console.log("Sua idade é maior do que a do seu melhor amigo(a)? ", resultado)

console.log("A diferença de idade entre vocês é!", diferença)