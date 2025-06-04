import './Header.css'
import Link from "next/link";


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg color-light">
            <div className="container-fluid d-flex m-1 text-center">
                <a className="logo navbar-brand" href="/">
                    <img
                        className="logo navbar-brand"
                        src="/img/icons/logo.png"
                        alt="..."
                        width={90}
                        height={95}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navitems collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item p-2">
                            <Link className="headertitulao nav-link fw-bold" aria-current="page" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="headertitulao nav-link fw-bold" aria-current="page" href="/empresa">
                                Empresas
                            </Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="headertitulao nav-link fw-bold" aria-current="page" href="/sobre">
                                Sobre Nós
                            </Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="headertitulao nav-link fw-bold" href="/ExplorarVagas">
                                Explorar vagas
                            </Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="headertitulao nav-link fw-bold" href="/contato">
                                Contato
                            </Link>
                        </li>
                       
                    </ul>
                    <ul className='navbar-nav list-unstyled d-flex justify-content-end login-container'>
                         <li className=" nav-item p-2">
                            <Link className="headertitulao nav-link fw-bold py-2 px-3 rounded-top-3 candidato-link " href="/login/candidato">
                            Sou candidato
                            </Link>
                        </li>
                        <li className=" nav-item p-2">
                            <Link className="headertitulao nav-link fw-bold py-2 px-3 rounded-top-3 empresa-link" href="/login/empresa">
                            Sou empresa
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}