
export default function EmpresaDashboard() {

    return (
        <>

            <h3>Bem-vindo de volta!</h3>
            <p>Aqui está o resumo da sua atividade recente.</p>
            <div className="rounded-5 pagina-ativa p-3">
                <div className="rounded-4 bg-white p-3 pt-0 d-flex flex-column justify-content-end">
                    <div className="container my-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div className="title-icon d-flex justify-content-between">
                                            <h5 class="card-title">Vagas Ativas</h5>
                                            <i className="bi bi-briefcase me-2 fw-bold" />
                                        </div>
                                        {/* sistema de logica q traz o numero da quantidade de VAGAS */}
                                        <h3>12</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div className="title-icon d-flex justify-content-between">
                                            <h5 class="card-title">Candidaturas</h5>
                                            <i className="bi bi-people me-2" />                                        </div>
                                        {/* sistema de logica q traz o numero da quantidade de CANDIDATURAS */}
                                        <h3>78</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Vagas Recentes</h5>
                                        <p className="card-text">Acompanhe o status das suas vagas publicadas.</p>
                                        <div className="container">
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <div className="card" >
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <h5 className="card-title">Desenvolvedor Frontend Jr.</h5>
                                                                <p>0 Candidatos</p>
                                                            </div>
                                                            <h6 className="card-subtitle mb-2 text-body-secondary">Local, Brasil</h6>
                                                            <a class="btn btn-primary" href="/empresa/dashboard/vagas" role="button">Ver Descrição</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <div className="card" >
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <h5 className="card-title">Desenvolvedor Frontend Jr.</h5>
                                                                <p>0 Candidatos</p>
                                                            </div>
                                                            <h6 className="card-subtitle mb-2 text-body-secondary">Local, Brasil</h6>
                                                            <a class="btn btn-primary" href="/dashboard/vagas" role="button">Ver Descrição</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}