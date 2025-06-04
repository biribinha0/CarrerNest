"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';
import CandidatoVagas from "@/components/CandidatoDashboard/CandidatoVagas";
import CandidatoCandidaturas from "@/components/CandidatoDashboard/CandidatoCandidaturas";
import "./dashboard.css"

export default function CandidatoDashboard({ params }) {
    const API_URL = "http://localhost:3001";
    const [usuario, setUsuario] = useState(null);
    const [pagina, setPagina] = useState('vagas')
    const [carregando, setCarregando] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const p = searchParams.get("pagina");
        if(p) {
            setPagina(p)
        }
    }, [searchParams])

    useEffect(() => {
        const token = localStorage.getItem("token");

        //redirecionar se não estiver logado
        if (!token) {
            router.push("/login/candidato");
            return;
        }



        try {
            const decoded = jwtDecode(token);

            if (decoded.cargo !== 'candidato') {
                router.push('/');
            }

            if (decoded.exp < Date.now() / 1000) {
                localStorage.removeItem("token");
                alert('Seu Login Expirou.')
                router.push('/login/candidato')
            }

            const id = decoded.id;


            fetch(`${API_URL}/candidatos/${id}`)
                .then(res => res.json())
                .then(data => {
                    setUsuario(data);
                    setCarregando(false);
                })
                .catch(err => {
                    console.error("Erro ao buscar usuário: ", err);
                    setCarregando(false);
                });
        } catch (error) {
            console.error("Token inválido:", error);
            localStorage.removeItem("token");
            router.push("/login/candidato");
        }
    }, []);

    if (carregando) return <Loading></Loading>;
    if (!usuario) return null;

    

    const saudacao = usuario.genero === "Feminino" ? "a" : "o";

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push('/')
    }
    return (
        <div className="container mx-auto py-5">
            <div className="row d-flex flex-wrap-reverse">
                <div className="col-12 col-md-9">
                    <h1>Dashboard do <span className="txt-laranja">Candidato</span></h1>
                    <h3>
                        Seja bem-vind{saudacao}, <span className="candidato-nome">{usuario.nome}</span>
                    </h3>
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-end">
                    <div className="p-3">
                        <button type="button" className="btn-sair px-4 py-2 rounded-3" onClick={() => handleLogout()}>
                            Sair <i className="bi bi-box-arrow-right ps-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="pagina-container d-flex w-100 gap-3 pt-4 px-2">
                <button type="button" className={`btn-pagina px-3 py-1 rounded-top-3 ${pagina == 'vagas' ? 'ativo' : 'inativo'}`} onClick={() => setPagina('vagas')}>Vagas</button>
                <button type="button" className={`btn-pagina px-3 py-1 rounded-top-3 ${pagina == 'candidaturas' ? 'ativo' : 'inativo'}`} onClick={() => setPagina('candidaturas')}>Candidaturas</button>
            </div>
            <div className="row page-container pt-4 px-2 rounded-2 d-flex flex-wrap">
                {pagina == 'vagas' && <CandidatoVagas></CandidatoVagas>}
                {pagina == 'candidaturas' && <CandidatoCandidaturas></CandidatoCandidaturas>}
            </div>
        </div>
    );
}
