import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cami Lamboglia Studio | Marketing Digital & Creatividad",
  description: "Tu Partner Estratégico en Marketing Digital. Ayudamos a marcas a ordenar, profesionalizar y potenciar su presencia digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
