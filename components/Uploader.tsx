"use client";
import { useState } from "react";

export default function Uploader({ onUpload }: any) {
  const [file, setFile] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Selecciona un archivo");

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

   try {
  // 🔥 MODO DEMO (para que funcione en Vercel)
  onUpload(file.name);

  alert("Archivo listo (modo demo) 🚀");
} catch (error) {
      console.error(error);
      alert("Error al subir archivo");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="file"
        onChange={(e: any) => setFile(e.target.files[0])}
        className="text-sm"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-xl"
      >
        {loading ? "Subiendo..." : "Subir archivo"}
      </button>
    </div>
  );
}