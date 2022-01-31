// Crie um objeto que receba ao menos três propriedades sobre você.


let dados=[{
    Nome: "Ste" ,
    Idade: 21 ,
    Altura: 1.70 ,

}
]

// Adicione uma nova propriedade sem alterar seu objeto inicial.

dados.Time="Flamengo"

// Remova uma propriedade desse objeto.

delete dados.Time

//Mostre no console todas as propriedades desse objeto.

console.log(dados)


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro=[{
    Nome: "Ste",
    Idade: 21,
    Telefone: 973660087,
    Amigos: ["Sara", "Julia", "Gabriella", "Caio"]
},
{
    Nome: "Gabs",
    Idade: 21,
    Telefone: 970707070,
    Amigos: ["Sara", "Julia", "Ste", "Caio"]
},
{
    Nome: "Julia",
    Idade: 21,
    Telefone: 40028922,
    Amigos: ["Sara", "Ste", "Gabriella", "Caio"]
},
{
    Nome: "Sara",
    Idade: 21,
    Telefone: 22531177,
    Amigos: ["Julia", "Ste", "Gabriella", "Caio"]
},
{
    Nome: "Caio",
    Idade: 18,
    Telefone: 190,
    Amigos: ["Sara", "Ste", "Gabriella", "Julia"]
}
]

console.log(cadastro)

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].Amigos[0])
console.log(cadastro[1].Amigos[2])
console.log(cadastro[2].Amigos[3])
console.log(cadastro[3].Amigos[0])
console.log(cadastro[4].Amigos[2])
