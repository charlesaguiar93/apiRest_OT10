import colecaoUf from '../dados/dados.js';

export const buscarUFs = () => {
    return colecaoUf;
}

export const buscarUFsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUFPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}
