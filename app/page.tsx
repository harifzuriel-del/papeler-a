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
    <div
      style={{
        fontFamily: "Arial",
        padding: "10px",
        background: "#f3f4f6",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#ffffff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          paper🖤maker 📚
        </h1>

        <p style={{ textAlign: "center", color: "#555" }}>
          Impresiones rápidas ⚡ | Copias | Útiles escolares
        </p>

        <p style={{ textAlign: "center", fontSize: "13px", color: "red" }}>
          🔥 {visitors} personas viendo esta página ahora
        </p>

        <img
          src="/papeleria.jpg"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "15px",
            marginBottom: "15px",
          }}
        />

        <div
          style={{
            background: "#dcfce7",
            padding: "12px",
            borderRadius: "12px",
            textAlign: "center",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          🎉 10% de descuento hoy
        </div>

        <div
          style={{
            background: "#fff7ed",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "15px",
          }}
        >
          ⭐⭐⭐⭐⭐ “Muy rápido” <br />
          ⭐⭐⭐⭐⭐ “Excelente servicio” <br />
          ⭐⭐⭐⭐⭐ “Recomendado”
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {["📄 Impresiones", "📚 Copias", "✏️ Útiles", "📎 Engargolados"].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#f9fafb",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/5215641110978?text=Hola%20quiero%20información"
          target="_blank"
        >
          <button
            style={{
              background: "#25D366",
              color: "white",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              width: "100%",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            📲 Pedir por WhatsApp
          </button>
        </a>

        <a href="tel:+5215641110978">
          <button
            style={{
              width: "100%",
              background: "#2563eb",
              color: "white",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            📞 Llamar ahora
          </button>
        </a>
      </div>

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
          }}
        >
          💬 Escríbenos ahora
        </a>
      )}
    </div>
  );
}