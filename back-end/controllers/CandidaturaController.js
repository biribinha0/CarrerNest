import { listarCandidaturasPorCandidato, listarCandidaturasPorVaga, registrarCandidatura, cancelarCandidatura } from "../models/Candidatura.js";
import { criarNotificacao } from "../models/Notificacoes.js";


const listarCandidaturasPorCandidatoController = async (req, res) => {
    try {
        const candidatoId = req.params.id
        const candidaturas = await listarCandidaturasPorCandidato(candidatoId);
        res.status(200).json(candidaturas);
    } catch (error) {
        console.error("Erro ao listar candidaturas por candidato: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar candidaturas por candidato' })
    }
}

const listarCandidaturasPorVagaController = async (req, res) => {
    try {
        const vagaId = req.params.id
        const candidaturas = await listarCandidaturasPorVaga(vagaId);
        res.status(200).json(candidaturas);
    } catch (error) {
        console.error("Erro ao listar candidaturas por vaga: ", error);
        res.status(500).json({ mensagem: 'Erro ao listar candidaturas por vaga' })
    }
}

const registrarCandidaturaController = async (req, res) => {
    try {
        const { vaga_id, candidato_id } = req.body;
        const candidaturaData = {
            vaga_id: vaga_id,
            candidato_id: candidato_id
        }
        const candidaturaId = await registrarCandidatura(candidaturaData);

        await criarNotificacao(vaga.empresa_id, `Um candidato se inscreveu na vaga "${vaga.titulo}".`);


        res.status(200).json({ mensagem: 'Candidatura registrada com sucesso', candidaturaId });
    } catch (error) {
        console.error("Erro ao registrar candidatura: ", error);
        res.status(500).json({ mensagem: 'Erro ao registrar candidatura' })
    }
}

const cancelarCandidaturaController = async (req, res) => {
    try {
        const candidaturaId = req.params.id;
        await cancelarCandidatura(candidaturaId);
        res.status(200).json({ mensagem: 'Candidatura cancelada com sucesso' })
    } catch (error) {
        console.error('Erro ao cancelar candidatura');
        res.status(500).json({ mensagem: 'Erro ao cancelar candidatura' })
    }
}

export { listarCandidaturasPorCandidatoController, listarCandidaturasPorVagaController, registrarCandidaturaController, cancelarCandidaturaController }