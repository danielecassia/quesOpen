//chamando o pacote do dotenv pra guardar as infos do BD
require('dotenv').config();

// chamando o express e guardando em variavel
const express = require('express');
const app = express();

// configuração pra chamar formulario
app.use(express.urlencoded({
  extended: true,
}));

// constante com a porta da API
const APP_API_URL = "http://localhost:3000";

//chamando cors (pra usar futuramente)
var cors = require('cors')
app.use(cors({
  origin: APP_API_URL,
  credentials: true,
}));

app.use(express.json());

//exportando o modulo do app
module.exports = app;
