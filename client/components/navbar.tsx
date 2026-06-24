import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Features", href: "#" },
  { label: "Benefits", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Contact Us", href: "#" },
];

export function Navbar() {
  return (
    <header className="w-full py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-[#F5ECE7] px-6 py-4">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-[#F97316]"
        >
          Dooyt
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button className="rounded-xl bg-black px-6 text-white hover:bg-black/90">
          Request A Demo
        </Button>
      </nav>
    </header>
  );
}