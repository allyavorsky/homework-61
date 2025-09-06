const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const users = [
  { id: 1, name: "Ярослав", email: "y@example.com" },
  { id: 2, name: "Марія", email: "m@example.com" },
  { id: 3, name: "Оля", email: "o@example.com" },
];

const articles = [
  {
    id: 1,
    title: "Що таке Express",
    content: "Express - це мінімалістичний веб-фреймворк для Node.js.",
  },
  {
    id: 2,
    title: "Що таке PUG",
    content: "PUG - це потужний шаблонізатор для Node.js.",
  },
  {
    id: 3,
    title: "Що таке EJS",
    content: "EJS дозволяє вбудовувати JavaScript прямо в HTML.",
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Головна сторінка" });
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
  res.render("articles.ejs", { title: "Список статей", articles: articles });
});

app.get("/articles/:articleId", (req, res) => {
  const articleId = parseInt(req.params.articleId);
  const article = articles.find((a) => a.id === articleId);

  if (article) {
    res.render("article.ejs", { title: article.title, article: article });
  } else {
    res.status(404).send("Статтю не знайдено");
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
