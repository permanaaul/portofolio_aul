"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, delay: d } },
});

export default function ContactPage() {
  const PROFILE = useMemo(
    () => ({
      name: "Aulia Permana",
      email: "permanaaulia@gmail.com",
      linkedin: "https://linkedin.com/in/permanaaul",
      whatsapp: "https://wa.me/6281261421647",
      location: "Padang, Sumatera Barat",
      preferences: ["Full-time", "Freelance", "Onsite", "Remote"],
      availability: "Tersedia segera (sedang tidak terikat)",
      pitch: [
        "Clean architecture, performa & aksesibilitas diperhatikan, dokumentasi rapi.",
        "Terbiasa kolaborasi lintas fungsi dan komunikasi progres yang transparan.",
        "Siap adaptasi cepat pada target, fokus ke hasil yang bisa diukur.",
      ],
    }),
    []
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const subject =
      String(fd.get("subject") || "").trim() || "Kontak dari Portfolio";
    const message = String(fd.get("message") || "").trim();

    const body = `Halo Aulia,

Nama   : ${name}
Email  : ${email}

${message}

— Dikirim dari halaman Portfolio`;

    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* SATU SECTION GRID 2 KOLOM */}
      <section className="w-full max-w-none px-4 sm:px-6 lg:px-10 pt-28 pb-24 grid gap-8 lg:[grid-template-columns:minmax(380px,420px)_1fr]">
        {/* LEFT: Profile + Quick Contacts */}
        <motion.aside
          {...fade(0.05)}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-5"
        >
          <div>
            <h2 className="text-xl font-semibold">{PROFILE.name}</h2>
            <p className="text-sm text-slate-300">Full-stack Developer</p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              {PROFILE.location}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
              {PROFILE.preferences.join(" • ")}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {PROFILE.availability}
            </span>
          </div>

          <div className="space-y-3">
            <Link
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5 transition"
            >
              <Mail className="w-5 h-5 text-cyan-300" />
              {PROFILE.email}
            </Link>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={PROFILE.linkedin}
              className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5 transition"
            >
              <Linkedin className="w-5 h-5 text-cyan-300" />
              linkedin.com/in/permanaaul
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={PROFILE.whatsapp}
              className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5 transition"
            >
              <Phone className="w-5 h-5 text-cyan-300" />
              Chat WhatsApp
            </a>
          </div>

          <div className="pt-1 text-xs text-slate-400">
            Biasanya respon &lt; 24 jam • WIB (GMT+7).
          </div>
        </motion.aside>

        {/* RIGHT: Pitch + Form (dalam 1 kartu) */}
        <motion.div
          {...fade(0.08)}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let’s Work Together
          </h1>

          <p className="mt-3 text-slate-300 max-w-3xl">
            Saya <span className="text-cyan-300 font-medium">{PROFILE.name}</span>, Full-stack Developer
            yang fokus pada <span className="font-medium">sistem modern, scalable, dan rapi</span>.
            Portofolio ini membantu HR/Recruiter menilai kecocokan saya dengan baik{" "}
            <span className="font-medium">full-time, kontrak</span> maupun{" "}
            <span className="font-medium">freelance</span>.
          </p>

          <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
            {PROFILE.pitch.map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5" />
                <span className="text-slate-300">{t}</span>
              </li>
            ))}
          </ul>

          <hr className="my-6 border-white/10" />

          {/* FORM */}
          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Nama</label>
              <input
                name="name"
                autoComplete="name"
                required
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
                placeholder="email@perusahaan.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Subjek</label>
              <input
                name="subject"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
                placeholder="Hiring Full-stack / Konsultasi / dll"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Pesan</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
                placeholder="Ceritakan kebutuhan, scope singkat, timeline, dll."
              />
            </div>

            <div className="sm:col-span-2 mt-2 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition"
                aria-label="Kirim via Email"
              >
                Kirim via Email
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
              >
                atau lanjutkan via WhatsApp
              </a>
            </div>

            {/* honeypot */}
            <input
              type="text"
              name="_hp"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <p className="sm:col-span-2 mt-3 text-xs text-slate-400">
              Data tidak disimpan di server—form ini hanya membuka email client Anda.
            </p>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
