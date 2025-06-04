"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';
import Link from "next/link";
import CardVaga from "../CandidatoDashboardComponents/CardVaga";

export default function CandidatoVagas() {

    const API_URL = "http://localhost:3001";
    const [vagas, setVagas] = useState([]);
    const [carregando, setCarregando] = useState(true);


    useEffect(() => {

        const token = localStorage.getItem("token")

        const decoded = jwtDecode(token);


        fetch(`${API_URL}/vagas/distancia/${decoded.id}`, {
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
                console.error("Erro ao buscar vagas: ", err);
                setCarregando(false);
            });
    }, [])

    if (carregando) return <Loading></Loading>;

    return (
        <div>

            <h1>Vagas</h1>
            {
                vagas && vagas.length > 0 ? (
                    <div className="row mt-4 d-flex flex-wrap justify-content-center row-gap-5">

                        {vagas.map((v, index) => (
                            <div className="col-12 col-sm-8 col-md-4 col-lg-3 px-3 m-0 d-flex justify-content-center" key={index}>
                                <CardVaga vaga={v}></CardVaga>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <h3>Nenhuma vaga disponível.</h3>
                        <Link className="explorar-vagas" href={'/'}>Clique aqui</Link> para ver mais vagas
                    </>
                )
            }
        </div>
    )
}