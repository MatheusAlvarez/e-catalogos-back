const express = require('express');
var cors = require('cors');

const app = express();

const router = require('./routes/router');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', router);

const port = 3001;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});