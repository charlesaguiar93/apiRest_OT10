

import colecaoUF from '../dados/dados.js';

export const buscarUFsPorNome = (nomeUF) => {
    return colecaoUF.filter(uf => uf.nome.toLowerCase().includes(nomeUF.toLowerCase()));
};

export const buscarUFPorId = (id) => {
  const idUF = parseInt(id);
  return colecaoUF.find(uf => uf.id === idUF);
};