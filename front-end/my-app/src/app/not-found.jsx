export default function NotFound() {
    return (<>
        <div className="container-fluid ">
            <div className="container d-flex align-items-center text-justify flex-column justify-content-center p-3 my-3">
                <img src="/img/404.png" alt="" className="img-fluid" />
                <h4>A página pela qual você está procurando não existe ou não pode ser encontrada!</h4>
                <h4>Retorne para a página principal e localize-se.</h4>
            </div>
        </div>
    </>)
}