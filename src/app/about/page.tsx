"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Briefcase,
  Calendar,
  Code2,
  Mail,
  MapPin,
  Phone,
  Users,
  Github,
  Linkedin,
  GraduationCap,
  Award,
  Rocket,
  Target,
  FileBadge2,
  Music,
  Cat,
  Plane,
  Dice5,
  Dumbbell,
} from "lucide-react";

/* ======================= Data (pakai punyamu) ======================= */

const PROFILE = {
  name: "Aulia Permana",
  title: "Full-stack Developer",
  location: "Padang, Sumatera Barat",
  email: "permanaaulia@gmail.com",
  whatsapp: "https://wa.me/6281261421647",
  github: "https://github.com/permanaaul",
  linkedin: "https://linkedin.com/in/permanaaul",
  photo: "/aul.jpg",
  availability: "Tersedia segera — full-time, freelance, onsite, atau remote.",
  summary:
  "Full-stack developer yang nyaman mengerjakan frontend dan backend. Saya suka membangun aplikasi yang bersih, cepat, dan mudah dirawat—dari perancangan REST API, skema database, sampai UI yang rapi. Pernah membantu memangkas waktu proses internal ±20% saat magang. Stack harian: Next.js/React, TypeScript, Node.js/Express, Prisma & MySQL, Tailwind, Git, Vercel."

};

const EDUCATIONS = [
  {
    where: "Management Science University (Malaysia)",
    degree: "BICT (Hons) — Bachelor in Information & Communication Technology",
    faculty: "Faculty of Information Sciences & Engineering",
    gpa: "IPK 3.01",
  },
  {
    where: "Politeknik Negeri Padang",
    degree: "D3 Manajemen Informatika — Fakultas Teknologi Informasi",
    gpa: "IPK 3.31",
  },
  {
    where: "Purwadhika Digital School (BSD, Tangsel)",
    degree: "Bootcamp — Full-stack Web Development",
  },
];

const SKILLS: Record<string, string[]> = {
    Languages: ["TypeScript", "JavaScript (ES6+)"],
    Frontend: ["Next.js", "React", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "REST API"],
    Database: ["MySQL", "Prisma ORM"],
    Tools: ["Vercel", "GitHub"],
    "Soft Skills": [
      "Penyelesaian Masalah",
      "Komunikasi Teknis",
      "Kolaborasi Tim",
      "Manajemen Waktu & Prioritas",
      "Adaptif & Proaktif",
      "Cepat Belajar (Growth Mindset)",
      "Teliti (Attention to Detail)",
      "Empati pada Pengguna"
    ],
  };
  
  

type TimelineItem = { period: string; title: string; org: string; points: string[] };

const TIMELINE: TimelineItem[] = [
  {
    period: "Feb 2022 – Mei 2022",
    title: "Internship — IT Engineer",
    org: "PT. Bejana Investidata Globalindo (Bandung)",
    points: [
      "Rilis fitur baru sistem internal Biofarma; waktu proses turun ±20%.",
      "Perbaikan bug kritis → deployment mulus.",
      "Kolaborasi Agile & Git; sprint lebih konsisten.",
    ],
  },
];

type Project = { title: string; summary: string; stack: string[] };

const PROJECTS: Project[] = [
  {
    title: "Manajemen Aset PDAM",
    summary:
      "Aset, penyusutan (straight line) → jurnal DR/CR ke GL, gudang & transaksi stok, export PDF/CSV.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind"],
  },
  {
    title: "E-Office PDAM",
    summary:
      "Digitalisasi surat masuk/keluar, disposisi, arsip, role, audit trail, dan rekap laporan.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind"],
  },
  {
    title: "Invoice Management App",
    summary:
      "Invoice, client tracking, kirim via Gmail (Express + Nodemailer). Respons API rata-rata < 1 detik.",
    stack: ["Next.js", "Tailwind", "Express.js", "TypeScript", "Nodemailer", "Axios"],
  },
  {
    title: "Ticketing Management App",
    summary:
      "Pencarian/penyaringan, tiket IDR, promo (voucher/referral), review & rating attendee.",
    stack: ["Next.js", "Tailwind", "Express.js", "TypeScript", "Nodemailer", "Axios"],
  },
  {
    title: "Sistem Informasi Pembinaan & Prestasi Olahraga (D3)",
    summary: "Pencatatan pembinaan & prestasi atlet Lempar Pisau & Kapak Sumbar.",
    stack: ["Laravel", "MySQL"],
  },
  {
    title: "Time Planner Android (S1)",
    summary: "Pengelolaan jadwal & pengingat harian.",
    stack: ["Android", "Java/Kotlin"],
  },
];

const CERTIFICATIONS = [
  { name: "Sertifikat Magang — IT Engineer", issuer: "PT. Bejana Investidata Globalindo", icon: <FileBadge2 className="w-4 h-4" /> },
  { name: "TOEFL NEO (Score 550)", issuer: "Spectra English Course", icon: <Award className="w-4 h-4" /> },
  { name: "Bootcamp — Full-stack Web Development", issuer: "Purwadhika Digital School", icon: <GraduationCap className="w-4 h-4" /> },
];

const HOBBIES = [
  { label: "Badminton", icon: <Dumbbell className="w-4 h-4" /> },
  { label: "Billiard", icon: <Dice5 className="w-4 h-4" /> },
  { label: "Travelling", icon: <Plane className="w-4 h-4" /> },
  { label: "Musik", icon: <Music className="w-4 h-4" /> },
  { label: "Kucing", icon: <Cat className="w-4 h-4" /> },
];

/* ======================= Animations ======================= */
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
});

/* ======================= Page ======================= */

export default function AboutPage() {
  const VISIBLE_PROJECTS = 4; // tampilkan 4 dulu biar kompak (bisa ubah ke 6)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="w-full pt-24 pb-16 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        {/* GRID 2 KOLOM PENUH */}
        <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
          {/* ========== LEFT ========== */}
          <div className="space-y-6">
            {/* Profile + contacts */}
            <motion.div {...fadeIn(0)} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-600/40 via-cyan-400/30 to-transparent blur-md" />
                  <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-cyan-500/30 shadow-xl">
                    <Image
                      src={PROFILE.photo}
                      alt={PROFILE.name}
                      fill
                      sizes="8rem"
                      className="object-cover object-[center_12%] "
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{PROFILE.name}</h3>
                  <p className="text-sm text-slate-300">{PROFILE.title}</p>
                  <p className="text-xs mt-1 flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" /> {PROFILE.location}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <Link href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5">
                  <Mail className="w-4 h-4" /> Email
                </Link>
                <a href={PROFILE.whatsapp} target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5">
                  <Phone className="w-4 h-4" /> WhatsApp
                </a>
                <a href={PROFILE.github} target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href={PROFILE.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs text-slate-300">
                <BadgeCheck className="w-4 h-4 text-cyan-400" />
                {PROFILE.availability}
              </div>
            </motion.div>

            {/* Goals */}
            <motion.div {...fadeIn(0.2)} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-300" /> Apa yang Saya Cari
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-slate-300">
                {[
                  "Kesempatan berkontribusi sebagai Full-stack Developer pada tim kolaboratif.",
                  "Lingkungan yang mendorong belajar teknologi baru & solusi nyata bagi user.",
                  "Terbuka untuk full-time atau freelance; onsite maupun remote.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-2 inline-block size-1.5 rounded-full bg-cyan-400/80" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-sm text-emerald-300">Siap mulai segera.</div>
            </motion.div>
            
            {/* Education */}
            <motion.div {...fadeIn(0.15)} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-300" /> Pendidikan
              </h3>
              <ul className="space-y-3">
                {EDUCATIONS.map((e, i) => (
                  <li key={i} className="border border-white/10 rounded-xl p-4">
                    <div className="text-sm text-slate-300">{e.where}</div>
                    <div className="font-medium">{e.degree}</div>
                    {e.faculty && <div className="text-sm text-slate-400">{e.faculty}</div>}
                    {e.gpa && (
                      <div className="mt-1 inline-flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                        <Award className="w-3.5 h-3.5" /> {e.gpa}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div {...fadeIn(0.05)} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold mb-3">Sertifikasi</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.name} className="flex items-center gap-2">
                    <span className="text-cyan-300">{c.icon}</span>
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-slate-400">{c.issuer}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Personality */}
            <motion.div {...fadeIn(0.1)} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-6">
              <h3 className="font-semibold mb-3">Personality & Hobi</h3>
              <div className="flex flex-wrap gap-2">
                {HOBBIES.map((h) => (
                  <span key={h.label} className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <span className="text-cyan-300">{h.icon}</span>
                    {h.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ========== RIGHT ========== */}
          <div className="space-y-6">
            {/* Summary */}
            <motion.div {...fadeIn(0)} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Tentang Saya</h1>
              <p className="text-slate-300">{PROFILE.summary}</p>
            </motion.div>

            {/* Skills */}
            <motion.div {...fadeIn(0.05)} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-300" /> Keahlian
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(SKILLS).map(([group, items]) => (
                  <div key={group}>
                    <div className="text-sm font-medium text-slate-300 mb-2">{group}</div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((it) => (
                        <span key={it} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div {...fadeIn(0.1)} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-300" /> Pengalaman
              </h2>
              <ul className="space-y-5">
                {TIMELINE.map((t, i) => (
                  <li key={i}>
                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {t.period}
                    </div>
                    <div className="text-base font-semibold mt-1">{t.title}</div>
                    <div className="text-sm text-slate-300">{t.org}</div>
                    <ul className="mt-2 list-disc pl-5 text-sm text-slate-300/90 space-y-1">
                      {t.points.map((p, j) => <li key={j}>{p}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Projects (ringkas) */}
            <motion.div {...fadeIn(0.15)} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-300" /> Projects Terpilih
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {PROJECTS.slice(0, VISIBLE_PROJECTS).map((p, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-cyan-300" />
                      <h3 className="font-semibold">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-slate-300/90">{p.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.slice(0, 4).map((s) => (
                        <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* tombol opsional lihat semua */}
              <div className="mt-4">
                <Link href="/project" className="text-sm text-cyan-300 hover:underline">
                  Lihat semua project →
                </Link>
              </div>
            </motion.div>

            
          </div>
        </div>
      </section>
    </main>
  );
}
