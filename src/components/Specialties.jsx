import { specialties } from "../data";

export default function Specialties() {
  return (
    <section className="section specialties" id="especialidades">
      <p className="eyebrow">Especialidades del mar</p>
      <h2>Aguachiles, torre y platos para compartir.</h2>
      <div className="specialty-grid">
        {specialties.map(([title, desc]) => <article className="specialty-card" key={title}><span>〜</span><h3>{title}</h3><p>{desc}</p></article>)}
      </div>
    </section>
  );
}
