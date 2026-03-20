// @ts-nocheck
import React from "react";

export default function PapeleriaWeb() {
  const phoneNumber = "5215610682047";

  const createWhatsAppLink = (msg) =>
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <div style={{ fontFamily: "Arial", background: "#f3f4f6", padding: "20px" }}>
      
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "32px", color: "#111" }}>
          Papelería PaperMaker
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Impresiones rápidas y útiles escolares al mejor precio
        </p>

        <a href={createWhatsAppLink("Hola, quiero información")} target="_blank">
          <button style={{
            marginTop: "15px",
            padding: "12px 25px",
            background: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            💬 Pedir por WhatsApp
          </button>
        </a>
      </div>

      {/* SERVICIOS */}
      <div style={{ marginBottom: "30px" }}>
        <h2>Servicios</h2>
        <ul>
          <li>📄 Impresiones a color y blanco/negro</li>
          <li>📚 Cuadernos y útiles escolares</li>
          <li>🖊️ Plumas, lápices y más</li>
        </ul>
      </div>

      {/* PRODUCTOS */}
      <div style={{ marginBottom: "30px" }}>
        <h2>Productos destacados</h2>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          
          <div style={cardStyle}>
            <h3>Cuadernos</h3>
            <button onClick={() => window.open(createWhatsAppLink("Quiero cuadernos"))}>
              Comprar
            </button>
          </div>

          <div style={cardStyle}>
            <h3>Impresiones</h3>
            <button onClick={() => window.open(createWhatsAppLink("Quiero impresiones"))}>
              Comprar
            </button>
          </div>

          <div style={cardStyle}>
            <h3>Plumas</h3>
            <button onClick={() => window.open(createWhatsAppLink("Quiero plumas"))}>
              Comprar
            </button>
          </div>

        </div>
      </div>

      {/* RESEÑAS */}
      <div style={{ marginBottom: "30px" }}>
        <h2>⭐ Opiniones</h2>
        <p>Clientes satisfechos nos recomiendan</p>

        <a href="https://g.page/r/XXXX/review" target="_blank">
          <button style={buttonStyle}>Dejar reseña en Google</button>
        </a>
      </div>

      {/* CONTACTO */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h3>Contacto</h3>
        <p>📍 Ciudad de México</p>
        <p>📞 55 1234 5678</p>
      </div>

    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "10px",
  width: "150px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

const buttonStyle = {
  padding: "10px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};