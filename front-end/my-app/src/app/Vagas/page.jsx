"use client";
import Styles from "./page.module.css";
import { useState, useEffect } from "react";
import Select from "react-select";
import Card from "@/components/CardVagas/Card";
import SweetPagination from "sweetpagination";
import "./vagas.css";

export default function ExplorarVagas() {
  const [cidades, setCidades] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cidadesRes = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios");
        const cidadesData = await cidadesRes.json();
        setCidades(cidadesData.slice(0, 645));

        const vagaRes = await fetch("http://localhost:3001/vagas");
        const vagaData = await vagaRes.json();
        setVagas(vagaData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const selectStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#f1f1f1",
      borderColor: "#ccc",
      boxShadow: "none",
      height: "50px",
      fontSize: "16px",
      borderRadius: "8px",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#f0f0f0" : "white",
      color: "black",
      fontSize: "16px",
    }),
  };

  return (
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

                <div className="img d-flex justify-content-center align-items-center pt-5">
                    <img src="./img/banner/vagasbanner.png" alt="Banner de Vagas" className="img-fluid" width="80%" />
                </div>



                <div className="filters container p-5">
                    <div className="row gx-4 gy-3">
                        <div className="col-12 col-md-6">
                            <form className="w-100">
                                <label className="mb-2">Nível de ensino</label>
                                <select className={Styles.select}>
                                    <option value="todos">Todos</option>
                                    <option value="EF">Ensino Fundamental</option>
                                    <option value="EM">Ensino Médio</option>
                                    <option value="Tecnico">Técnico</option>
                                    <option value="Superior">Superior</option>
                                </select>
                            </form>
                        </div>

                        <div className="col-12 col-md-6">
                            {cidades.length === 0 ? (
                                <p>Carregando cidades...</p>
                            ) : (
                                <form className="w-100">
                                    <label className="mb-2">Cidade</label>
                                    <Select
                                        options={cidades.map((cidade) => ({
                                            value: cidade.nome,
                                            label: cidade.nome,
                                        }))}
                                        styles={selectStyles}
                                        isSearchable
                                    />
                                </form>
                            )}
                        </div>

                        <div className="col-12 col-md-6">
                            <form className="w-100">
                                <label className="mb-2">Área</label>
                                <select className={Styles.select}>
                                    <option value="todos"></option>
                                    <option value="EF">Professor(a)</option>
                                    <option value="EM">Desenvolvedor(a)</option>
                                    <option value="Tecnico">Engenheiro(a) de software</option>
                                    <option value="Superior"></option>
                                </select>
                            </form>
                        </div>

                        <div className="col-12 col-md-6">
                            <form className="w-100">
                                <label className="mb-2">Código</label>
                                <div className="d-flex flex-wrap gap-3">
                                    <input type="text" className={Styles.selectVagas} />
                                    <button className={`${Styles.button} fw-bold`}>Filtrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



                <div className="vagas container d-flex justify-content-center align-items-center flex-wrap gap-3 my-5">
                    <Card vagas={currentPageData} />
                </div>
                <hr />
                <div className="pagination my-5 d-flex align-items-center justify-content-center">
                <SweetPagination
                 currentPageData={setCurrentPageData}
                dataPerPage={6}
                getData={vagas}
                navigation={true}
                getStyle={'style-custom'} 
                />
                </div>

            </div>
    );
}
