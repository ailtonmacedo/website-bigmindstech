import { Brain } from '@/components/ui/brain';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full h-screen min-h-screen overflow-hidden bg-gradient-to-br from-[#6891C9] to-[#7FA7D4] text-foreground">
      <Brain />
      
      <div className="absolute top-8 left-8 text-xs font-light text-foreground/65 pointer-events-none">
        <p>UX/UI & 3D Interaction</p>
      </div>

      <div className="absolute top-8 right-8 text-right text-xs font-light text-foreground/65 pointer-events-none">
        <p>AI • Data • Digital Products</p>
        <p>©2025</p>
      </div>
      
      <div className="absolute bottom-8 left-8 text-left max-w-[200px] text-sm">
        <p className="font-light">
          Soluções de IA e dados, rápidas, seguras e escaláveis.
        </p>
      </div>

      <div className="absolute bottom-8 right-8 text-right text-sm">
        <a href="mailto:hello@bigmindstech.com.br" className="transition-opacity hover:opacity-80">
          hello@bigmindstech.com.br
        </a>
        <p className="mt-2 text-xs opacity-70">Built with Spline</p>
      </div>
    </main>
  );
}
