import { Button } from '@/components/ui/button';
import { Brain } from '@/components/ui/brain';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-primary"
          >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22" />
            <path d="M14.5 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 2.5 2.5" />
            <path d="M9 12h6" />
          </svg>
          <span className="text-xl font-bold">BigMinds Tech</span>
        </div>
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
