const nomes = ["Renata", "Adriane", "Roberta", "Adriana", "Lindamir", "Mariane", "Sofia"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)