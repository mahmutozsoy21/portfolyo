"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import projectDetails from "../projects/[slug]/page";

const projects = [
    /*{
        title: "Akıllı Ev Otomasyon Sistemi",
        slug: "akilli-ev-otomasyon-sistemi",
        shortDescription:
            "IoT ve yapay zekâ destekli, sensör verileriyle çalışan akıllı ev otomasyonu sistemi.",
        image: "/images/downlod.png",
    },*/
    {
        title: "Domates Yaprak Hastalığı Tespiti",
        slug: "domates-yaprak-hastaligi",
        shortDescription:
            "YOLOv8 ve derin öğrenme kullanılarak domates yapraklarındaki hastalıkları tespit eden yapay zekâ sistemi. Mobil ve API entegrasyonu ile gerçek zamanlı analiz.",
        image: "/images/tomato.png",
    },
    /*
        title: "CampusApp",
        slug: "campusapp",
        shortDescription:
            "Üniversite öğrencileri için kampüs, yurt ve çevre hizmetlerini tek uygulamada toplayan mobil platform. Flutter, API ve modüler mimari ile geliştirildi.",
        image: "/images/campus.png",
    */
    {
        title: "İlaç Asistan",
        slug: "ilac-asistan",
        shortDescription:
            "Karekod/GTIN tarama ile ilaç bilgilerini sunan, hasta dostu mobil uygulama. Yerel veritabanı ve yapay zekâ destekli açıklamalar içerir.",
        image: "/images/medicine.png",
    },

];

export default function ProjectsSection() {
    return (
        <section id="projects" className="space-y-10">
            <h2 className="text-3xl font-bold">Projeler</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.slug}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="border border-gray-800 rounded-xl overflow-hidden
                       hover:border-gray-600 transition"
                    >
                        <a href={`/projects/${project.slug}`}>
                            {/* Görsel */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={450}
                                height={250}
                                className="object-cover"
                            />

                            {/* İçerik */}
                            <div className="p-5 space-y-2">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    {project.shortDescription}
                                </p>

                                <span className="text-sm underline">
                                    Detayları Gör →
                                </span>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
