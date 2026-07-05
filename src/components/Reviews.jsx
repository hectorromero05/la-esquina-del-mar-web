import { business } from "../data";
export default function Reviews() {
  return <section className="section reviews"><p className="eyebrow">Reseñas</p><h2>{business.rating} estrellas en Google Maps</h2><div className="review-card"><div className="stars">★★★★★</div><p><strong>{business.reviews} reseñas.</strong> Un lugar nuevo/local con muy buena calificación.</p></div></section>;
}
