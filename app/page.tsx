"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [showBar, setShowBar] = useState(false);
  const [visitors, setVisitors] = useState(5);

  useEffect(() => {
    setTimeout(() => setShowBar(true), 2000);

    const interval = setInterval(() => {
      setVisitors((v) => v + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      fontFamily: "Arial",
      background: "linear-gradient(135deg, #eef2ff, #e0f7ec)",
      minHeight: "100vh",
      padding: "20px"
    }}>

      <div style={{
        maxWidth: "520px",
        margin: "0 auto",
        background: "white",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        animation: "fadeIn 1s ease"
      }}>

        {/* TITULO */}
        <h1 style={{ textAlign: "center" }}>
          paper🖤maker 📚
        </h1>

        <p style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "10px"
        }}>
          Impresiones rápidas ⚡ | Copias | Útiles escolares
        </p>

        {/* CONTADOR */}
        <p style={{
          textAlign: "center",
          fontSize: "13px",
          color: "red",
          marginBottom: "10px"
        }}>
          🔥 {visitors} personas viendo esta página ahora
        </p>

        {/* IMAGEN */}
        <img 
          src="/papeleria.jpg"
          style={{
            width: "100%",
            borderRadius: "15px",
            marginBottom: "15px"
          }}
        />

        {/* OFERTA */}
        <div style={{
          background: "#dcfce7",
          padding: "12px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "15px",
          fontWeight: "bold"
        }}>
          🎉 10% de descuento hoy
        </div>

        {/* RESEÑAS */}
        <div style={{
          background: "#fff7ed",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
          fontSize: "14px"
        }}>
          ⭐⭐⭐⭐⭐ “Muy rápido”<br/>
          ⭐⭐⭐⭐⭐ “Excelente servicio”<br/>
          ⭐⭐⭐⭐⭐ “Recomendado”
        </div>

        {/* SERVICIOS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginBottom: "20px"
        }}>
          {["📄 Impresiones", "📚 Copias", "✏️ Útiles", "📎 Engargolados"].map((item, i) => (
            <div key={i} style={{
              background: "#f9fafb",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "14px"
            }}>
              {item}
            </div>
          ))}
        </div>

        {/* BOTON */}
        <a
          href="https://wa.me/5215641110978?text=Hola%20quiero%20información"
          target="_blank"
        >
          <button style={{
            width: "100%",
            background: "linear-gradient(135deg, #25D366, #1ebe5d)",
            color: "white",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            marginBottom: "10px",
            cursor: "pointer",
            transition: "0.3s"
          }}>
            📲 Pedir por WhatsApp
          </button>
        </a>

        {/* LLAMADA */}
        <a href="tel:+5215641110978">
          <button style={{
            width: "100%",
            background: "#2563eb",
            color: "white",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            fontSize: "14px"
          }}>
            📞 Llamar ahora
          </button>
        </a>

      </div>

      {/* BOTON FLOTANTE */}
      {showBar && (
        <a
          href="https://wa.me/5215641110978?text=Hola%20quiero%20información"
          target="_blank"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#25D366",
            color: "white",
            padding: "15px 25px",
            borderRadius: "50px",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}
        >
          💬 Escríbenos ahora
        </a>
      )}

      {/* ANIMACION */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

    </div>
  );
}