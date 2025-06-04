"use client"

import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';

export default function Notificacoes() {
    const [notificacoes, setNotificacoes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const API_URL = 'http://localhost:3001'
    useEffect(() => {
        fetch(`${API_URL}/empresas/${decoded.id}/notificacoes`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setNotificacoes(data);
                setCarregando(false);
            })
            .catch(err => {
                console.error("Erro ao listar notificações: ", err);
                setCarregando(false);
            });
    }, []);
    if (carregando) return <Loading></Loading>
    return (
        <div className="rounded-5 pagina-ativa p-3">
            <div className="rounded-4 bg-white p-3 d-flex flex-column justify-content-end">
                <div className="d-flex justify-content-end align-items-center border-bottom pb-2">
                    <div className="form-control searchvaga p-3 rounded-5 d-flex ">
                        <i className="bi bi-search pe-3 opacity-50"></i>
                        <input type="text" style={{ all: 'unset' }} placeholder="Buscar..." />

                    </div>
                </div>

                {notificacoes.map((n, index) => (
                    <div
                        key={index}
                        className="d-flex flex-wrap justify-content-between align-items-center py-3 border-bottom px-0 px-sm-5"
                    >
                        <div className="d-flex align-items-center gap-2 col-12 col-sm-10">
                            <input type="checkbox" className="form-check-input" />
                            <span className="p-2 px-sm-4 py-sm-0 text-black">
                                {n.mensagem}
                            </span>
                        </div>
                        <span className="text-muted col-12 col-sm-2 text-black text-center opacity-75" style={{ fontSize: '0.875rem' }}>
                            {new Date(n.criado_em).toLocaleString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}

                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}