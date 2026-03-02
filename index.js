const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => res.send("Welcome to e-shop-server"))

app.listen(PORT, () => console.log(`working on http://localhost:${PORT}`))
