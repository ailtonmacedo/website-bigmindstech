import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <a href="mailto:hello@bigmindstech.com.br">
          <Button>
            Entre em Contato
            <ArrowRight />
          </Button>
        </a>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-30"></div>
          </div>
          <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground/80">
                Revolucionando <br />
                <span className="text-primary">IA & Dados</span> para Negócios
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                Criamos soluções de inteligência artificial e produtos de dados que impulsionam negócios escaláveis e inovadores.
              </p>
              <div className="mt-10">
                <a href="mailto:hello@bigmindstech.com.br">
                  <Button size="lg">
                    Vamos Conversar
                    <ArrowRight />
                  </Button>
                </a>
              </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            AI • Data • Digital Products | ©2025 BigMinds Tech
          </p>
        </div>
      </footer>
    </div>
  );
}
