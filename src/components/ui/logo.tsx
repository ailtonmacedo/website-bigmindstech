import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://i.imgur.com/OkwSBeK.png"
        alt="Cérebro 3D"
        width={150}
        height={44}
        className="h-16 w-auto"
        priority
      />
    </div>
  );
}
