import { SiteJsonLd } from "@/components/seo/JsonLd";
import { SiteShell } from "@/components/site/SiteShell";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteJsonLd />
      <SiteShell>{children}</SiteShell>
    </>
  );
}
