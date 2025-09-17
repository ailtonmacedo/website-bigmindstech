import { Button } from '@/components/ui/button';
import { InteractiveBrain } from '@/components/ui/interactive-brain';
import { Logo } from '@/components/ui/logo';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-background/50 backdrop-blur-sm">
        <Logo />
        <Button asChild>
          <a href="mailto:contato@bigmindstech.com.br">
            <Mail />
            Contato
          </a>
        </Button>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <InteractiveBrain />
      </main>
    </div>
  );
}
