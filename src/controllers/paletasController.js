import {
  findPaletasService,
  findPaletaByIdService,
} from '../services/paletasService.js';

export const findPaletasController = (req, res) => {
  const allPaletas = findPaletasService();
  res.send(allPaletas);
};

export const findPaletaByIdCOntroller = (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = findPaletaByIdService(idParam);
  res.send(chosenPaleta);
};

export const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = createPaletaService(paleta);
  res.send(newPaleta);
};

export const updatePaletasController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletaEdit = req.body;
  const updatedPaleta = updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

export const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  deletePaletaService(idParam);
  res.send({ message: "Paleta deletada com sucesso." });
};
