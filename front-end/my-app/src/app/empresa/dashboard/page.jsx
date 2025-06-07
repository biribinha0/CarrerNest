"use client"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function EmpresaDashboard() {
    const [vagas, setVagas] = useState([]);
    const [totalCandidaturas, setTotalCandidaturas] = useState(0);
    const [carregando, setCarregando] = useState(true);

    const API_URL = 'http://localhost:3001';

    const buscarVagas = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const decoded = jwtDecode(token);
            const response = await fetch(`${API_URL}/vagas/empresa/${decoded.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await response.json();
            const lista = Array.isArray(data) ? data : [data];
            setVagas(lista);

            // Soma total de candidaturas
            const total = lista.reduce((acc, vaga) => acc + (vaga.candidatos_qntd || 0), 0);
            setTotalCandidaturas(total);

            setCarregando(false);
        } catch (err) {
            console.error("Erro ao buscar vagas: ", err);
            setCarregando(false);
        }
    };

    // Busca ao carregar e atualiza a cada 10 segundos
    useEffect(() => {
        buscarVagas(); // primeira vez
        const intervalo = setInterval(buscarVagas, 10000); // a cada 10s

        return () => clearInterval(intervalo); // limpa intervalo se componente for desmontado
    }, []);

    return (
        <>
<<<<<<< HEAD
=======

>>>>>>> d008e10f71db4ee9768002553947319c5585d2a1
            <h3>Bem-vindo de volta!</h3>
            <p>Aqui está o resumo da sua atividade recente.</p>
            <div className="rounded-5 pagina-ativa p-3">
                <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                    <div className="container my-3">
                        <div className="row">
                            <div className="col-md-6">
<<<<<<< HEAD
                                <div className="card rounded-4">
                                    <div className="card-body">
                                        <div className="title-icon d-flex justify-content-between">
                                            <h5 className="card-title">Vagas Ativas</h5>
                                            <i className="bi bi-briefcase me-2 fw-bold" />
                                        </div>
                                        <h3>{vagas.length}</h3>
=======
                                <div class="card">
                                    <div class="card-body">
                                        <div className="title-icon d-flex justify-content-between">
                                            <h5 class="card-title">Vagas Ativas</h5>
                                            <i className="bi bi-briefcase me-2 fw-bold" />
                                        </div>
                                        {/* sistema de logica q traz o numero da quantidade de VAGAS */}
                                        <h3>12</h3>
>>>>>>> d008e10f71db4ee9768002553947319c5585d2a1
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
<<<<<<< HEAD
                                <div className="card rounded-4">
                                    <div className="card-body">
                                        <div className="title-icon d-flex justify-content-between">
                                            <h5 className="card-title">Candidaturas</h5>
                                            <i className="bi bi-people me-2" />
                                        </div>
                                        <h3>{totalCandidaturas}</h3>
=======
                                <div class="card">
                                    <div class="card-body">
                                        <div className="title-icon d-flex justify-content-between">
                                            <h5 class="card-title">Candidaturas</h5>
                                            <i className="bi bi-people me-2" />                                        </div>
                                        {/* sistema de logica q traz o numero da quantidade de CANDIDATURAS */}
                                        <h3>78</h3>
>>>>>>> d008e10f71db4ee9768002553947319c5585d2a1
                                    </div>
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD

                        <div className="row my-3">
                            <div className="col-md-12">
                                <div className="card rounded-4">
                                    <div className="card-body">
                                        <h5 className="card-title">Vagas Recentes</h5>
                                        <p className="card-text">Acompanhe o status das suas vagas publicadas.</p>
                                        <div className="container">
                                            {vagas.map((vaga) => (
                                                <div key={vaga.id} className="row mb-3">
                                                    <div className="col">
                                                        <div className="vagasrecente card rounded-4">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between">
                                                                    <h5 className="card-title">{vaga.titulo}</h5>
                                                                    <p>{vaga.candidatos_qntd || 0} Candidatos</p>
                                                                </div>
                                                                <h6 className="card-subtitle mb-2 text-body-secondary">{vaga.local || 'Local, Brasil'}</h6>
                                                                <a className="btn btn-primary" href={`/empresa/dashboard/vagas/${vaga.id}`} role="button">Ver Descrição</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {vagas.length === 0 && <p className="text-center">Nenhuma vaga cadastrada.</p>}
=======
                        <div className="row my-3">
                            <div className="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Vagas Recentes</h5>
                                        <p className="card-text">Acompanhe o status das suas vagas publicadas.</p>
                                        <div className="container">
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <div className="card" >
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <h5 className="card-title">Desenvolvedor Frontend Jr.</h5>
                                                                <p>0 Candidatos</p>
                                                            </div>
                                                            <h6 className="card-subtitle mb-2 text-body-secondary">Local, Brasil</h6>
                                                            <a class="btn btn-primary" href="/empresa/dashboard/vagas" role="button">Ver Descrição</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <div className="card" >
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <h5 className="card-title">Desenvolvedor Frontend Jr.</h5>
                                                                <p>0 Candidatos</p>
                                                            </div>
                                                            <h6 className="card-subtitle mb-2 text-body-secondary">Local, Brasil</h6>
                                                            <a class="btn btn-primary" href="/dashboard/vagas" role="button">Ver Descrição</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
>>>>>>> d008e10f71db4ee9768002553947319c5585d2a1
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD

=======
>>>>>>> d008e10f71db4ee9768002553947319c5585d2a1
                    </div>
                </div>
            </div>
        </>
    );
}
