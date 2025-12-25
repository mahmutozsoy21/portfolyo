"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";




const navItems = [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Hakkımda", href: "#about" },
    { label: "Projeler", href: "#projects" },
    { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-gray-800 relative">
            <nav className="max-w-5xl mx-auto flex justify-between items-center p-4 relative">
                <button
                    className="md:hidden text-gray-300 hover:text-white transition"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>




                <ul className="hidden md:flex gap-6 text-sm">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="text-gray-400 hover:text-white transition"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full
                  bg-black/90 backdrop-blur border-t border-gray-800">
                    <ul className="flex flex-col items-center gap-6 py-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-gray-300 hover:text-emerald-400 transition text-lg"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </header>
    );
}
