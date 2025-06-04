import {
    listarNotificacoesPorEmpresa,
    marcarNotificacaoComoVista
} from '../models/Notificacoes.js';

const listarNotificacoes = async (req, res) => {
    const { id } = req.params; // empresa_id
    try {
        const notificacoes = await listarNotificacoesPorEmpresa(id);
        res.json(notificacoes);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar notificações.' });
    }
};

const marcarComoVista = async (req, res) => {
    const { idNotificacao } = req.params;
    try {
        await marcarNotificacaoComoVista(idNotificacao);
        res.json({ mensagem: 'Notificação marcada como vista.' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao atualizar notificação.' });
    }
};

export { listarNotificacoes, marcarComoVista };
