"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const techStack = ["Next.js", "TypeScript", "Prisma", "Tailwind"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// 🔥 PROOF BASED (REAL EXPERIENCE)
const proofItems = [
  {
    title: "💼 Pengalaman Project Nyata",
    desc: "Mengembangkan sistem CRM Sales untuk kebutuhan internal perusahaan, termasuk fitur approval, tracking aktivitas, dan notifikasi realtime.",
  },
  {
    title: "⚙️ Fullstack Development",
    desc: "Membangun frontend (React) dan backend (Python Django & Golang), serta mengelola integrasi API antar sistem.",
  },
  {
    title: "🧩 Problem Solving",
    desc: "Mengimplementasikan fitur kompleks seperti geolocation, attendance berbasis kamera, dan workflow approval berbasis role.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-cyan-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full top-20 left-10 animate-pulse" />
      </div>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, saya{" "}
            <span className="text-cyan-600">Aulia Permana</span> 👋
          </h1>

          <p className="text-sm text-cyan-600 font-medium mb-4">
            Building Real-World Business Systems (CRM, ERP, Internal Tools)
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
            Saya seorang{" "}
            <span className="font-semibold text-cyan-600">
              Fullstack Developer
            </span>{" "}
            yang fokus pada pengembangan sistem bisnis. Saya telah mengembangkan
            beberapa project seperti{" "}
            <span className="font-semibold">
              manajemen aset, e-office, dan sistem keuangan
            </span>{" "}
            sebagai penguatan kemampuan teknis, dan saat ini terlibat dalam{" "}
            <span className="font-semibold">
              pengembangan CRM Sales di lingkungan perusahaan
            </span>{" "}
            untuk kebutuhan sistem dunia nyata.
          </p>

          {/* TECH BADGE */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-200"
            >
              Lihat Studi Kasus
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              Tentang Saya
            </Link>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Currently building CRM Sales System • Open to opportunities
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-600/50 via-cyan-400/40 to-transparent blur-md" />

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-2 ring-cyan-500/30 shadow-2xl">
              <Image
                src="/aul.jpg"
                alt="Aulia Permana"
                fill
                priority
                quality={90}
                className="object-cover object-[center_12%]"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-10" />

      {/* 🔥 PROOF SECTION (UPDATED) */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 pb-20"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {proofItems.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 
              bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-sm 
              transition-all duration-300 
              hover:shadow-cyan-500/20 
              hover:-translate-y-2 
              hover:scale-[1.02]"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SOCIAL */}
      <motion.div
        className="flex justify-center gap-6 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {[
          {
            href: "https://github.com/permanaaul",
            icon: <Github />,
          },
          {
            href: "https://linkedin.com/in/permanaaul",
            icon: <Linkedin />,
          },
          {
            href: "mailto:permanaaulia@gmail.com",
            icon: <Mail />,
          },
          {
            href: "https://wa.me/6281261421647",
            icon: <Phone className="text-green-600" />,
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 
            hover:bg-cyan-100 dark:hover:bg-cyan-900 
            transition-all duration-200 hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </motion.div>
    </main>
  );
}