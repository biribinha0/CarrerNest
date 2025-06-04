"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';
import Sidebar from "@/components/EmpresaDashboardComponents/Sidebar";
import "./dashboard.css"
import Link from "next/link";


export default function DashboardLayout({ children }) {
    const API_URL = "http://localhost:3001";
    const [usuario, setUsuario] = useState(null);
    const [page, setPage] = useState('Dashboard')
    const [carregando, setCarregando] = useState(true);
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const token = localStorage.getItem("token");

        //redirecionar se não estiver logado
        if (!token) {
            router.push("/login/empresa");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            if (decoded.cargo !== 'empresa') {
                router.push('/empresa');
            }

            if (decoded.exp < Date.now() / 1000) {
                localStorage.removeItem("token");
                alert('Seu Login Expirou.')
                router.push('/login/candidato')
            }

            const id = decoded.id;

            fetch(`${API_URL}/empresas/${id}`)
                .then(res => res.json())
                .then(data => {
                    setUsuario(data);
                    setCarregando(false);
                })
                .catch(err => {
                    console.error("Erro ao buscar usuário: ", err);
                    setCarregando(false);
                });


            pathName.includes('notificacoes') ? setPage('Notificações') :
                pathName.includes('vagas') ? setPage('Vagas') :
                    pathName.includes('candidatos') ? setPage('Candidatos') :
                        pathName.includes('configuracoes') ? setPage('Configurações') : '';
        } catch (error) {
            console.error("Token inválido:", error);
            localStorage.removeItem("token");
            router.push("/login/empresa");
        }
    }, []);



    if (carregando) return <Loading></Loading>;
    if (!usuario) return null;

    const handleLogout = () => {
        localStorage.clear();
        router.push('/')
    };

    return (
        <div className="container-fluid mx-auto">
            <div className="row d-flex flex-wrap px-sm-4 px-md-5">
                <Sidebar page={page} setPage={setPage}></Sidebar>
                <div className="col-12 col-sm-8 col-md-9 col-xl-9 col-xxl-10 py-5 shadow">
                    <div className="row px-4 content-area">
                        <div className="empresa-user d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center mb-3 dropdown">
                            <div className="d-flex d-md-block mb-3 mb-md-0 justify-content-center justify-content-md-start flex-wrap">
                                <img src={usuario.logo} alt={`Logo da empresa ${usuario.nome}`} className="img-fluid empresa-logo " />

                                <button
                                    className="btn btn-empresa dropdown-toggle px-2 mx-2"
                                    type="button"
                                    id="empresaDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {usuario.nome}
                                    <i className="bi bi-caret-down-fill seta-dropdown"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="empresaDropdown" >
                                    <li>
                                        <Link className="dropdown-item" href={'/empresa/dashboard/configuracoes'}>
                                            <i className="bi bi-pencil pe-2"></i> Editar perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="dropdown-item text-danger" onClick={handleLogout}>
                                            <i className="bi bi-box-arrow-right pe-2"></i>  Sair
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Link className="btn btn-criar rounded-5 d-flex align-items-center px-3 shadow" href={'/empresa/dashboard/vagas/criar'}>
                                    <i className="bi bi-plus-circle-fill fs-5 pe-2"></i>Criar
                                </Link>
                            </div>
                        </div>  
                        <div className="titulo-container d-block">
                            <h3 key={page} className="pagina-titulo fw-bold m-0 pb-1">
                                {page}
                            </h3>
                        </div>
                    </div>
                    <div className="row px-4 py-5 active-page-container">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}