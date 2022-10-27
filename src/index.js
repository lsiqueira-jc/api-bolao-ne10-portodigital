const express = require("express");

const app = express();

app.use(express.json());

// GET| POST | PUT | DELETE
//Metodo GET - Ranking | Listagem de jogos

app.post("/salvar", (request, response) => {
  //1. Receber os dados
  //2. Validar dados
  //3. Validar jogos
  //4. Salvar o jogo no banco
  const { teste } = request.body;
  console.log(teste);
  return response.send("ap1");
});

app.get("/listar", (request, response) => {
  return response.json(["Brasil x Argentina", "Portugal X Espanha"]);
});

app.listen(3333);
