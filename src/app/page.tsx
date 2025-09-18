import { InteractiveBrain } from '@/components/ui/interactive-brain';
import { Logo } from '@/components/ui/logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="absolute top-0 left-0 p-8 z-20">
        <Logo />
      </header>
      <main className="flex-grow flex items-center justify-center">
        <InteractiveBrain />
      </main>
    </div>
  );
}
