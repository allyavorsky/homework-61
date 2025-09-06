const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Головна сторінка");
});

app.get("/users", (req, res) => {
  res.send("Сторінка користувачів (PUG)");
});

app.get("/articles", (req, res) => {
  res.send("Сторінка статей (EJS)");
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
