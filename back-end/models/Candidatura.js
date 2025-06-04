import { readAll, create, deleteRecord } from "../config/database.js";

const listarCandidaturasPorCandidato = async (candidatoId) => {
    try {
        return await readAll('candidaturas', `candidato_id = ${candidatoId}`);
    } catch (error) {
        console.error('Erro ao listar candidaturas por candidato: ', error);
        throw error
    }
}

const listarCandidaturasPorVaga = async (vagaId) => {
    try {
        return await readAll('candidaturas', `vaga_id = ${vagaId}`);
    } catch (error) {
        console.error('Erro ao listar candidaturas por vaga: ', error);
        throw error
    }
}

const registrarCandidatura = async (candidaturaData) => {
    try {
        create('candidaturas', candidaturaData);
    } catch (error) {
        console.error('Erro ao registrar candidatura: ', error);
        throw error
    }
}

const cancelarCandidatura = async (idCandidatura) => {
     try {
        return await deleteRecord('candidaturas', `id = ${cancelarCandidatura}`);
    } catch (error) {
        console.error('Erro ao excluir candidatura: ', error);
        throw error
    }
}


export { listarCandidaturasPorCandidato, listarCandidaturasPorVaga, registrarCandidatura, cancelarCandidatura }