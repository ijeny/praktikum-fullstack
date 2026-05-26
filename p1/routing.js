const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Selamat Datang...");
});

app.get("/home", (req, res) => {
  res.send("Halaman Berada (Home)..");
});

app.get("/profil", (req, res) => {
  res.send("Halaman Profil ..");
});

app.get("/user/snack", (req, res) => {
  res.send("Halaman Produk Snack..");
});

app.get("/user/drink", (req, res) => {
  res.send("Halaman Produk Soft Drink..");
});

app.get("/user/snack/:id", (req, res) => {
  res.send(`Halaman Produk Snack.. (id = ${req.params.id})`);
});

app.get("/user/drink/:id", (req, res) => {
  res.send(`Halaman Produk Soft Drink.. (id = ${req.params.id})`);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
