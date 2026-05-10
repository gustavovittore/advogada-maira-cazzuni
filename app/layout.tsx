import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maíra Cazzuni | Advogada Criminalista em Erechim/RS",
  description:
    "Defesa criminal estratégica, firme e humanizada em Tribunal do Júri, Execução Penal, flagrantes e ações criminais em Erechim/RS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
