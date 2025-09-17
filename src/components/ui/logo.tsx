import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://cdn.prod.website-files.com/651b1566bd6b4efe80b1ec85/65b1652d80d249b6c16139b5_Bigminds-logo-branco.svg"
        alt="BigMinds Tech Logo"
        width={150}
        height={44}
        className="h-8 w-auto"
        priority
      />
    </div>
  );
}
