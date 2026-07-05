import { business } from "../data";
export default function Footer() { return <footer><h3>{business.name}</h3><p>{business.phone}</p><p>{business.address}</p><p><a href={business.maps} target="_blank" rel="noreferrer">Google Maps</a> · <a href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></p><small>Menú y precios sujetos a disponibilidad.</small></footer>; }
