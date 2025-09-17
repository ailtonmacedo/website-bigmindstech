export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-auto text-primary"
      >
        <path d="M12 1.1c2.1 0 3.8 1.7 3.8 3.8v14.2c0 2.1-1.7 3.8-3.8 3.8S8.2 21.2 8.2 19.1V4.9c0-2.1 1.7-3.8 3.8-3.8zM25.3 1.1c2.1 0 3.8 1.7 3.8 3.8v14.2c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8V4.9c0-2.1 1.7-3.8 3.8-3.8zM2.6 12.3c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM18.1 12.3c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5z" />
        <path d="M2,12.5 C2,6 8,6 8,12.5 S2,19 8,19" stroke="none" fill="currentColor" />
        <path d="M15,12.5 C15,6 21,6 21,12.5 S15,19 21,19" stroke="none" fill="currentColor" />
         <text x="32" y="18" fontFamily="Lexend, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">BigMinds</text>
         <text x="80" y="22" fontFamily="Lexend, sans-serif" fontSize="8" fill="currentColor">Tech</text>
      </svg>
    </div>
  );
}
