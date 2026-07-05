export default function Menu() {
  const groups = [
    ["De la cocina", ["Camarón", "Pulpo", "Pescado"]],
    ["Tacos", ["Pescado", "Camarón", "Gobernador", "Toro", "Pulpo borracho"]],
    ["Infantil", ["Hamburguesa de pollo", "Arrachera con papas", "Nugget de pollo/pescado"]],
    ["Especialidades de La Esquina del Mar", ["Torre marisquera", "Tridente de aguachiles", "Salmón de la casa", "Aguachile de arrachera"]],
    ["Postre del día", ["Pregunta por la nieve del día"]],
    ["Servicio a domicilio", ["Pide directo por WhatsApp"]],
  ];
  return (
    <section className="section menu-section" id="menu">
      <p className="eyebrow">Menú digital</p>
      <h2>Nuestro menú, como carta marina de la casa.</h2>
      <div className="menu-board">
        <div className="menu-stamp">La Esquina del Mar · Mariscos</div>
        {groups.map(([title, items]) => <div className="menu-group" key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}><span>{item}</span><b>◆</b></li>)}</ul></div>)}
      </div>
    </section>
  );
}
