import { listarEmpresas, obterEmpresaPorId, atualizarEmpresa, excluirEmpresa } from "../models/Empresa.js";
import { generateHashedPassword } from "../utils/hashPassword.js"

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listarEmpresasController = async (req, res) => {
    try {
        const empresas = await listarEmpresas();
        res.status(200).json(empresas);
    } catch (error) {
        console.error("Erro ao listar empresas: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar empresas' })
    }
};

const obterEmpresaPorIdController = async (req, res) => {
    try {
        const empresa = await obterEmpresaPorId(req.params.id);
        if (empresa) {
            res.status(200).json(empresa);
        }
    } catch (error) {
        console.log('Erro ao obter empresa por ID: ', error);
        res.status(500).json({ mensagem: 'Erro ao obter empresa por ID' });
    }
};


const atualizarEmpresaController = async (req, res) => {
    try {
        const empresaId = req.params.id;
        const { cnpj, nome, email, telefone, senha, setor, logo, descricao } = req.body;
        let logoPath = null;
        if (req.file) {
            logoPath = req.file.path.replace(__dirname.replace('\\controllers', ''), '');
        }
        const senhaHash = await generateHashedPassword(senha);
        const empresaData = {
            cnpj: cnpj,
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senhaHash,
            setor: setor,
            logo: logoPath,
            descricao: descricao,
        }
        await atualizarEmpresa(empresaId, empresaData);
        res.status(200).json({ mensagem: 'Empresa atualizada com sucesso' })
    } catch (error) {
        console.error('Erro ao atualizar empresa: ', error);
        res.status(500).json({ mensagem: 'Erro ao atualizar empresa' })
    }
};

const excluirEmpresaController = async (req, res) => {
    try {
        const empresaId = req.params.id;
        await excluirEmpresa(empresaId);
        res.status(200).json({ mensagem: 'Empresa excluída com sucesso' })
    } catch (error) {
        console.error('Erro ao excluir empresa');
        res.status(500).json({ mensagem: 'Erro ao excluir empresa' })
    }
};


export { listarEmpresasController, obterEmpresaPorIdController, atualizarEmpresaController, excluirEmpresaController }