export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M12 2a4 4 0 0 0-4 4v2c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V6a4 4 0 0 0-4-4z" />
        <path d="M12 12v2" />
        <path d="M16 14a4 4 0 1 1-8 0" />
        <path d="M18 18a2 2 0 1 1-4 0" />
        <path d="M6 18a2 2 0 1 0 4 0" />
      </svg>
      <div className="flex flex-col">
        <span className="font-headline text-lg font-bold leading-none">BigMinds</span>
        <span className="text-xs font-light tracking-widest text-primary/80">TECH</span>
      </div>
    </div>
  );
}
