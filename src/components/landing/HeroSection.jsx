import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, ShieldCheck } from "lucide-react";
import { DarkPanel } from "./DarkPanel";
import { HeroDashboardPreview } from "./HeroDashboardPreview";

export function HeroSection() {
  return (
    <section className="relative w-full">
      <DarkPanel
        className="w-full min-h-[760px] lg:min-h-[820px]"
        radius="rounded-b-[40px] sm:rounded-b-[56px]"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-10 items-center px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24"
          style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}
        >
          {/* Copy */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 backdrop-blur-md"
            >
              <Sparkles size={12} className="text-[#ff4d6a]" />
              <span className="text-[11px] tracking-wide text-white/85 uppercase font-semibold">
                Now featuring Next-Gen Idea Generation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-[48px] sm:text-[64px] lg:text-[80px] leading-[0.98] tracking-tight mt-7"
            >
              Innovate. Inspire.
              <br />
              <span className="text-white/50">Bring ideas to</span>{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, #ff4d6a 0%, #c8102e 55%, #9e0c24 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                life.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white/65 text-base sm:text-lg lg:text-[19px] mt-6 max-w-[540px] leading-relaxed"
            >
              Discover ideas, build solutions, and bring your innovations to life with the power of AI.
              Built for innovators, by innovators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <Link
                to="/register"
                className="group relative inline-flex items-center gap-2 h-12 px-5 rounded-full font-semibold text-[14px] text-white shadow-[0_10px_30px_-8px_rgba(200,16,46,0.5)] transition-all hover:shadow-[0_14px_36px_-8px_rgba(200,16,46,0.7)] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, #c8102e 0%, #9e0c24 55%, #5a0815 100%)",
                }}
              >
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 50%)",
                  }}
                />
                <span className="relative">Start Innovating</span>
                <ArrowRight size={15} className="relative group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 h-12 px-5 rounded-full font-medium text-[14px] text-white bg-white/8 border border-white/12 backdrop-blur-md hover:bg-white/12 transition-colors"
              >
                <Play size={13} fill="currentColor" />
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-[12px] text-white/55"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-[#c8102e]" />
                No credit card required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Free AI tools
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                1M+ ideas generated
              </span>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative">
            <HeroDashboardPreview />
          </div>
        </div>
      </DarkPanel>
    </section>
  );
}
