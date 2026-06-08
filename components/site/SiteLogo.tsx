import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        src="/img/logo.png"
        alt="Bogotá Apartments"
        width={1669}
        height={475}
        className="h-8 sm:h-10 md:h-11 w-auto max-w-[9.5rem] sm:max-w-[12rem] md:max-w-none object-contain object-left"
        priority
      />
    </Link>
  );
}
