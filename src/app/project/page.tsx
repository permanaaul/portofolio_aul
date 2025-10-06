"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Github, Link2, Lock } from "lucide-react";

/* ===================== Types ===================== */

type Project = {
  title: string;
  summary: string;
  stack: string[];
  images: string[];        // multi-image carousel (SS kamu)
  highlights: string[];    // poin fitur/keterangan (ramai)
  links?: { demo?: string; github?: string };
};

/* ===================== Data ===================== */

const PROJECTS: Project[] = [
  {
    title: "E-Office PDAM",
    summary:
      "Digitalisasi tata kelola persuratan agar rapi, terukur, dan mudah ditelusuri. Fokus ke otomasi alur, kontrol akses per-role, dan pelaporan ringkas.",
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
      "Surat Masuk & Keluar: data surat, nomor, tujuan, lampiran, history aksi.",
      "Disposisi berantai + tracking status (menunggu, diproses, selesai) & catatan.",
      "Arsip & pencarian cepat (full-text), filter tanggal, unit, jenis surat.",
      "Agenda & Buku Tamu: jadwal rapat, tamu instansi, notula ringkas.",
      "Role-based Access Control (Admin/Sekretariat/Pimpinan/Unit) + audit trail aksi user.",
      "Laporan rekap mingguan/bulanan (PDF/CSV).",
      "Template & standar penamaan berkas supaya konsisten.",
      "Opsional modul Hublang* (pelanggan, pengaduan, permohonan & tracking proses).",
    ],
  },
  {
    title: "Manajemen Aset",
    summary:
      "Kelola siklus hidup aset dari registrasi sampai penyusutan; lengkap dengan gudang/stock dan integrasi ke General Ledger.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    images: [
        "/projects/asset/1.jpg",
        "/projects/asset/2.jpg",
        "/projects/asset/3.jpg",
        "/projects/asset/4.jpg",
        "/projects/asset/5.jpg",
        "/projects/asset/6.jpg",
        "/projects/asset/7.jpg",
        "/projects/asset/8.jpg",
        "/projects/asset/9.jpg",
        "/projects/asset/10.jpg",
        "/projects/asset/11.jpg",
        "/projects/asset/12.jpg",
        "/projects/asset/13.jpg",
        "/projects/asset/14.jpg",
        "/projects/asset/15.jpg",
        "/projects/asset/16.jpg",
        "/projects/asset/17.jpg",
        "/projects/asset/18.jpg",
        "/projects/asset/19.jpg",
        "/projects/asset/20.jpg",
        "/projects/asset/21.jpg",
        "/projects/asset/22.jpg",
        "/projects/asset/23.jpg",
        "/projects/asset/24.jpg",
        "/projects/asset/25.jpg",
        "/projects/asset/26.jpg",
        "/projects/asset/27.jpg",
      ],
      
      highlights: [
        "Master data aset: kategori, lokasi, unit/UPK, cost center; penomoran otomatis & label QR.",
        "Gudang & persediaan: multi gudang, kartu stok, IN/OUT/transfer, reorder level.",
        "Kapitalisasi aset dari pembelian/stok; histori perolehan & komponen aset.",
        "Penyusutan straight-line bulanan; perubahan masa manfaat & nilai residu; pause/resume schedule.",
        "Revaluasi/impairment & disposisi/penjualan aset (gain/loss) dengan jurnal otomatis.",
        "Jadwal pemeliharaan (preventive/corrective), work order, vendor & biaya sparepart.",
        "Pemetaan akun per kategori aset; auto-posting DR/CR ke General Ledger tiap periode.",
        "Jurnal umum & penyesuaian; nomor bukti otomatis + approval.",
        "Buku besar, kartu aset, dan laporan penyusutan per aset/per kategori.",
        "Neraca saldo bulanan, proses closing & lock periode.",
        "Kas & Bank: penerimaan/pengeluaran, register transaksi & rekonsiliasi bank.",
        "Hublang (layanan pelanggan): master pelanggan, golongan/tarif, status sambungan.",
        "Baca meter (petugas) dengan input cepat + estimasi bila gagal baca.",
        "Penetapan tagihan bulanan: tarif bertingkat, biaya beban/adm, denda keterlambatan.",
        "Pembayaran: tunai/bank, pelunasan sebagian, riwayat & tanda terima.",
        "Pengelolaan piutang & tunggakan, denda progresif, dan penghapusan piutang terkontrol.",
        "Rekonsiliasi pendapatan air ke GL; jejak audit lengkap untuk setiap aksi.",
        "Dashboard ringkas: nilai buku, aset akan habis masa manfaat, aging piutang, dsb.",
        "Ekspor laporan (PDF/CSV) per periode/unit/kategori; filter & pencarian cepat.",
        "Role/permission per modul & approval workflow; dukungan multi-unit/cabang.",
      ],
      
  },
  {
    title: "Invoice Management — Purwadhika (Final Project)",
    summary:
      "Aplikasi faktur sederhana yang cepat & rapi: buat, kirim, pantau status pembayaran; cocok untuk UMKM/freelancer.",
    stack: ["Next.js", "Tailwind CSS", "Express API", "TypeScript", "Nodemailer", "Axios"],
    images: [
      "/projects/invoice/1.jpg",
      "/projects/invoice/2.jpg",
      "/projects/invoice/3.jpg",
      "/projects/invoice/4.jpg",
    ],
    highlights: [
      "Buat invoice kustom (identitas pengirim/klien, item, pajak, catatan).",
      "Kelola daftar klien & riwayat invoice; lihat semua invoice dengan filter.",
      "Kirim invoice (PDF) langsung via Gmail dari aplikasi (Nodemailer).",
      "Tracking status pembayaran + reminder ringan.",
      "Impor/ekspor CSV; penomoran otomatis; dashboard metrik ringkas.",
      "Autentikasi dasar & kontrol akses sederhana.",
      "Stack: Next.js, Tailwind, Express API, TypeScript, Nodemailer, Axios.",
    ],
  },
  {
    title: "Ticketing Management — Purwadhika",
    summary:
      "Sistem tiket acara end-to-end: landing responsif, jelajah event, filter/pencarian, checkout IDR, promo & review attendee.",
    stack: ["Next.js", "Tailwind CSS", "Express API", "TypeScript"],
    images: [
      "/projects/ticketing/1.jpg",
      "/projects/ticketing/2.jpg",
      "/projects/ticketing/3.jpg",
      "/projects/ticketing/4.jpg",
    ],
    highlights: [
      "Landing page event discovery (kartu event, kategori, tanggal, harga).",
      "Pencarian & penyaringan (search, filter, pagination).",
      "Detail acara + pilihan tiket + kuota; proses pembelian sederhana (IDR).",
      "Voucher diskon & referral code; histori pesanan user.",
      "QR e-ticket & validasi check-in (workflow siap diintegrasikan).",
      "Review & rating setelah event, untuk social proof.",
      "Stack: Next.js, Tailwind, Express API, TypeScript.",
    ],
  },
  {
    title: "Company Profile — Landing Page (Purwadhika)",
    summary:
      "Halaman depan perusahaan untuk memperkenalkan brand, produk, dan tim. Fokus pada visual rapi & aksesibilitas.",
    stack: ["React", "JavaScript (ES6+)", "Tailwind CSS"],
    images: [
      "/projects/company/1.jpg",
      "/projects/company/2.jpg",
      "/projects/company/3.jpg",
      "/projects/company/4.jpg",
    ],
    highlights: [
      "Section hero, about, produk/layanan, testimoni, dan tim.",
      "Grid galeri produk + CTA; copywriting ringkas & jelas.",
      "Desain responsif multi-device; interaksi halus.",
      "Tanpa backend — statis, cepat, mudah di-deploy.",
      "Cocok sebagai materi presentasi/marketing awal.",
    ],
  },
];

/* ===================== Animations ===================== */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

/* ===================== Page ===================== */

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header lebih ke atas */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 pt-20 md:pt-24 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-slate-300 max-w-3xl"
        >
          Setiap kartu menampilkan preview, stack, dan keterangan lengkap tanpa
          perlu halaman detail terpisah.
        </motion.p>
      </section>

      {/* Grid full kiri–kanan */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 xl:gap-7 md:grid-cols-2"
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

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      variants={item}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-2xl border border-white/10
                 bg-gradient-to-b from-slate-900/60 to-slate-950/80
                 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]
                 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]
                 transition"
    >
      {/* Carousel: seragam 21:9 + object-contain supaya SS tidak pecah */}
      <div className="relative overflow-hidden">
        <div className="relative w-full aspect-[21/9] max-h-[360px] md:max-h-[380px] lg:max-h-[420px]">
          <div
            className="absolute inset-0 flex transition-transform duration-500"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {p.images.map((src, i) => (
              <div key={src} className="relative w-full flex-shrink-0 bg-slate-950">
                <Image
                  src={src}
                  alt={`${p.title} preview ${i + 1}`}
                  fill
                  sizes="(min-width:1280px) 50vw, 100vw"
                  className="object-contain"
                  quality={90}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {total > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label="Sebelumnya"
              className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full
                         bg-slate-900/60 hover:bg-slate-900/80 border border-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onNext}
              aria-label="Selanjutnya"
              className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full
                         bg-slate-900/60 hover:bg-slate-900/80 border border-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
              {p.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-5 rounded-full ${
                    i === idx ? "bg-cyan-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg leading-tight">{p.title}</h3>
        <p className="mt-2 text-sm text-slate-300/90">{p.summary}</p>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="mt-4 grid gap-1.5 text-sm text-slate-300/95">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Optional actions (kalau ada) */}
        <div className="mt-5 flex items-center gap-2">
          {p.links?.demo && (
            <a
              href={p.links.demo}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs px-3 py-2 rounded-md
                         border border-white/10 hover:bg-white/5 transition"
            >
              <Link2 className="w-3.5 h-3.5" /> Demo
            </a>
          )}
          {p.links?.github && (
            <a
              href={p.links.github}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs px-3 py-2 rounded-md
                         border border-white/10 hover:bg-white/5 transition"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          )}
          {!p.links?.demo && !p.links?.github && (
            <span
              className="inline-flex items-center gap-1 text-xs text-slate-400/80
                         px-3 py-2 rounded-md border border-white/10"
              title="Tidak ada tautan publik"
            >
              <Lock className="w-3.5 h-3.5" /> Private
            </span>
          )}
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-[radial-gradient(650px_circle_at_var(--x,50%)_var(--y,50%),rgba(34,211,238,0.08),transparent_40%)]" />
      </div>
    </motion.article>
  );
}
