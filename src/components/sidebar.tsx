import { internal_urls } from "@/constants/internal-urls";
import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href={internal_urls.home}>
        <Image
          src="/logo.png"
          alt="logo"
          width={90}
          height={39}
          className="object-contain"
        />
      </Link>
      <DottedSeparator className="my-4" />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
    </aside>
  );
};
