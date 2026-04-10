"use client";

import { useState } from "react";
import { 
  MessageCircle, Phone, FileText, Copy, Printer, Scissors, PenTool, Sticker, UploadCloud, Image, BookOpen, 
  Facebook, Instagram, Twitter 
} from "lucide-react";
import Uploader from "@/components/Uploader";

export default function Page() {
  const [uploadedFile, setUploadedFile] = useState("");

  const whatsappLink = (message: string) => {
    const fullMessage = uploadedFile
      ? `${message}\n📎 Archivo: ${uploadedFile}`
      : message;
    return `https://wa.me/5215641110978?text=${encodeURIComponent(fullMessage)}`;
  };

  const services = [
    { name: "Impresiones", icon: Printer, msg: "Hola, quiero imprimir un archivo." },
    { name: "Copias", icon: Copy, msg: "Hola, necesito copias." },
    { name: "Escaneo", icon: FileText, msg: "Hola, quiero escanear documentos." },
    { name: "Tareas", icon: BookOpen, msg: "Hola, necesito ayuda con una tarea." },
    { name: "Diseño", icon: PenTool, msg: "Hola, quiero un diseño." },
    { name: "Stickers", icon: Sticker, msg: "Hola, quiero stickers personalizados." },
    { name: "Encuadernado", icon: Scissors, msg: "Hola, quiero encuadernar documentos." },
    { name: "Laminado", icon: Image, msg: "Hola, quiero laminar documentos." },
    { name: "Sellos personalizados", icon: PenTool, msg: "Hola, quiero un sello personalizado." },
    { name: "Papelería escolar", icon: BookOpen, msg: "Hola, quiero material escolar." },
    { name: "Recargas de tinta", icon: UploadCloud, msg: "Hola, quiero recargar tinta o tóner." },
    { name: "Paquetería y mensajería", icon: FileText, msg: "Hola, quiero enviar un paquete." },
    { name: "Sublimado en tazas", icon: Image, msg: "Hola, quiero sublimar una taza." },
    { name: "Sublimado en playeras", icon: Image, msg: "Hola, quiero sublimar una playera." },
    { name: "Sublimado en gorras", icon: Image, msg: "Hola, quiero sublimar una gorra." },
    { name: "Recarga de celular", icon: Phone, msg: "Hola, quiero hacer una recarga de celular." },
    { name: "Pago de servicios", icon: FileText, msg: "Hola, quiero pagar un servicio." },
    { name: "Creación de páginas web", icon: PenTool, msg: "Hola, quiero una página web." },
    { name: "Trámite de documentos oficiales", icon: FileText, msg: "Hola, quiero tramitar documentos oficiales." },
    { name: "Asesoría en inversiones de bolsa", icon: BookOpen, msg: "Hola, quiero asesoría en inversiones de bolsa." },
    { name: "Impresión de credenciales", icon: Printer, msg: "Hola, quiero imprimir credenciales." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex relative">

      {/* LOGO SUPERIOR IZQUIERDA */}
      <div className="fixed top-4 left-4 z-50">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide cursor-pointer transform transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
          paper<span className="text-red-600">🖤</span>maker
        </h1>
      </div>

      {/* PANEL LATERAL */}
      <aside className="hidden md:flex flex-col fixed top-20 left-0 h-[calc(100%-5rem)] w-64 bg-black/70 border-r border-white/10 p-6 gap-4 z-20 rounded-tr-3xl rounded-br-3xl">
        <h2 className="text-xl font-bold mb-4">📄 Panel</h2>
        <nav className="flex flex-col gap-3">
          <a href="#servicios" className="hover:text-green-400 transition">Servicios</a>
          <a href="#trabajos" className="hover:text-green-400 transition">Trabajos</a>
          <a href="#precios" className="hover:text-green-400 transition">Precios</a>
          <a href="#pedido" className="hover:text-green-400 transition">Pedido</a>
        </nav>
        <div className="mt-auto">
          <a href={whatsappLink("Hola, quiero hacer un pedido")} target="_blank">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-3 rounded-2xl w-full font-bold">
              🚀 Pedido rápido
            </button>
          </a>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 p-6 md:ml-72">

        {/* HERO */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">Imprime sin hacer fila 📄</h1>
          <p className="text-gray-400 mt-4 text-lg">Mándanos tu archivo por WhatsApp y recógelo en minutos ⚡</p>
          <p className="text-green-400 text-sm mt-2">⚡ Respuesta en menos de 5 minutos</p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a href={whatsappLink("Hola, quiero imprimir. Aquí está mi archivo:")} target="_blank">
              <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                <MessageCircle /> Enviar por WhatsApp
              </button>
            </a>
            <a href="tel:+5215641110978">
              <button className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                <Phone /> Llamar
              </button>
            </a>
          </div>
        </div>

        {/* ENCABEZADO MODELO */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-500 via-green-400 to-green-500/70 p-12 rounded-3xl shadow-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">📄 Tu papelería express, sin filas</h2>
          <p className="text-white/90 text-lg md:text-xl">
            Sube tu archivo, elige tu servicio y recógelo en minutos. Impresión, copias, laminado y más, todo en un solo lugar.
          </p>
          <div className="mt-6">
            <a href={whatsappLink("Hola, quiero hacer un pedido")} target="_blank">
              <button className="bg-black/80 hover:bg-black/90 px-10 py-5 rounded-2xl text-xl font-bold text-green-400 transition-transform duration-200 hover:scale-105">
                🚀 Haz tu pedido ahora
              </button>
            </a>
          </div>
        </div>

        {/* TRABAJOS RECIENTES */}
        <div className="mt-16" id="trabajos">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🖼️ Trabajos Recientes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[ "/trabajo1.jpg","/trabajo2.jpg","/trabajo3.jpg","/trabajo4.jpg","/trabajo5.jpg","/trabajo6.jpg","/trabajo7.jpg","/trabajo8.jpg" ].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transform transition duration-200 cursor-pointer">
                <img src={src} alt={`Trabajo ${i + 1}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* SUBIDA DE ARCHIVOS */}
        <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
          <h2 className="text-xl font-bold mb-4">📤 Sube tu archivo</h2>
          <p className="text-gray-400 mb-4">Sube tu archivo aquí para imprimirlo sin enviar mensajes</p>
          <Uploader onUpload={setUploadedFile} />
        </div>

        {/* SERVICIOS */}
        <div className="mt-16" id="servicios">
          <h2 className="text-2xl font-bold mb-6 text-center">📄 Nuestros Servicios</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <a key={i} href={whatsappLink(s.msg)} target="_blank" className="transform transition duration-200 hover:scale-105">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center gap-2 hover:bg-white/10 cursor-pointer">
                    <Icon className="w-10 h-10 text-green-400" />
                    <span className="font-semibold">{s.name}</span>
                    <p className="text-green-400 text-sm mt-1">Pedir ahora →</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* PRECIOS */}
        <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl text-center" id="precios">
          <h2 className="text-xl font-bold mb-4">💰 Precios</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <p>📄 Blanco y negro: desde $1</p>
            <p>🎨 Color: desde $5</p>
            <p>⚡ Urgente: +$10</p>
            <p>📑 Encuadernado: desde $15</p>
            <p>💎 Laminado: desde $10</p>
            <p>🖊️ Sellos personalizados: desde $50</p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 text-center" id="pedido">
          <a href={whatsappLink("Hola, quiero hacer un pedido")} target="_blank">
            <button className="bg-green-500 hover:bg-green-600 px-10 py-5 rounded-2xl text-xl font-bold transition-transform duration-200 hover:scale-105">
              🚀 Hacer pedido ahora
            </button>
          </a>
        </div>

        {/* UBICACIÓN */}
        <div className="mt-16 text-center bg-white/5 border border-white/10 p-6 rounded-3xl" id="ubicacion">
          <h2 className="text-xl font-bold mb-4">📍 Nuestra Ubicación</h2>
          <p className="text-gray-400 mb-4">Ven a visitarnos o recoge tu pedido en nuestra oficina.</p>
          <div className="w-full aspect-video md:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15030.027135298405!2d-99.09001900000001!3d19.648373!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1775618028003!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=19.64837339768598,-99.09001923748058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-2xl transition-transform duration-200 hover:scale-105"
          >
            🚗 Cómo llegar
          </a>
        </div>

        {/* REDES SOCIALES */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            En <span className="text-green-400 font-semibold">Paper🖤Maker</span> estamos para ti: imprimimos, copiamos y resolvemos tus necesidades de papelería rápido y sin complicaciones. 💌 Tu satisfacción es nuestra prioridad.
          </p>
          <h2 className="text-xl font-bold mb-4 mt-8">🔗 Síguenos en redes sociales</h2>
          <div className="flex justify-center gap-6 text-3xl">
            <a href="https://facebook.com/tu_pagina" target="_blank" className="text-blue-600 hover:text-blue-800 transition">
              <Facebook />
            </a>
            <a href="https://instagram.com/tu_pagina" target="_blank" className="text-pink-500 hover:text-pink-700 transition">
              <Instagram />
            </a>
            <a href="https://twitter.com/tu_pagina" target="_blank" className="text-blue-400 hover:text-blue-600 transition">
              <Twitter />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}