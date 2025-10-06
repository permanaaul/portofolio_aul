"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-cyan-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, saya <span className="text-cyan-600">Aulia Permana</span> 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
  Saya Aulia Permana, seorang <span className="font-semibold">Fullstack Developer</span> 
  yang menguasai pengembangan <span className="font-semibold">frontend</span> dan 
  <span className="font-semibold"> backend</span>. Dengan pengalaman membangun aplikasi 
  berbasis <span className="font-semibold">Next.js, React, dan Node.js</span>, saya terbiasa 
  menggabungkan <span className="font-semibold">UI/UX yang rapi</span> dengan sistem backend 
  yang <span className="font-semibold">handal</span>. Portofolio ini saya siapkan sebagai bukti 
  kemampuan saya dalam mengerjakan project nyata secara profesional.
</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition"
            >
              Lihat Project
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Tentang Saya
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
  className="flex-1 flex justify-center md:justify-end"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  <div className="relative">
    {/* gradient ring */}
    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-600/50 via-cyan-400/40 to-transparent blur-md" />
    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-2 ring-cyan-500/30 shadow-2xl">
  <Image
    src="/aul.jpg"
    alt="Aulia Permana"
    fill
    priority
    sizes="(min-width: 768px) 24rem, 18rem"
    className="object-cover object-[center_12%] select-none"
  />
</div>
  </div>
</motion.div>
      </section>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/permanaaul"
          target="_blank"
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition"
        >
          <Github />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/permanaaul"
          target="_blank"
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition"
        >
          <Linkedin />
        </a>

        {/* Gmail */}
        <a
          href="mailto:permanaaulia@gmail.com"
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition"
        >
          <Mail />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6281261421647" 
          target="_blank"
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 transition"
        >
          <Phone className="text-green-600" />
        </a>
      </motion.div>
    </main>
  );
}
