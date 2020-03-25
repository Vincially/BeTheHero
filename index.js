const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: "Semena Omnistack 11.0",    
        aluno: "Vinícius Alves Costa!"
    });
});

app.listen(3333);