"use client"
import { useEffect, useState, use } from "react";
import { jwtDecode } from "jwt-decode";
import { SP } from "next/dist/shared/lib/utils";
import CardCandidato from "@/components/CardCandidato/CardCandidato";

export default function Vaga({ params }) {
    const { id } = use(params);
    const [vaga, setVaga] = useState([]);
    const [candidatos, setCandidatos] = useState([])

    const API_URL = 'http://localhost:3001'
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        const decoded = jwtDecode(token);

        fetch(`${API_URL}/vagas/${id}`)
            .then(res => res.json())
            .then(data => setVaga(data))
            .catch(error => console.error('Erro ao buscar dados da vaga: ', error));

        fetch(`${API_URL}/candidaturas/vaga/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setCandidatos(data))
            .catch(error => console.error('Erro ao buscar candidatos da vaga: ', error));
    }, [])

    console.log(candidatos)
    return (
        <div className="rounded-5 pagina-ativa p-3 pt-0">
            <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                <div className="d-flex flex-column justify-content-between align-items-center py-4 border-bottom px-5">
                    <div className="fs-4 text-black pb-2">{vaga.titulo}</div>
                    <div className="d-flex flex-wrap px-5">

                        <span className="text-black opacity-50 pe-3">
                            <i className="bi bi-suitcase-lg-fill"></i> {vaga.tipo}
                        </span>
                        <span className="text-black opacity-50 ps-3">
                            <i className="bi bi-geo-alt-fill"></i> {vaga.localizacao}
                        </span>
                    </div>
                    <div className="row w-100  display-flex flex-wrap">

                        {Array.isArray(candidatos) && candidatos.length > 0 ? (
                            candidatos.map((candidato, index) => (
                                <div key={index} className="col-12 col-lg-6">
                                    <CardCandidato candidato_id={candidato.candidato_id} data_candidatura={candidato.data_candidatura}/>
                                </div>
                            ))) : 'Nenhum usuario se candidatou a essa vaga'}
                    </div>
                </div>
            </div>
        </div>
    )
}