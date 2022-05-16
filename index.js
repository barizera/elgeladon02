import express from "express";
import path from "path";

import {route} from './src/routes/paletasRoutes.js';

const app = express();
const __dirname = path.resolve(path.dirname(""));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Rodando servidor na porta http://localhost:${port}.`);
});
