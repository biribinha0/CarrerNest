import "./home.css";
import VagasHome from "@/components/VagasHome/VagasHome.jsx"

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="textoleft col-12 col-md-6">
            <p>Cadastre seu currículo no portal e tenha acesso a milhares de oportunidades de estágio e emprego!</p>
            <button className="found btn btn-primary text-align-start" type="submit">
              Encontrar minha vaga!
            </button>
          </div>

          <div className="col-12 col-md-6">
            <img src="/img/banner/banner1.png" className="img-fluid mt-4" alt="..." />
          </div>
        </div>
        <div className="p-3 mt-5">
          <h2 className="fw-bold">Comece sua carreira pela <span>CareerNest</span></h2>
        </div>
        {/* input de pesquisa de vagas */}
        <div className="search-container container-fluid d-flex justify-content-center py-2">
          <form className="position-relative">
            <input type="text" name="" placeholder="Encontre sua vaga dos sonhos" className="input" />
            <button type="submit" className="buttonSearch">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* <cardHome /> */}
        {/* <div className="container d-flex flex-wrap py-4">
          <VagasHome />
        </div> */}

        <div className="p-3 mt-5">
          <h2 className="fw-bold">Cadastre-se gratuitamente!</h2>
          <h4>aproveite essa <span>oportunidade</span> imperdível!</h4>
        </div>
        <div className="timeline container position-relative">
          <div className="linha-vertical-topo"></div>
          <div className="linha-central-horizontal"></div>
          <div className="linha-vertical-base"></div>

          {/* box1 */}
          <div className="row align-items-center my-5 timeline-item">
            <div className="col-12 col-md-6 position-relative img-container">
              <div className='fundo-image'></div>
              <img className="apresentacao img-fluid rounded-4 position-relative " src='./img/apresentacao/imagem-1.png' alt="Estudante" />
            </div>
            <div className="col-12 col-md-6 bg-branco p-4 rounded-3">
              <h3 className="fw-bold text-teal">
                Faça o <span className="text-warning">seu</span> futuro
              </h3>
              <p>
                Estagiar é a chance de aprender na prática, crescer profissionalmente e abrir portas.
                Dê o primeiro passo agora e construa o seu caminho.
              </p>
            </div>
          </div>

          {/* box2 */}
          <div className="row align-items-center my-5 timeline-item">
            <div className="col-12 col-md-6 position-relative img-container">
              <div className='fundo-image'></div>
              <img className="apresentacao img-fluid rounded-4 position-relative " src='./img/apresentacao/imagem-2.png' alt="Estudante" />
            </div>
            <div className="col-12 col-md-6 bg-branco p-4 rounded-3">
              <h3 className="fw-bold text-teal">
                Faça o <span className="text-warning">seu</span> futuro
              </h3>
              <p>
                Estagiar é a chance de aprender na prática, crescer profissionalmente e abrir portas.
                Dê o primeiro passo agora e construa o seu caminho.
              </p>
            </div>
          </div>
          {/* box3 */}
          <div className="row align-items-center my-5 timeline-item">
            <div className="col-12 col-md-6 position-relative img-container">
              <div className='fundo-image'></div>
              <img className="apresentacao img-fluid rounded-4 position-relative " src='./img/apresentacao/imagem-3.png' alt="Estudante" />
            </div>
            <div className="col-12 col-md-6 bg-branco p-4 rounded-3">
              <h3 className="fw-bold text-teal">
                Faça o <span className="text-warning">seu</span> futuro
              </h3>
              <p>
                Estagiar é a chance de aprender na prática, crescer profissionalmente e abrir portas.
                Dê o primeiro passo agora e construa o seu caminho.
              </p>
            </div>
          </div>
          {/* box4 */}
          <div className="row align-items-center my-5 timeline-item">
            <div className="col-12 col-md-6  position-relative img-container">
              <div className='fundo-image'></div>
              <img className="apresentacao img-fluid rounded-4 position-relative" src="./img/apresentacao/imagem-4.png" alt="estudante" />
            </div>
            <div className="col-12 col-md-6 bg-branco p-4 rounded-3">
              <h3 className="fw-bold text-teal text-md-center">
                Dê o primeiro passo para <span className="text-warning">conquistar</span> a vaga dos seus sonhos
              </h3>
              <ul className="text-md-justify">
                <dd><i className="checklist bi bi-check-circle-fill"></i> Cadastro gratuito</dd>
                <dd><i className="checklist bi bi-check-circle-fill"></i> Boletim com vagas abertas</dd>
                <dd><i className="checklist bi bi-check-circle-fill"></i> Acesso com vagas exclusivas</dd>
                <dd><i className="checklist bi bi-check-circle-fill"></i> Vagas remuneradas</dd>
              </ul>
              <button className="found btn btn-primary text-align-start" type="submit">
                Encontrar minha vaga!
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* cards do portal */}
      <div className="container">
        <div className="p-3 mt-5">
          <h2 className="fw-bold"> Oque você procura? Escolha um de nossos portais</h2>
          <p className="subtitulopage align-items-center text-center">A <span>CareerNest</span> oferece soluções para estudantes e empresas!! Escolha abaixo o portal ideal para a sua necessidade</p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-4 mb3 mb-sm-0 d-flex justify-content-center align-items-center">
            <div className="cardPortal card text-bg-transparent " style={{ width: 300, border: 'none' }} >
              <img src="./img/portalEmpresa.png" className="card-img" alt="..." />
              <div className="card-img-overlay d-flex flex-column-reverse">
                <h5 className="titulocard card-title">Portal Empresa</h5>
              </div>
            </div>
          </div>
          <div className="col-4 mb3 mb-sm-0 d-flex justify-content-center align-items-center">
            <div className="cardPortal card text-bg-transparent " style={{ width: 300, border: 'none' }} >
              <img src="./img/portalCandidato.png" className="card-img" alt="..." />
              <div className="card-img-overlay d-flex flex-column-reverse">
                <h5 className="titulocard card-title">Portal Estudante</h5>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}