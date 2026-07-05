import { business } from "../data";
export default function Location() {
  return <section className="section location" id="ubicacion"><div><p className="eyebrow">Ubicación</p><h2>Sabor costero en plena Colonia Americana.</h2><p>{business.address}</p><a className="btn btn-primary" href={business.maps} target="_blank" rel="noreferrer">Abrir en Google Maps</a></div><iframe title="Mapa de La Esquina del Mar" src="https://www.google.com/maps?q=L%C3%B3pez%20Cotilla%20C.%20Progreso%201394%20Col%20Americana%20Guadalajara%20Jalisco&output=embed" loading="lazy"></iframe></section>;
}
