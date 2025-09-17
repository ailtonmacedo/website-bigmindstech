import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BigMinds Tech — IA, dados e produtos digitais',
  description: 'Landing minimalista com cérebro 3D interativo. BigMinds Tech cria soluções de IA e dados para negócios escaláveis.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
