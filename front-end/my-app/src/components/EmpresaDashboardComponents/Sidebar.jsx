import Link from "next/link";

export default function Sidebar({ setPage, page }) {
    return (
        <div className="col-12 col-sm-4 col-md-3 col-xl-3 col-xxl-2 bg-preto py-5 px-4 side-bar vh-md-100 shadow">
            <Link href={'/'} className="d-flex align-items-center justify-content-center mb-4">
                <div className="col-2 col-sm-5">
                    <img src="/img/icons/micrologo.png" alt="micrologo" className="img-fluid" />
                </div>
                <h5 className="mb-0 mt-2 mt-sm-3 px-2">CarrerNest</h5>
            </Link>
            <div className="d-flex flex-column">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item mb-2">
                        <Link
                        className={`nav-link w-100 text-start ${page == 'Dashboard' ? 'active' : ''} `}
                        onClick={() => setPage('Dashboard')}
                        href={'/empresa/dashboard/'}
                        >
                            <i className="bi bi-display me-2" /> Dashboard
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link
                        className={`nav-link w-100 text-start ${page == 'Notificações' ? 'active' : ''} `}
                        onClick={() => setPage('Notificações')}
                        href={'/empresa/dashboard/notificacoes'}
                        >
                            <i className="bi bi-bell me-2" /> Notificações
                        </Link>
                    </li>
                </ul>
                <div className="mt-4 small text-white opacity-50 d-block">
                    <p className="recrutamento m-0">Recrutamento</p>
                </div>
                <ul className="nav nav-pills flex-column mt-2">
                    <li className="nav-item mb-2">
                        <Link
                        className={`nav-link w-100 text-start ${page == 'Vagas' ? 'active' : ''} `}
                        onClick={() => setPage('Vagas')}
                        href={'/empresa/dashboard/vagas'}
                        >
                            <i className="bi bi-briefcase me-2" /> Vagas
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link
                        className={`nav-link w-100 text-start ${page == 'Candidatos' ? 'active' : ''} `}
                        onClick={() => setPage('Candidatos')}
                        href={'/empresa/dashboard/candidatos'}
                        >
                            <i className="bi bi-people me-2" /> Candidatos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        className={`nav-link w-100 text-start ${page == 'Configurações' ? 'active' : ''} `}
                        onClick={() => setPage('Configurações')}
                        href={'/empresa/dashboard/configuracoes'}
                        
                        >
                            <i className="bi bi-gear me-2" /> Configurações
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}