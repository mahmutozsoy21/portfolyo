"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Web Geliştirme",
        icon: "🌐",
        description:
            "Modern, hızlı ve SEO uyumlu web uygulamaları geliştiriyorum.",
    },
    {
        title: "Mobil Uygulama Geliştirme",
        icon: "📱",
        description:
            "Flutter ile iOS ve Android için performanslı mobil uygulamalar.",
    },
    {
        title: "Görüntü İşleme",
        icon: "👁️",
        description:
            "Nesne tespiti ve görüntü analizi çözümleri.",
    },
    {
        title: "Makine Öğrenmesi",
        icon: "🤖",
        description:
            "Veri odaklı makine öğrenmesi çözümleri.",
    },
    {
        title: "Derin Öğrenme",
        icon: "🧠",
        description:
            "CNN ve YOLO tabanlı derin öğrenme sistemleri.",
    },
];

export default function Services() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12"
                >
                    Hizmetler
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            custom={index * 0.15}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="
                relative rounded-xl p-6
                border border-gray-800
                bg-black/40 backdrop-blur
                hover:bg-emerald-400/20
                hover:border-emerald-400
                transition-all duration-300
              "
                        >
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
