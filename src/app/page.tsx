import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">BigMinds Tech</span>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-24">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Revolucionando IA & Dados para Negócios
            </h1>
            <p className="text-lg text-muted-foreground">
              BigMinds Tech cria soluções de IA e dados, rápidas, seguras e escaláveis para impulsionar o seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="mailto:hello@bigmindstech.com.br">
                <Button size="lg">
                  Entre em Contato
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/tech/1200/800"
              alt="Tecnologia e inovação"
              fill
              className="object-cover"
              data-ai-hint="abstract technology"
            />
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            AI • Data • Digital Products | ©2025 BigMinds Tech
          </p>
        </div>
      </footer>
    </div>
  );
}
