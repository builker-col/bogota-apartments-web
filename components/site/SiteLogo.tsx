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
        className="h-10 sm:h-11 w-auto"
        priority
      />
    </Link>
  );
}
