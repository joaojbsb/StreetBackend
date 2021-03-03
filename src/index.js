const express = require('express');
//o cors permite a integração do backend com o fronteend
const cors = require('cors');
//criando o servidor
const server = express();
server.use(express.json());

server.use(cors());//so precisa isso para aceitar a conexao
const lutadoresRoutes = require('../routes/lutadoresRoutes');


server.use('/lutador', lutadoresRoutes);



//escutar na porta 3001 e executar a função
server.listen(process.env.PORT || 3001, () =>{
    console.log('Servidor Online');
})
