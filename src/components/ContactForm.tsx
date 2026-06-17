"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-dark placeholder:text-gray-400 transition-colors focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ endpoint }: { endpoint: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          organisation: form.org,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          org: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-2xl border border-sage/40 bg-mint/30 p-8 text-center">
        <CheckCircle2 className="mx-auto text-sage" size={40} />
        <h3 className="mt-3 font-serif text-xl font-bold text-dark">
          Message sent!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-gray-600">
          Thank you for reaching out — we&apos;ll get back to you as soon as we
          can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-forest transition-colors hover:text-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            Full Name
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            Organisation <span className="text-gray-400">(optional)</span>
          </label>
          <input
            value={form.org}
            onChange={(e) => update("org", e.target.value)}
            className={inputClass}
            placeholder="Company / organisation"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            Email Address
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            Phone Number
          </label>
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="+27 ..."
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-dark">
          Subject
        </label>
        <input
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={inputClass}
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-dark">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Tell us a bit more..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">
          Something went wrong. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
