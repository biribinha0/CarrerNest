import { create, readAll, update } from '../config/database.js';

const criarNotificacao = async (empresaId, mensagem) => {
    try {
        return await create('notificacoes', {
            empresa_id: empresaId,
            mensagem,
            status: 'nao_vista'
        });
    } catch (error) {
        console.error('Erro ao criar notificação: ', error);
        throw error;
    }
};

const listarNotificacoesPorEmpresa = async (empresaId) => {
    try {
        return await readAll('notificacoes', `empresa_id = ${empresaId} ORDER BY criado_em DESC`);
    } catch (error) {
        console.error('Erro ao listar notificações: ', error);
        throw error;
    }
};

const marcarNotificacaoComoVista = async (id) => {
    try {
        return await update('notificacoes', { status: 'vista' }, `id = ${id}`);
    } catch (error) {
        console.error('Erro ao atualizar status da notificação: ', error);
        throw error;
    }
};

export {
    criarNotificacao,
    listarNotificacoesPorEmpresa,
    marcarNotificacaoComoVista
};
