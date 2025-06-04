import { useEffect, useState } from "react"

export default function CardCandidato({ id }) {
    const API_URL = 'http://localhost:3001'
    const [candidato, setCandidato] = useState([]);
    useEffect(() => {
        fetch(`${API_URL}/candidatos/${id}`)
            .then(res => res.json())
            .then(data => setCandidato(data))
            .catch(error => console.error('Erro ao buscar dados do candidato: ', error));

    }, []);

    console.log(candidato)
    return (
        <div className="col-6 bg-cinza rounded-3">
            {candidato.nome}
        </div>
    )
}