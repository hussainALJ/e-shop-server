import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to e-shop-server"));

//Global error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`working on http://localhost:${PORT}`));
