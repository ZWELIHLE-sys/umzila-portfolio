"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-dark placeholder:text-gray-400 transition-colors focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30";

export default function ContactForm({ email }: { email: string }) {
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Website enquiry from ${form.name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Organisation: ${form.org}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        "",
        form.message,
      ].join("\n"),
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
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

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
      >
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
