import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Mail, Lock } from "lucide-react";
import {
  AuthShell,
  AuthField,
  AuthPrimaryButton,
  AuthErrorBanner,
} from "@/components/auth/AuthShell";
import AILogo from "@/components/layout/AILogo";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(form);
      nav("/dashboard");
    } catch (e) {
      setErr(e.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      headline={
        <>
          Innovate. Inspire.
          <br />
          <em style={{ fontStyle: "italic" }}>Intelligence.</em>
        </>
      }
      subhead="Discover ideas, build solutions, and bring your innovations to life with the power of AI."
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-12">
          <AILogo size={48} />
        </div>

        <h1 className="font-display text-[34px] font-semibold tracking-tight text-[var(--ink)] leading-[1.05]">
          Welcome back
        </h1>
        <p className="text-[var(--ink-muted)] mt-2 text-[15px]">
          Sign in to continue to Inno AI.
        </p>

        <form onSubmit={onSubmit} className="mt-9 space-y-4">
          <AuthField
            label="Email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            placeholder="you@example.com"
            icon={Mail}
          />

          <AuthField
            label="Password"
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={(v) => setForm({ ...form, password: v })}
            placeholder="Enter your password"
            icon={Lock}
            extra={
              <a
                href="#"
                className="text-[13px] font-medium text-[var(--accent)] hover:underline"
                tabIndex={-1}
              >
                Forgot?
              </a>
            }
          />

          <AuthErrorBanner>{err}</AuthErrorBanner>

          <div className="pt-1">
            <AuthPrimaryButton type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in <ArrowRight size={15} />
                </>
              )}
            </AuthPrimaryButton>
          </div>
        </form>

        <div className="text-sm text-[var(--ink-muted)] text-center mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[var(--accent-strong)] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </motion.div>
    </AuthShell>
  );
}
