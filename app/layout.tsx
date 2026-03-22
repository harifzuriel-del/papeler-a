export const metadata = {
  title: "Papelería",
  description: "Servicios de papelería",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}