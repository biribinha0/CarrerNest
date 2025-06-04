import express from "express";
import { listarCandidaturasPorCandidatoController, listarCandidaturasPorVagaController, registrarCandidaturaController, cancelarCandidaturaController } from "../controllers/CandidaturaController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.get('/candidato/:id', authMiddleware, listarCandidaturasPorCandidatoController);

router.options('candidato/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});


router.get('/vaga/:id', authMiddleware, listarCandidaturasPorVagaController);

router.options('vaga/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});


router.post('/', authMiddleware, registrarCandidaturaController);

router.options('/', (req, res) => {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(204).send();
});


router.delete('/:id', authMiddleware, cancelarCandidaturaController);

router.options('/:id', (req, res) => {
    res.setHeader('Allow', 'DELETE, OPTIONS');
    res.status(204).send();
});

export default router;