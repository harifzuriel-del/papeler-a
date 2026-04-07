import express from "express";
import multer from "multer";

const app = express();
const port = 4000;

// Configuración de subida local
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log("Archivo recibido:", req.file);
  res.json({ status: "OK", file: req.file });
});

app.listen(port, () => console.log(`Servidor de prueba corriendo en http://localhost:${port}`));