"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2, MapPin, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Input, { Textarea } from "@/components/ui/Input";
import FloatingGraphic from "@/components/FloatingGraphic";
import { FadeUp } from "@/components/animations/AnimatedText";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters").max(2000, "Message is too long"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "mehrankhanciit@gmail.com", href: "mailto:mehrankhanciit@gmail.com" },
  { icon: Github, label: "GitHub", value: "@mehrandev", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Mehran Khan", href: "https://linkedin.com" },
  { icon: MapPin, label: "Location", value: "Remote / Worldwide", href: null },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:mehrankhanciit@gmail.com", label: "Email" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setApiError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      setApiError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <FloatingGraphic type="envelope" />
        <div className="section-container relative z-10 text-center">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "var(--brand)" }}>
              Get in Touch
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="section-heading mb-4">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="section-subheading max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Have a project in mind or just want to chat? I&apos;d love to hear from you. I&apos;m currently
              available for freelance work and full-time opportunities.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <FadeUp>
                <h2 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                  Contact Information
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Reach out through any channel or fill in the form.
                </p>
              </FadeUp>

              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const cardEl = (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                    style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(65,184,131,0.5)";
                      el.style.boxShadow = "0 0 12px rgba(65,184,131,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(65,184,131,0.1)", color: "var(--brand)" }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--text-secondary)" }}>
                        {item.label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardEl}
                  </a>
                ) : (
                  <div key={item.label}>{cardEl}</div>
                );
              })}

              {/* Social links */}
              <FadeUp delay={0.3}>
                <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-secondary)" }}>
                    Social
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                        style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = "#41b883";
                          el.style.borderColor = "rgba(65,184,131,0.5)";
                          el.style.boxShadow = "0 0 12px rgba(65,184,131,0.3)";
                          el.style.transform = "translateY(-2px) rotate(8deg)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = "var(--text-secondary)";
                          el.style.borderColor = "var(--border)";
                          el.style.boxShadow = "none";
                          el.style.transform = "none";
                        }}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeUp delay={0.1}>
                <div
                  className="rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, rgba(65,184,131,0.06) 0%, transparent 70%)",
                      filter: "blur(30px)",
                    }}
                  />

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center justify-center py-16 gap-5 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 12 }}
                        >
                          <CheckCircle2 size={56} style={{ color: "var(--brand)" }} />
                        </motion.div>
                        <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                          Message Sent!
                        </h3>
                        <p className="text-sm max-w-xs" style={{ color: "var(--text-secondary)" }}>
                          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                          Check your inbox for a confirmation email.
                        </p>
                        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-5 relative z-10"
                        noValidate
                      >
                        <div>
                          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                            Send a Message
                          </h2>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            I&apos;ll respond within 24 hours.
                          </p>
                        </div>

                        {/* API error banner */}
                        {apiError && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 p-3 rounded-lg"
                            style={{
                              background: "rgba(239,68,68,0.1)",
                              border: "1px solid rgba(239,68,68,0.3)",
                              color: "#ef4444",
                            }}
                          >
                            <AlertCircle size={16} />
                            <span className="text-sm">{apiError}</span>
                          </motion.div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Input
                            id="name"
                            label="Your Name"
                            placeholder="John Doe"
                            error={errors.name?.message}
                            {...register("name")}
                          />
                          <Input
                            id="email"
                            type="email"
                            label="Email Address"
                            placeholder="john@example.com"
                            error={errors.email?.message}
                            {...register("email")}
                          />
                        </div>

                        <Input
                          id="subject"
                          label="Subject"
                          placeholder="Project inquiry, collaboration..."
                          error={errors.subject?.message}
                          {...register("subject")}
                        />

                        <Textarea
                          id="message"
                          label="Message"
                          placeholder="Tell me about your project or idea..."
                          rows={6}
                          error={errors.message?.message}
                          {...register("message")}
                        />

                        <Button type="submit" variant="primary" size="md" loading={loading} className="self-start">
                          {!loading && <Send size={15} />}
                          {loading ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
