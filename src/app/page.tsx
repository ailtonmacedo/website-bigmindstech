import { Button } from '@/components/ui/button';
import { Brain } from '@/components/ui/brain';
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

      <main className="flex-grow flex items-center">
        <div className="relative w-full h-[calc(100vh-10rem)]">
          <Brain />
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
