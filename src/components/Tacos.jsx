import { tacos } from "../data";

export default function Tacos() {
  return <section className="section tacos" id="tacos"><div><p className="eyebrow">Tacos de la esquina</p><h2>Pescado, camarón, gobernador y pulpo para llegar sin complicarte.</h2></div><div className="taco-strip">{tacos.map((taco) => <article key={taco}><span>🌮</span><h3>{taco}</h3></article>)}</div></section>;
}
