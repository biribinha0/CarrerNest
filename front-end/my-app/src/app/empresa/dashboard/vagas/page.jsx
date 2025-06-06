"use client"
import { useState, useEffect } from "react";
import Loading from '@/app/loading';
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import ModalEditVaga from "@/components/Modal/page"

export default function Vagas() {
    const [vagas, setVagas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");


    const API_URL = 'http://localhost:3001';

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setCarregando(false);
            return;
        }
        const decoded = jwtDecode(token)
        fetch(`${API_URL}/vagas/empresa/${decoded.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
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
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }


    if (carregando) return <Loading />;

    const normalize = (str) => {
        if (!str) return "";
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };

    const listaVagas = vagas
        ? (Array.isArray(vagas) ? vagas : [vagas])
            .filter(vaga =>
                normalize(vaga.titulo).includes(normalize(searchTerm))
            )
        : '';

    console.log(listaVagas)


    return (
        <>
            <div className="d-flex justify-content-end align-items-center pb-2">
                <div className="form-control searchvaga p-3 rounded-5 d-flex ">
                    <i className="bi bi-search pe-3 opacity-50"></i>
                    <input type="text" style={{ all: 'unset' }} placeholder="Buscar..." onChange={handleSearch} />
                </div>
            </div>
            <div className="rounded-5 pagina-ativa p-3 pt-0">
                <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                    <div className="d-flex justify-content-between align-items-center py-4 border-bottom px-5">
                        <div className="d-flex align-items-center w-100 row">
                            <span className="px-4 text-black col-12 fs-4 col-md-6 text-center">
                                Vaga
                            </span>
                            <span className=" text-black col-12 fs-4 col-md-3 text-center">
                                Candidatos
                            </span>
                        </div>
                    </div>
                    {
                        listaVagas.length > 0 ? (
                            <>

                                {listaVagas.map((v, index) => (
                                    <div
                                        key={index}
                                        className="d-flex justify-content-between align-items-center py-3 border-bottom px-5"
                                    >
                                        <div className="d-flex align-items-center w-100 row">
                                            <Link
                                                className="px-4 text-black col-12 col-md-6 text-center text-sm-start"
                                                href={`/empresa/dashboard/vagas/${v.id}`}>
                                                {v.titulo}
                                            </Link>
                                            <span className="col-12 col-md-3 text-center">
                                                {v.candidatos_qntd}
                                            </span>
                                            <span className="col-12 col-md-3 text-center text-md-end">
                                                <ModalEditVaga  vaga={v} />
                                                <i className="bi bi-trash p-2 fs-5"></i>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom px-5">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="px-4 text-black">
                                        Nenhuma Vaga Encontrada  <Link className="ps-2" href={'/empresa/dashboard/vagas/criar'}>Criar Vaga</Link>
                                    </span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    )
}
