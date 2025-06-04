import { listarCandidatos, obterCandidatoPorId, criarCandidato, atualizarCandidato, excluirCandidato } from "../models/Candidato.js";
import { generateHashedPassword } from "../utils/hashPassword.js"
import { atualizarEnderecoCandidato } from "../models/Endereco.js";
import {obterCoordenadas} from "../utils/obterCoordenadas.js"


const listarCandidatosController = async (req, res) => {
    try {
        const candidatos = await listarCandidatos();
        res.status(200).json(candidatos);
    } catch (error) {
        console.error("Erro ao listar candidatos: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar candidatos' })
    }
};

const obterCandidatoPorIdController = async (req, res) => {
    try {
        const candidato = await obterCandidatoPorId(req.params.id);
        if (candidato) {
            res.status(200).json(candidato);
        }
    } catch (error) {
        console.log('Erro ao obter candidato por ID: ', error);
        res.status(500).json({ mensagem: 'Erro ao obter candidato por ID' });
    }
};

const atualizarCandidatoController = async (req, res) => {
    try {
        const candidatoId = req.params.id;
        const { cpf, nome, email, telefone, senha, data_nascimento, curso, genero, linkedin, endereco } = req.body;
        const senhaHash = await generateHashedPassword(senha);
        const candidatoData = {
            cpf: cpf,
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senhaHash,
            data_nascimento: data_nascimento,
            curso: curso,
            genero: genero,
            linkedin: linkedin
        }

        await atualizarCandidato(candidatoId, candidatoData);

        const enderecoCompleto = `${endereco.logradouro}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}`;
        const coordenadas = await obterCoordenadas(enderecoCompleto);

        const enderecoData = {
            logradouro: endereco.logradouro,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            latitude: coordenadas.latitude,
            longitude: coordenadas.longitude,
        };

        await atualizarEnderecoCandidato(candidatoId, enderecoData);

        res.status(200).json({ mensagem: 'Candidato atualizado com sucesso' });

    } catch (error) {
        console.error('Erro ao atualizar candidato: ', error);
        res.status(500).json({ mensagem: 'Erro ao atualizar candidato' })
    }
};

const excluirCandidatoController = async (req, res) => {
    try {
        const candidatoId = req.params.id;
        await excluirCandidato(candidatoId);
        res.status(200).json({ mensagem: 'Candidato excluído com sucesso' })
    } catch (error) {
        console.error('Erro ao excluir candidato');
        res.status(500).json({ mensagem: 'Erro ao excluir candidato' })
    }
};

export { listarCandidatosController, obterCandidatoPorIdController, atualizarCandidatoController, excluirCandidatoController }