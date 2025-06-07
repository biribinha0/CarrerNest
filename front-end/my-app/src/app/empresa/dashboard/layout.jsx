"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Loading from '@/app/loading';
import Sidebar from "@/components/EmpresaDashboardComponents/Sidebar";
import "./dashboard.css";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    const API_URL = "http://localhost:3001";
    const [usuario, setUsuario] = useState(null);
    const [page, setPage] = useState('Dashboard');
    const [carregando, setCarregando] = useState(true);
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login/empresa");
            return;
        }

        const decoded = jwtDecode(token);
        if (decoded.cargo !== 'empresa') {
            router.push('/empresa');
        }

        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem("token");
            alert('Seu Login Expirou.');
            router.push('/login/candidato');
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

        const rotaParaPagina = {
            notificacoes: 'Notificações',
            vagas: 'Vagas',
            candidatos: 'Candidatos',
            configuracoes: 'Configurações'
        };

        for (const key in rotaParaPagina) {
            if (pathName.includes(key)) {
                setPage(rotaParaPagina[key]);
                break;
            }
        }

    }, []);

    if (carregando) return <Loading />;
    if (!usuario) return null;

    const handleLogout = () => {
        localStorage.clear();
        router.push('/');
    };

    return (
        <div className="d-flex flex-column flex-md-row min-vh-100 w-100">
            <Sidebar page={page} setPage={setPage} />

            <main className="flex-grow-1 bg-light p-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center flex-wrap gap-3 col-5">
                        <img src={usuario.logo} alt={`Logo da empresa ${usuario.nome}`} className="empresa-logo img-fluid" />
                        <div className="dropdown">
                            <button
                                className="btn btn-empresa dropdown-toggle"
                                type="button"
                                id="empresaDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {usuario.nome}
                                <i className="bi bi-caret-down-fill seta-dropdown ps-2"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="empresaDropdown">
                                <li>
                                    <Link className="dropdown-item" href={'/empresa/dashboard/configuracoes'}>
                                        <i className="bi bi-pencil pe-2"></i> Editar perfil
                                    </Link>
                                </li>
                                <li>
                                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right pe-2"></i> Sair
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link href={'/empresa/dashboard/vagas/criar'} className="btn btn-criar rounded-5 d-flex align-items-center px-3 shadow mt-3 mt-md-0">
                        <i className="bi bi-plus-circle-fill fs-5 pe-2"></i>Criar
                    </Link>
                </div>

                <h3 key={page} className="fw-bold mb-4 pagina-titulo">{page}</h3>

                <div className="active-page-container">
                    {children}
                </div>
            </main>
        </div>
    );
}
