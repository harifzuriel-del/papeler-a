import { ReactNode } from "react";
import "./globals.css"; // 👈 ESTO ES LO QUE FALTA

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}