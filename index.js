
import express from 'express';
import {buscarUFs, buscarUFPorId, buscarUFsPorNome} from './servicos/servico.js';

const app = express();




/* Rota OT13 */
/* Rota Servicos -  OT14 */
app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca; // captura o parâmetro de busca da query string
    const resultado = nomeUF ? buscarUFsPorNome(nomeUF) : buscarUFs(); // se houver um parâmetro de busca, filtra as UFs pelo nome, caso contrário, retorna todas as UFs

    if(resultado.length > 0) {
    res.json(resultado);
    } else {
        res.status(404).json({ error: 'Nenhuma UF encontrada com o nome fornecido' });
    }
});


app.get('/ufs/:iduf', (req, res) => {

    const uf  = buscarUFPorId(req.params.iduf);
     
    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.iduf))) {
        res.status(400).json({ error: 'Requisição inválida - O parâmetro fornecido não é um número válido' });
    } else {
        res.status(404).json({ error: 'UF não encontrada' });
    }
}); 



app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});



