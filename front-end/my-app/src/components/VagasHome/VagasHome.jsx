import './style.css'
export default async function VagasHome({}) {
    const API_URL = 'http://localhost:3001'
    const vagas = await fetch(`${API_URL}/vagas`)
        .then((response) => response.json());

    return (
        <div className="row d-flex">
            {vagas.map((item, index) => {
                if (index >= 8) return null
                else {
                    return (

                        <div key={index} className="col-lg-3 col-md-12 mb-4 d-flex ">
                            <div className="cardMaior card rounded-4 align-items-center">
                                <div className="corpoCard card-body d-flex flex-column justify-content-between align-items-center">
                                    <div className="titulo-vaga text-center ">
                                        <i className="iconeCard bi bi-mortarboard"></i>
                                        <p className="tituloVagaCard card-title">{item.titulo}</p>
                                    </div>
                                    <div className="detalhes-vaga pt-2">
                                        <p className='mb-1'><b>Bolsa: </b> {parseFloat(item.remuneracao).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
                                        <p><b>Localização: </b> {item.localizacao}</p>
                                    </div>
                                    <a href="#" className="botaoVaga btn btn-primary">
                                        Ver detalhes
                                    </a>
                                </div>
                            </div>
                        </div>

                    )
                }
            })}

        </div>
    )
}