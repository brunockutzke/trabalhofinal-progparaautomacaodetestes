function calcularTotal(ferramentas, comprar) {
    
    let nomesFerramentas = []
    let ferramentasIncluidas = []

    if (ferramentas.length == 0 || comprar.length == 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.")
    }

    for (let i in ferramentas) {
        nomesFerramentas.push(ferramentas[i].nome)
    }

    for (let i in comprar) {

        if(nomesFerramentas.includes(comprar[i])) {
            ferramentasIncluidas.push(comprar[i])
        } 
    }

    if(ferramentasIncluidas.length == 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.")
    }

    const precos = ferramentas
        .filter(f => ferramentasIncluidas.some(c => c === f.nome))
        .map(f => f.preco)

    let total = 0

    precos.forEach(preco => {
        total += preco
    });

    const mensagemResposta = `O valor a pagar pelas ferramentas (${ferramentasIncluidas.join(", ")}) é R$ ${total.toFixed(2)}`
    
    return mensagemResposta
}

module.exports = {
    calcularTotal
}