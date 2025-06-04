import Link from "next/link";

export default function CardVaga({ vaga }) {
    return (
        <div className="card" >
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="mb-2">

                    <h5 className="card-title">{vaga.titulo}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{vaga.localizacao}</h6>
                    <p className="card-text">
                        {vaga.descricao}
                    </p>
                </div>
                <div className="d-flex flex-column">
                    <p className="card-text">Remuneração: {parseFloat(vaga.remuneracao).toLocaleString("pt-BR", { style: "currency", currency: 'brl' })}</p>
                    <p className="card-text">Carga Horária: {vaga.carga_horaria}</p>
                    <p className="card-text">Tipo: {vaga.tipo}</p>
                    <p className="card-text">Distância: {(vaga.distancia_km).replace('.', ',')} km</p>
                    <Link href={`/vagas/${vaga.id}`} className="btn btn-primary mt-2">Ver Detalhes</Link>
                </div>
            </div>
        </div>

    )
}