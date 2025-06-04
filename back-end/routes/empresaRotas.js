import express from "express";
import { listarEmpresasController, obterEmpresaPorIdController, atualizarEmpresaController, excluirEmpresaController } from "../controllers/EmpresasController.js";
import { listarNotificacoes, marcarComoVista } from '../controllers/NotificacaoController.js';

import authMiddleware from "../middlewares/AuthMiddleware.js";

import multer from 'multer';
import path from 'path';

import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../front-end/my-app/public/img/empresas'));
    },
    filename: (req, file, cb) => {
        const nomeArquivo = `${Date.now()}-${file.originalname}`;
        cb(null, nomeArquivo);
    }
});

const upload = multer({ storage: storage })



router.get('/', listarEmpresasController);
router.get('/:id', obterEmpresaPorIdController);

router.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send;
});



router.put('/:id', authMiddleware, upload.single('logo'), atualizarEmpresaController);

router.delete('/:id', authMiddleware, excluirEmpresaController);



router.options('/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});

router.get('/:id/notificacoes', authMiddleware ,listarNotificacoes);
router.put('/notificacoes/:idNotificacao/vista', authMiddleware, marcarComoVista);

export default router;