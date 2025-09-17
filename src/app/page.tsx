import { InteractiveBrain } from '@/components/ui/interactive-brain';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow flex items-center justify-center">
        <InteractiveBrain />
      </main>
    </div>
  );
}
