const express = require('express');
const porta = 3000
const servidor = express();

servidor.listen(()=> {
    console.log(`Api rodando na porta ${porta}`)
})

