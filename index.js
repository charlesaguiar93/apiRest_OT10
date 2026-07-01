import express from 'express';
import colecaoUF from './dados/dados.js';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUF);
});


app.get('/ufs/:iduf', (req, res) => {

   const idUF = parseInt(req.params.iduf);
   // const uf = colecaoUF.find(u => u.id === idUF);
   let mensagemErro = '';
   let uf;

     if (!(isNaN(idUF))) {
        uf = colecaoUF.find(u => u.id === idUF);
        if (!uf) {
     mensagemErro = { error: 'UF não encontrada ' };
        }
    } else {
        mensagemErro = { error: 'ID Requisição  inválido com Letras' };
    }
    
       //res.send(uf); // res.send({"Retornando o valor da idUF completa":`${idUF}`});
    if (uf) {
        res.json(uf);
    } else {
       res.status(404).send({"error": mensagemErro.error});
    }
}); 




/* // testando diferentes tipos de endpoints no Postman     
app.get('/ufs/:iduf', (req, res) => {
    const idUF = req.params.iduf;

res.send({"Retornando o valor da idUF":`${idUF}`});


}); */


app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});



