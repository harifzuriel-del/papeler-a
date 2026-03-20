// @ts-nocheck
import React from "react";

export default function PapeleriaWeb() {
  const phoneNumber = "5215610682047";

  /** @param {string} msg */
  const createWhatsAppLink = (msg) =>
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", background: "#f3f4f6" }}>
      <h1>Papelería PaperMaker</h1>

      <h2>Impresiones y útiles al instante</h2>
      <p>Entrega rápida • Precios económicos • Atención por WhatsApp</p>

      <a href={createWhatsAppLink("Hola, quiero impresiones")} target="_blank">
        <button>Pedir por WhatsApp</button>
      </a>

      <hr />

      <h3>Productos</h3>
      <ul>
        <li>
          Cuadernos
          <a href={createWhatsAppLink("Quiero cuadernos")} target="_blank">
            <button>Comprar</button>
          </a>
        </li>
        <li>
          Plumas
          <a href={createWhatsAppLink("Quiero plumas")} target="_blank">
            <button>Comprar</button>
          </a>
        </li>
        <li>
          Impresiones
          <a href={createWhatsAppLink("Quiero impresiones")} target="_blank">
            <button>Comprar</button>
          </a>
        </li>
      </ul>

      <hr />

      <h3>Deja tu reseña</h3>
      <p>Si te gustó el servicio, déjanos una reseña y recibe descuento</p>

      <a href="https://g.page/r/XXXX/review" target="_blank">
        <button>Dejar reseña en Google</button>
      </a>

      <a href={createWhatsAppLink("Quiero dejar una reseña")}
         target="_blank">
        <button>Enviar reseña por WhatsApp</button>
      </a>

      <hr />

      <h3>Contacto</h3>
      <p>Tel: 55 1234 5678</p>
      <p>Ciudad de México</p>
    </div>
  );
}
