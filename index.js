import express from 'express';
import colecaoUF from './dados/dados.js';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUF);
});


app.get('/ufs/:iduf', (req, res) => {

    if (isNaN(req.params.iduf)) {
        res.status(400).send({ error: 'O parâmetro iduf deve ser um número.' });
        return;
    }

    const idUF = parseInt(req.params.iduf);
    const uf = colecaoUF.find(u => u.id === idUF);

    res.send(uf);
}); 




/* // testando diferentes tipos de endpoints no Postman     
app.get('/ufs/:iduf', (req, res) => {
    const idUF = req.params.iduf;

res.send({"Retornando o valor da idUF":`${idUF}`});


}); */


app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});



