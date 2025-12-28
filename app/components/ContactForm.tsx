"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);

    function validate() {
        if (!name.trim() || !email.trim() || !message.trim()) {
            setError("Lütfen ad, e-posta ve mesaj alanlarını doldurun.");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Geçerli bir e-posta adresi girin.");
            return false;
        }

        setError("");
        return true;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("subject", subject);
        formData.append("message", message);

        const res = await fetch("https://formspree.io/f/xgoeyydy", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });


        if (res.ok) {
            setSent(true);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setTimeout(() => setSent(false), 2500);
        } else {
            setError("Gönderim başarısız oldu. Lütfen tekrar deneyin.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div className="grid grid-cols-1 gap-4">

                {/* AD */}
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Adın"
                    name="name"
                    className="
            w-full px-4 py-2 rounded-lg
            bg-black/30
            border border-gray-800
            text-gray-100 placeholder-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-gray-400
            focus:border-gray-400
            transition
            hover:border-gray-300
            hover:text-gray-100
          "
                />

                {/* EMAIL */}
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresin"
                    type="email"
                    name="email"
                    className="
            w-full px-4 py-2 rounded-lg
            bg-black/30
            border border-gray-800
            text-gray-100 placeholder-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-gray-400
            focus:border-gray-400
            transition
            hover:border-gray-300
            hover:text-gray-100
          "
                />

                {/* SUBJECT */}
                <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Konu (opsiyonel)"
                    name="subject"
                    className="
            w-full px-4 py-2 rounded-lg
            bg-black/30
            border border-gray-800
            text-gray-100 placeholder-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-gray-400
            focus:border-gray-400
            transition
            hover:border-gray-300
            hover:text-gray-100
          "
                />

                {/* MESSAGE */}
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mesajınız"
                    rows={5}
                    name="message"
                    className="
            w-full px-4 py-3 rounded-lg
            bg-black/30
            border border-gray-800
            text-gray-100 placeholder-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-gray-400
            focus:border-gray-400
            resize-none
            transition
            hover:border-gray-300
            hover:text-gray-100
          "
                />
            </div>

            {error && (
                <div className="text-sm text-red-400">{error}</div>
            )}

            <div className="flex items-center gap-4">
                <button
                    type="submit"
                    className="
            inline-flex items-center gap-2
            px-6 py-2 rounded-full
            border border-gray-700
            bg-black/40 backdrop-blur
            text-gray-300
            hover:border-gray-300
            hover:text-gray-100
            hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]
            transition-all duration-300
          "
                >
                    Gönder
                </button>

                {sent && (
                    <span className="text-sm text-gray-300">
                        Mesajınız iletildi ✔
                    </span>
                )}
            </div>
        </form>
    );
}
