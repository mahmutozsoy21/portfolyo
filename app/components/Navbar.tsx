"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const navItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımda", href: "about" },
    { label: "Projeler", href: "projects" },
    { label: "İletişim", href: "contact" },
];

export default function Navbar({ pathname }: { pathname: string }) {
    const [open, setOpen] = useState(false);

    const resolveHref = (section: string) => {
        if (section === "/") return "/";
        return pathname === "/" ? `#${section}` : `/#${section}`;
    };

    return (
        <header className="border-b border-gray-800 sticky top-0 z-40 bg-black/30 backdrop-blur-md">
            <nav className="max-w-5xl mx-auto flex justify-between items-center p-4 relative">

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white transition"
                    onClick={() => setOpen(!open)}
                    aria-label="Menüyü aç"
                >
                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* LOGO */}
                <Link
                    href="/"
                    className="flex items-center gap-2 mt-4 hover:opacity-80 hover:scale-105 transition"
                >
                    <img
                        src="/images/logomm.png"
                        alt="Mahmut Özsoy Logo"
                        width={120}
                        height={120}
                    />
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex ml-auto gap-8 text-lg uppercase tracking-wider font-semibold">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={resolveHref(item.href)}
                                className="
                  relative px-1 pb-1
                  text-zinc-300 hover:text-zinc-100 transition rounded
                  after:absolute after:left-1 after:right-1 after:bottom-0
                  after:h-2 after:rounded-b-full
                  after:bg-zinc-300/40 after:blur
                  after:opacity-0 hover:after:opacity-90
                "
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden border-t border-gray-800 bg-black/90 backdrop-blur">
                    <ul className="flex flex-col items-center gap-6 py-6">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={resolveHref(item.href)}
                                    onClick={() => setOpen(false)}
                                    className="text-zinc-300 hover:text-zinc-100 transition text-lg"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
