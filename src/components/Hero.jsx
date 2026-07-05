import { business } from "../data";

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Marisquería de esquina · Colonia Americana</p>
        <h1>La esquina donde Guadalajara se encuentra con el mar.</h1>
        <p className="hero-text">Ven por tacos, aguachiles, camarón, pulpo, pescado y especialidades preparadas con el estilo fresco de La Esquina del Mar.</p>
        <div className="button-row">
          <a className="btn btn-primary" href="#menu">Ver menú</a>
          <a className="btn btn-coral" href={business.whatsapp} target="_blank" rel="noreferrer">Pedir por WhatsApp</a>
          <a className="btn btn-light" href={business.maps} target="_blank" rel="noreferrer">Cómo llegar</a>
        </div>
      </div>
      <div className="corner-card" aria-label="Terraza urbana costera">
        <div className="awning">Bienvenida a la esquina del mar</div>
        <div className="terrace-photo"><img src="/hero.jpg" alt="Fachada y terraza de La Esquina del Mar" /></div>
        <div className="chalkboard"><span>Tacos · Aguachiles · Mariscos</span></div>
      </div>
      <span className="shell shell-one">✹</span><span className="shell shell-two">🦐</span>
    </header>
  );
}
