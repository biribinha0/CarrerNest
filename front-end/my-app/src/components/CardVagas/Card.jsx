
import Link from 'next/link';
import Styles from "./page.module.css";

export default async function Card() {
  const API_URL = 'http://localhost:3001';
  const vagas = await fetch(`${API_URL}/vagas`).then((response) => response.json());

  return (
    <>
      {vagas.slice(0, 8).map((item, index) => (
        <div key={item.id || index} className="flex">
          <Link href={`/explorarVagas/${item.id}`}>
            <div className={`${Styles.card} d-flex flex-column justify-content-between`}>
              <div className="titles d-flex justify-content-between align-items-center">
                <h4 className={Styles.title}>{item.titulo}</h4>
                <p className={Styles.id}>{item.id}</p>
              </div>
              <hr />
              <div className="infos d-flex flex-column justify-content-center">
                <div className="info">
                    <i class={`${Styles.info} bi bi-geo-alt-fill d-flex gap-3 align-items-center`}>{item.localizacao}</i>
                    </div>
                <div className="info">
                    <i class="bi bi-currency-dollar d-flex gap-3 align-items-center">{item.remuneracao}</i>
                    </div>
                <div className="info">
                    <i class="bi bi-clock-history d-flex gap-3 align-items-center">{item.carga_horaria}</i></div>
              </div>
              <div className="botao d-flex justify-content-center align-itens-center">
              <button className={Styles.button}>Mais detalhes</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
