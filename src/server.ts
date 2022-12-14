import * as express from "express"
import { Request, Response } from "express"
import { User } from "./database/entity/user.entity"
import { hash } from "bcrypt"
import { Palpite } from "./database/entity/palpite.entity"

import { myDataSource } from "../app-data-source"

myDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
})

const express = require("express");

const app = express();

app.use(express.json());

//listar os jogos
app.get("/",(request,response)=> {
  //consultar o banco de dados 
  return response.json(["Brasil x Argentina", "Portugal X Espanha"]);
});

//Palpite Ricardo e Sandra 
//app.post("/palpitar",(request, response) =>{});

app.post('/palpitar', async (request, response) => {
const palpitar = request.body;

const palpite = new Palpite();

palpite.palpite_mandante = palpitar.palpite_mandante
palpite.palpite_visitante = palpitar.palpite_visitante
palpite.pontos	= palpitar.pontos
palpite.user = palpitar.user
palpite.jogos = palpitar.jogos

await myDataSource.manager.save(palpite)

return response.json(palpite);

});





//cadastro de usuario - Thiago e Eduardo 
app.post('/cadastro', async (request, response)=>{
const data = request.body;

const valorCriptografado = await hash(data.senha, 8);

const usuario = new User();
usuario.nome = data.nome
usuario.email = data.email
usuario.senha = valorCriptografado  // https://github.com/kelektiv/node.bcrypt.js 

await myDataSource.manager.save(usuario)


return response.json(usuario);




});

//Logar  ????
app.post('/logar',(request,response)=>{});

//Ranking ????
app.get('ranking',()=>{});



// GET| POST | PUT | DELETE
//Metodo GET - Ranking | Listagem de jogos

// app.post("/salvar", async (request, response) => {
//   const users = await myDataSource.getRepository(User).find()

//   //1. Receber os dados
//   //2. Validar dados
//   //3. Validar jogos
//   //4. Salvar o jogo no banco
//   const { teste } = request.body;
//   console.log(teste);
//   return response.send("ap1");
// });

// app.get("/listar",async (request, response) => {
//   const users = await myDataSource.getRepository(User).find()

//   return response.json(["Brasil x Argentina", "Portugal X Espanha"]);
// });

app.listen(3333);
