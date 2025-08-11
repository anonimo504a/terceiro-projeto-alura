
const nomes = ["Renata", "Adriane", "Carlos", "Sofia", "Lindamir", "Eliseu", "Eliete"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)