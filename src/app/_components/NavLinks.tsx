"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return navLinks.map((link) => {
    const isActive = pathname.startsWith(link.href);

    return (
      <Link
        key={link.href}
        href={link.href}
        className={isActive ? "underline font-bold" : ""}
      >
        {link.label}
      </Link>
    );
  });
}
