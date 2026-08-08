"use client";

import { useState } from "react";

const links = [
  { href: "#fleet", label: "Nos Quads" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#gallery", label: "Galerie" },
  { href: "#how-it-works", label: "Comment ça marche" },
  { href: "#faq", label: "FAQ" },
  { href: "#reservation", label: "Réserver" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold text-orange-700">
          🏍️ Elta Quad
        </a>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-orange-700">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#reservation"
          className="hidden md:inline-block bg-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-800"
        >
          Réserver
        </a>

        <button
          className="md:hidden text-2xl"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-orange-700"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
