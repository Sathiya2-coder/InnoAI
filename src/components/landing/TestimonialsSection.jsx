import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "./FeaturesSection";

const TESTIMONIALS = [
  {
    quote:
      "I had been stuck on my capstone project for weeks. Ran my idea through Inno AI, got 3 refined approaches, and built a working prototype in days.",
    name: "Priya Raman",
    role: "CS Final Year Student",
    company: "SRMIST",
    initials: "PR",
  },
  {
    quote:
      "The AI actually understands context. It didn't just spit out generic ideas — it gave me domain-specific solutions I hadn't even considered.",
    name: "Marcus Chen",
    role: "Software Engineer",
    company: "Vercel",
    initials: "MC",
  },
  {
    quote:
      "As a new founder, I had no idea how to validate my concept. Inno AI scored my feasibility and surfaced competitors I didn't know existed.",
    name: "Sofia Ruiz",
    role: "Startup Founder",
    company: "SeedStage",
    initials: "SR",
  },
  {
    quote:
      "I wish this existed when I was brainstorming my ML project. The idea generation alone saved me a week of research.",
    name: "Daniel Park",
    role: "ML Engineer",
    company: "Anthropic",
    initials: "DP",
  },
  {
    quote:
      "The project blueprint feature is what sold me. I got a complete tech stack, module breakdown, and roadmap — all from a single prompt.",
    name: "Aisha Hassan",
    role: "Product Designer",
    company: "Figma",
    initials: "AH",
  },
  {
    quote:
      "Used it the night before our hackathon. Generated 5 validated ideas in 10 minutes. We won first place with one of them.",
    name: "Jordan Blake",
    role: "Full-Stack Developer",
    company: "freelance",
    initials: "JB",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="px-3 sm:px-6 mt-28 sm:mt-36"
      style={{ maxWidth: 1240, marginLeft: "auto", marginRight: "auto" }}
    >
      <SectionHeader
        eyebrow="Testimonials"
        title={<>Loved by builders and innovators.</>}
        sub="From students building their first project to engineers shipping at scale."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
            className="rounded-[22px] bg-[var(--surface)] border border-[var(--border)] shadow-card hover:shadow-hover transition-all p-5 sm:p-6 flex flex-col"
          >
            <div className="flex gap-0.5 text-[var(--accent)] mb-3">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-[14px] text-[var(--ink)] leading-relaxed flex-1">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[var(--border)]">
              <div className="h-9 w-9 rounded-full bg-[var(--accent-strong)] text-white flex items-center justify-center font-display text-[12px] font-semibold tabular">
                {t.initials}
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-[var(--ink)] truncate">
                  {t.name}
                </div>
                <div className="text-[11px] text-[var(--ink-muted)] truncate">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
