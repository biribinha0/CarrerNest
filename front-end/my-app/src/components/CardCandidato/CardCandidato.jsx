import { useEffect, useState } from "react"
import Styles from './CardCandidato.css';
import { set } from "react-hook-form";

export default function CardCandidato({ candidato_id, data_candidatura }) {
    const API_URL = 'http://localhost:3001'

    const [candidato, setCandidato] = useState([]);
    const [endereco, setEndereco] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch(`${API_URL}/candidatos/${candidato_id}`)
            .then(res => res.json())
            .then(data => setCandidato(data))
            .catch(error => console.error('Erro ao buscar dados do candidato: ', error));

        fetch(`${API_URL}/endereco/candidato/${candidato_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setEndereco(data))
            .catch(error => console.error('Erro ao buscar endereço do candidato: ', error));


    }, []);
    const calcularTempoRelativo = (dataISO) => {
        const data = new Date(dataISO);
        const agora = new Date();
        const diff = (agora - data) / 1000;
        const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });

        const unidades = [
            { segundos: 60 * 60 * 24 * 365, nome: "year" },
            { segundos: 60 * 60 * 24 * 30, nome: "month" },
            { segundos: 60 * 60 * 24, nome: "day" },
            { segundos: 60 * 60, nome: "hour" },
            { segundos: 60, nome: "minute" },
            { segundos: 1, nome: "second" },
        ];

        for (const { segundos, nome } of unidades) {
            const valor = Math.floor(diff / segundos);
            if (valor >= 1) {
                return rtf.format(-valor, nome);
            }
        }

        return "Aplicado hoje";
    };


    return (
        <div className="card-candidato">
            <div className="card-header">
                <img
                    src={candidato.fotoUrl || '/img/FotoUsuario.png'}
                    alt={`Foto de ${candidato.nome}`}
                    className="card-avatar"
                    width="50"
                    height="50"
                />
                <div>
                    <h6 className="card-nome">{candidato.nome}</h6>
                    <small className="card-data">{calcularTempoRelativo(data_candidatura)}</small>
                </div>
            </div>

            <hr className="card-divider" />

            <div className="card-info">
                <div>
                    <i className="bi bi-geo-alt-fill me-1"></i>
                    {endereco.cidade} - {endereco.estado}
                </div>
                <div>
                    <i className="bi bi-briefcase-fill me-1"></i>
                    {calcularTempoRelativo(candidato.criado_em)}
                </div>
            </div>
        </div>
    );

}