import express from "express";



import {
  findPaletasController,
  findPaletaByIdCOntroller,
  createPaletaController,
  updatePaletasController,
  deletePaletaController,
} from '../controllers/paletasController.js';

export const route = express.Router();

route.get("/find-paletas", findPaletasController);
route.get("/find-paleta/:id", findPaletaByIdCOntroller);
route.post("/create", createPaletaController);
route.put("/update/:id", updatePaletasController);
route.delete("/delete/:id", deletePaletaController);
