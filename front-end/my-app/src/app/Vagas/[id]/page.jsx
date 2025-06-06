import { use } from 'react';
import Banner from '@/components/corPerfil/page';
import Styles from './page.module.css';

export default function VagaDetalhePage({ params }) {

    const { id } = use(params);

    const url = 'http://localhost:3001';

    const vagaData = use(fetch(`${url}/vagas/${id}`).then(res => res.json()));
    const empresaData = use(fetch(`${url}/empresas/${vagaData.empresa_id}`).then(res => res.json()));


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

        return "agora mesmo";
    };


    return (
        <div className="container-fluid mt-3">
            <div className="banner mb-3">
                <Banner imageUrl={empresaData.logo} />
            </div>


            <div className="container vagainfo mt-5">
                <div className="fileira d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <h1 className="vaga">{vagaData.titulo}</h1>

                    <p className={`${Styles.id} m-0`}>{vagaData.id}</p>
                </div>
                <p className="empresa m-0">{empresaData.nome}</p>

                <div className="fileira d-flex align-items-center justify-content-between flex-column flex-md-row">
                    
                    <div className={`${Styles.localhora} d-flex gap-3`}>
                        <p className="local m-0">{vagaData.localizacao}</p>
                        <span className="m-0">•</span>
                        <p className="hora m-0">{calcularTempoRelativo(vagaData.criada_em)}</p>
                    </div>

                    <button className={Styles.aplicar}>Aplicar</button>

                </div>

                <div className="sobreEinformacoes container-fluid p-0 m-0 d-flex gap-5 mt-5 flex-column flex-md-row">

                    <div className={`${Styles.Containermaior} container p-5 col-md-8`}>
                        <div className="sobreVaga">
                            <h1 className={Styles.sobrevagaTitles}>Sobre o trabalho</h1>
                            <p className="descricao">{vagaData.descricao}</p>
                        </div>

                        <h1 className={Styles.sobrevagaTitles}>Responsabilidades</h1>

                        <div className="descricaoResponsa">
                            {vagaData.atividades && (
                                <ul>
                                    {JSON.parse(vagaData.atividades).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <h1 className={Styles.sobrevagaTitles}>Oferecemos</h1>
                        <div className="beneficiosdescricao">
                            <p>{vagaData.beneficios}</p>
                        </div>
                    </div>

                    <div className={`${Styles.informacoes} container p-4 col-md-3`}>

                        <div className="salario">
                            <p className={`${Styles.mediaSalario} m-0`}>R$ {vagaData.remuneracao}</p>
                            <p className={Styles.media}>Media salarial</p>
                        </div>

                        <div className="container meio p-5 d-flex flex-column gap-3">

                            <div className="meio data d-flex gap-3">
                                <i className={`${Styles.icon} bi bi-folder2-open d-flex align-items-center`}></i>
                                <div className="titles">
                                    <p className={`${Styles.titlemiddle} m-0 fw-bold`}>{JSON.parse(vagaData.requisitos)[1]}</p>
                                    <p className={`${Styles.subtitlemiddle} m-0`}>Conhecimento</p>
                                </div>
                            </div>

                            <div className="meio data d-flex gap-3">
                                <i className= {`${Styles.icon}bi bi-house d-flex align-items-center`}></i>
                                <div className="titles">
                                <p className={`${Styles.titlemiddle} m-0 fw-bold`}>{vagaData.tipo}</p>
                                <p className={`${Styles.subtitlemiddle} m-0`}>Modelo de vaga</p>
                            </div>
                            </div>

                            <div className="meio data d-flex gap-3">
                                <i className={`${Styles.icon} bi bi-translate d-flex align-items-center`}></i>
                                <div className="titles">
                                <p className={`${Styles.titlemiddle} m-0 fw-bold`}>{vagaData.tipo}</p>
                                <p className={`${Styles.subtitlemiddle} m-0`}>Idioma</p>
                            </div>
                            </div>


                            <div className="meio data d-flex gap-3">
                                <i className={`${Styles.icon} bi bi-person-standing d-flex align-items-center`}></i>
                                <div className="titles">
                                <p className={`${Styles.titlemiddle} m-0 fw-bold`}>{vagaData.tipo}</p>
                                <p className={`${Styles.subtitlemiddle} m-0`}>Função</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="container-fluid p-0 m-0 d-flex gap-5 mt-5 flex-column flex-md-row">
                    <div className={`${Styles.Containermaior} container p-5 col-md-8`}>
                        <h1 className={Styles.sobrevagaTitles}>Sobre a empresa</h1>
                        <div className="nameLogo d-flex align-items-center gap-3 mt-5">
                            <img src={empresaData.logo} alt="" className={Styles.logoImagem} />
                            <h1 className={`${Styles.empresaNome} m-0`}>{empresaData.nome}</h1>
                        </div>
                        <p className="descricao m-0 d-flex align-items-center mt-5">
                            {empresaData.descricao}
                        </p>
                    </div>

                    <div className={`${Styles.informacoes} container p-4 col-md-3`}>
                        <div className="ultimasVagas">
                        <h1 className={Styles.sobrevagaTitles}>Últimas vagas</h1>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
}
