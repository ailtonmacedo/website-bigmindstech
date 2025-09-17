import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen p-4 text-center bg-background text-foreground">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold md:text-7xl">
          Revolucionando IA & Dados para Negócios
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80">
          BigMinds Tech cria soluções de IA e dados, rápidas, seguras e escaláveis para impulsionar o seu negócio.
        </p>
        <div className="mt-8">
          <a href="mailto:hello@bigmindstech.com.br">
            <Button size="lg">
              Entre em Contato
              <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
      <footer className="absolute bottom-8 text-center text-sm text-foreground/60">
        <p>AI • Data • Digital Products | ©2025 BigMinds Tech</p>
      </footer>
    </main>
  );
}