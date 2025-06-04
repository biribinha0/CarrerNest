import express from "express";

import { lerVagasController, listarVagasPorDistancia, listarVagasPorEmpresaController, filtrarVagasController, obterVagaPorIdController, criarVagaController, atualizarVagaController, excluirVagaController } from "../controllers/VagaController.js";

import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.get('/', lerVagasController);

router.get('/:id', obterVagaPorIdController);

router.get('/distancia/:id', authMiddleware, listarVagasPorDistancia);

router.get('/empresa/:id', authMiddleware, listarVagasPorEmpresaController);

router.get('/filtros', authMiddleware, filtrarVagasController);

router.post('/', authMiddleware, criarVagaController);

router.put('/:id', authMiddleware, atualizarVagaController);

router.delete('/:id', atualizarVagaController, excluirVagaController);

router.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.status(204).send();
});
router.options('/:id', (req, res) => {
    res.setHeader('Allow', 'GET, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

export default router;