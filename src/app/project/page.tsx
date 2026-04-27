"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Link2,
  Lock,
} from "lucide-react";

/* ===================== Types ===================== */

type Project = {
  title: string;
  summary: string;
  stack: string[];
  images: string[];
  highlights: string[];
  links?: { demo?: string; github?: string };
};

/* ===================== Data ===================== */

const PROJECTS: Project[] = [
  {
    title: "E-Office PDAM System",
    summary:
      "Sistem digitalisasi persuratan untuk meningkatkan efisiensi alur kerja, disposisi, dan pelacakan dokumen antar unit.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind"],
    images: [
      "/projects/eoffice/1.jpg",
      "/projects/eoffice/2.jpg",
      "/projects/eoffice/3.jpg",
      "/projects/eoffice/4.jpg",
      "/projects/eoffice/5.jpg",
      "/projects/eoffice/6.jpg",
    ],
    highlights: [
      "Manajemen surat masuk & keluar lengkap dengan histori aksi",
      "Disposisi berantai dengan tracking status",
      "Arsip digital + pencarian cepat (full-text)",
      "Agenda & buku tamu terintegrasi",
      "Role-based access control + audit trail",
      "Laporan rekap PDF/CSV",
      "Standarisasi dokumen & template",
      "Integrasi modul layanan pelanggan (opsional)",
    ],
  },

  {
    title: "Asset Management & Accounting System",
    summary:
      "Sistem pengelolaan aset terintegrasi dengan akuntansi untuk memonitor siklus hidup aset dan laporan keuangan.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    images: [
      "/projects/asset/1.jpg",
      "/projects/asset/2.jpg",
      "/projects/asset/3.jpg",
      "/projects/asset/4.jpg",
    ],
    highlights: [
      "Manajemen master data aset & kategori",
      "Gudang & transaksi stok (IN/OUT/transfer)",
      "Penyusutan otomatis (straight-line)",
      "Jurnal & integrasi ke General Ledger",
      "Monitoring nilai buku & laporan aset",
      "Manajemen piutang & pembayaran pelanggan",
      "Dashboard analitik & laporan periodik",
      "Audit trail untuk setiap transaksi",
    ],
  },

  {
    title: "Invoice Management System",
    summary:
      "Aplikasi pengelolaan invoice untuk membuat, mengirim, dan memonitor status pembayaran klien.",
    stack: ["Next.js", "Express", "TypeScript"],
    images: [
      "/projects/invoice/1.jpg",
      "/projects/invoice/2.jpg",
    ],
    highlights: [
      "Pembuatan invoice fleksibel",
      "Pengiriman email otomatis (PDF)",
      "Tracking status pembayaran",
      "Manajemen klien",
      "Dashboard ringkas",
    ],
  },

  {
    title: "Event Ticketing Platform",
    summary:
      "Platform ticketing event dengan fitur pencarian, pembelian, dan validasi tiket berbasis QR.",
    stack: ["Next.js", "Express", "TypeScript"],
    images: [
      "/projects/ticketing/1.jpg",
      "/projects/ticketing/2.jpg",
    ],
    highlights: [
      "Discovery & filter event",
      "Checkout & pembayaran",
      "Voucher & promo",
      "QR ticket validation",
      "Review & rating",
    ],
  },

  {
    title: "Company Profile Landing Page",
    summary:
      "Website profil perusahaan dengan desain modern untuk kebutuhan branding dan presentasi bisnis.",
    stack: ["React", "Tailwind"],
    images: [
      "/projects/company/1.jpg",
      "/projects/company/2.jpg",
    ],
    highlights: [
      "Landing page modern & responsive",
      "Section lengkap (hero, produk, tim)",
      "CTA & branding",
      "Optimasi performa",
    ],
  },
];

/* ===================== Animations ===================== */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/* ===================== Page ===================== */

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="w-full max-w-[120rem] mx-auto px-6 pt-24 pb-10">
        <h1 className="text-4xl font-bold">Projects Showcase</h1>
        <p className="text-slate-400 mt-2">
          Beberapa sistem yang saya bangun untuk kebutuhan pembelajaran dan implementasi dunia nyata.
        </p>
      </section>

      <section className="w-full max-w-[120rem] mx-auto px-6 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}

/* ===================== Card ===================== */

function ProjectCard({ project: p }: { project: Project }) {
  const [idx, setIdx] = React.useState(0);
  const total = p.images.length;

  const onPrev = () => setIdx((i) => (i - 1 + total) % total);
  const onNext = () => setIdx((i) => (i + 1) % total);

  return (
    <motion.article
      variants={item}
      className="group rounded-2xl border border-white/10
      bg-gradient-to-b from-slate-900/60 to-slate-950/80
      transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
    >
      {/* CAROUSEL */}
      <div className="relative overflow-hidden">
        <div className="relative w-full aspect-[21/9]">
          <div
            className="absolute inset-0 flex transition-all duration-500 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {p.images.map((src, i) => (
              <div key={i} className="relative w-full flex-shrink-0">
                <Image
                  src={src}
                  alt={p.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {total > 1 && (
          <>
            <button onClick={onPrev} className="absolute left-2 top-1/2 -translate-y-1/2">
              <ChevronLeft />
            </button>
            <button onClick={onNext} className="absolute right-2 top-1/2 -translate-y-1/2">
              <ChevronRight />
            </button>

            <div className="absolute bottom-2 inset-x-0 flex justify-center gap-2">
              {p.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-6 bg-cyan-400" : "w-3 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{p.summary}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="text-xs px-2 py-1 bg-white/5 border rounded">
              {s}
            </span>
          ))}
        </div>

        <ul className="mt-4 text-sm text-slate-300 space-y-1">
          {p.highlights.map((h) => (
            <li key={h}>• {h}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}