"use client"
import Select from "react-select";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import CurrencyInput from 'react-currency-input-field';
import "./criarvaga.css";

export default function CriarVaga() {
    const [vaga, setVaga] = useState({
        empresa_id: '',
        titulo: '',
        descricao: '',
        atividades: '',
        requisitos: '',
        beneficios: '',
        remuneracao: '',
        carga_horaria: '',
        tipo: '',
        curso_desejado: '',
        localizacao: ''
    })
    const API_URL = 'http://localhost:3001';

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        const decoded = jwtDecode(token);

        setVaga({ ...vaga, empresa_id: decoded.id });

        fetch(`${API_URL}/endereco/empresa/${decoded.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setVaga({ ...vaga, endereco: `${data.cidade} - ${data.estado}` });
            })
            .catch(err => {
                console.error("Erro ao buscar ebdereço da empresa: ", err);
            });
    }, []);
    console.log(vaga)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setVaga((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = () => {
        const token = localStorage.getItem("token");
        fetch(`${API_URL}/vagas/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: vaga
        })
            .then(res => res.json())
            .then(data => {
                setVagas(data);
                setCarregando(false);
            })
            .catch(err => {
                console.error("Erro ao listar vagas: ", err);
                setCarregando(false);
            });
    }
    const tipos = [
        { value: "Presencial", label: "Presencial" },
        { value: "Híbrido", label: "Híbrido" },
        { value: "Remoto", label: "Remoto" }
    ];

    const cursos = [
        { value: "Análise e Desenvolvimento de Sistemas", label: "Análise e Desenvolvimento de Sistemas" },
        { value: "Banco de Dados", label: "Banco de Dados" },
        { value: "Ciência da Computação", label: "Ciência da Computação" },
        { value: "Ciência de Dados", label: "Ciência de Dados" },
        { value: "Design Digital", label: "Design Digital" },
        { value: "Desenvolvimento de Sistemas", label: "Desenvolvimento de Sistemas" },
        { value: "Engenharia da Computação", label: "Engenharia da Computação" },
        { value: "Engenharia de Produção", label: "Engenharia de Produção" },
        { value: "Engenharia de Software", label: "Engenharia de Software" },
        { value: "Estatística", label: "Estatística" },
        { value: "Publicidade e Propaganda", label: "Publicidade e Propaganda" },
        { value: "Redes de Computadores", label: "Redes de Computadores" },
        { value: "Sistemas de Informação", label: "Sistemas de Informação" },
        { value: "Sistemas para Internet", label: "Sistemas para Internet" },
        { value: "Suporte Técnico em Informática", label: "Suporte Técnico em Informática" },
        { value: "TI", label: "TI" }
    ];


    return (
        <>
            <div className="rounded-5 pagina-ativa p-3 pt-0">

                <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                    <div className="d-flex justify-content-between align-items-center py-4 border-bottom px-5 mt-2">
                        <Link
                            className=" small text-black opacity-50 d-block"
                            href={'/empresa/dashboard/vagas'}>
                            <i className="bi bi-caret-left"></i> Voltar para Vagas
                        </Link>
                        Criar Vaga
                    </div>
                    <div className="row d-flex justify-content-center p-3">
                        <h3 className="text-center pt-3">Nova Vaga</h3>
                        <div className="col-10 col-lg-10 col-xl-8 p-3 row">
                            <form className="vaga-form d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>

                                <div className="mb-3 col-12">
                                    <label htmlFor="titulo" className="form-label">Título da Vaga</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titulo"
                                        value={vaga.titulo}
                                        onChange={(e) => setVaga({ ...vaga, titulo: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="descricao" className="form-label">Descrição</label>
                                    <textarea
                                        className="form-control"
                                        id="descricao"
                                        rows="3"
                                        value={vaga.descricao}
                                        onChange={(e) => setVaga({ ...vaga, descricao: e.target.value })}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="atividades" className="form-label">Atividades</label>
                                    <textarea
                                        className="form-control"
                                        id="atividades"
                                        rows="3"
                                        value={vaga.atividades}
                                        onChange={(e) => setVaga({ ...vaga, atividades: e.target.value })}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="requisitos" className="form-label">Requisitos</label>
                                    <textarea
                                        className="form-control"
                                        id="requisitos"
                                        rows="3"
                                        value={vaga.requisitos}
                                        onChange={(e) => setVaga({ ...vaga, requisitos: e.target.value })}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="beneficios" className="form-label">Benefícios</label>
                                    <textarea
                                        className="form-control"
                                        id="beneficios"
                                        rows="2"
                                        value={vaga.beneficios}
                                        onChange={(e) => setVaga({ ...vaga, beneficios: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="d-flex w-100 flex-column flex-md-row">
                                    <div className="mb-3 col-12 col-md-6 pe-md-2">
                                        <label htmlFor="remuneracao" className="form-label">Remuneração (R$)</label>
                                        <CurrencyInput
                                            name="input-name"
                                            className="form-control"
                                            id="remuneracao"
                                            value={vaga.remuneracao}
                                            placeholder="Please enter a number"
                                            defaultValue={1000}
                                            decimalsLimit={2}
                                            onValueChange={(value, name, values) => console.log(value, name, values)}
                                            onChange={
                                                (e) => setVaga({
                                                    ...vaga, remuneracao: (e.target.value)
                                                })}
                                        />
                                    </div>

                                    <div className="mb-3 col-12 col-md-6 ps-md-2">
                                        <label htmlFor="carga_horaria" className="form-label">Carga Horária (h/semana)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="carga_horaria"
                                            value={vaga.carga_horaria}
                                            onChange={(e) => setVaga({ ...vaga, carga_horaria: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="tipo" className="form-label">Tipo da Vaga</label>
                                    <Select
                                        id="tipo"   
                                        options={tipos}
                                        placeholder="Selecione o tipo"
                                        value={tipos.find(option => option.value === vaga.tipo)}
                                        onChange={(option) => setVaga({ ...vaga, tipo: option.value })}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        required
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="curso_desejado" className="form-label">Curso Desejado</label>
                                    <Select
                                        isMulti
                                        id="curso_desejado"
                                        options={cursos}
                                        placeholder="Selecione os cursos desejados"
                                        value={cursos.find(option => option.value === vaga.curso_desejado)}
                                        onChange={(option) => setVaga({ ...vaga, curso_desejado: option.value })}
                                        required
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                </div>
                                <button className="btn btn-primary found col-8" type="submit">
                                    Criar Vaga
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
