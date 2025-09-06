const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Ярослав", email: "y@example.com" },
  { id: 2, name: "Марія", email: "m@example.com" },
  { id: 3, name: "Оля", email: "o@example.com" },
];

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Головна сторінка");
});

app.get("/users", (req, res) => {
  res.render("users", { title: "Список користувачів", users: users });
});

app.get("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.render("user", { title: "Деталі користувача", user: user });
  } else {
    res.status(404).send("Користувача не знайдено");
  }
});

app.get("/articles", (req, res) => {
  res.send("Сторінка статей (EJS)");
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
