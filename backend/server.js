import express from "express";
import "./config/mongoConnect.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Server is running at http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
