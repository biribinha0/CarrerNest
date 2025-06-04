"use client";
import Styles from "./page.module.css";
import { useState, useEffect } from "react";
import Select from "react-select";
import Card from "@/components/CardVagas/Card"

export default function ExplorarVagas() {
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        const fetchCidades = async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios");
            const data = await response.json();
            setCidades(data.slice(0, 645));
        };

        fetchCidades();
    }, []);

    const selectStyles = {
        control: (base) => ({
            ...base,
            backgroundColor:" #f1f1f1",
            borderColor: "#ccc",
            boxShadow: "none",
            height: "50px",
            minHeight: "50px",
            padding: "0 8px",
            fontSize: "16px",
            width: "500px",
            borderRadius: "8px",
            "&:hover": {
                borderColor: "#999",
            },
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#f0f0f0" : "white",
            color: "black",
            fontSize: "16px",
        }),
    };

    return (
        <>
            <div className="page container pt-5">
                <h2 className={`${Styles.title} fw-bold`}>Explorar vagas</h2>

                <section className="passos">
                    <h3 className="subtitle fw-bold text-center mt-5">Como conquistar sua vaga em 3 passos</h3>

                    <div className={`${Styles.steps} container d-flex justify-content-center align-items-start p-5`}>
                        <div className="step justify-content-center align-items-center d-flex flex-column">
                            <h1 className={`${Styles.number} fw-bold`}>1</h1>
                            <h4 className={`${Styles.stepText} fw-bold`}>Atualize ou preencha os seus dados</h4>
                        </div>
                        <div className="step justify-content-center align-items-center d-flex flex-column">
                            <h1 className={`${Styles.number} fw-bold`}>2</h1>
                            <h4 className={`${Styles.stepText} fw-bold`}>Filtre as oportunidades</h4>
                        </div>
                        <div className="step justify-content-center align-items-center d-flex flex-column">
                            <h1 className={`${Styles.number} fw-bold`}>3</h1>
                            <h4 className="fw-bold">Conquiste-as!</h4>
                        </div>
                    </div>
                    <hr />
                </section>

                <div className="img d-flex justify-content-center align-items-center p-5">
                    <img src="./img/banner/vagasbanner.png" alt="Banner de Vagas" className="img-fluid" width="80%" />
                </div>

                <div className="filters container d-flex flex-column gap-3 justify-content-center align-items-center">
                    <div className="d-flex gap-3 flex-wrap">
                        <form className="d-flex flex-column">
                            <label htmlFor="ensino" className="mb-2">Nível de ensino</label>
                            <select className={`${Styles.select} `}>
                                <option value="todos">Todos</option>
                                <option value="EF">Ensino Fundamental</option>
                                <option value="EM">Ensino Médio</option>
                                <option value="Tecnico">Técnico</option>
                                <option value="Superior">Superior</option>
                            </select>
                        </form>
                        {cidades.length === 0 ? (
                            <p>Carregando cidades...</p>
                        ) : (
                            <form className="d-flex flex-column">
                            <label htmlFor="ensino" className="mb-2">Cidade</label>
                                <Select
                                    options={cidades.map((cidade) => ({ value: cidade.nome, label: cidade.nome }))}
                                    styles={selectStyles}
                                    isSearchable
                                />
                            </form>
                        )}
                    </div>

                    <div className="d-flex gap-3 align-items-center flex-wrap">
                        <form className="d-flex flex-column">
                            <label htmlFor="ensino" className="mb-2">Área</label>
                            <select className={`${Styles.select} `}>
                                <option value="todos"></option>
                                <option value="EF">Professor(a)</option>
                                <option value="EM">Desenvolvedor(a)</option>
                                <option value="Tecnico">Engenheiro(a) de software</option>
                                <option value="Superior"></option>
                            </select>
                        </form>
                        <form className="d-flex flex-column">
                        <label htmlFor="ensino" className="mb-2 ">Código</label>
                        <div className="input d-flex gap-4">
                        <input type="text" className={`${Styles.selectVagas} `} />
                        <button className={`${Styles.button} fw-bold`}>Filtrar</button>
                        </div>
                        </form>
                    </div>
                </div>

                <div className="vagas container d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5">
                    <Card/>
                </div>
            </div>
        </>
    );
}
