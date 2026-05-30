"use client";

import { useState } from "react";

const FORM_ID = "1FAlpQLSfCFAONWGBNUIP7NLWH1JZ4xceH0MMcbK6GeSxGeh4oPQ3t6w";
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

const FIELD_IDS = {
  firstName: "entry.2046453938",
  lastName: "entry.869673712",
  email: "entry.1809887713",
  service: "entry.100077835",
  message: "entry.1822279789",
};

const serviceOptions = [
  "Cloud Infrastructure",
  "Cybersecurity",
  "Custom Software Development",
  "Digital Transformation",
  "IT Consulting",
  "Managed IT Services",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const body = new URLSearchParams();
    body.append(FIELD_IDS.firstName, form.firstName);
    body.append(FIELD_IDS.lastName, form.lastName);
    body.append(FIELD_IDS.email, form.email);
    body.append(FIELD_IDS.service, form.service);
    body.append(FIELD_IDS.message, form.message);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus("sent");
      setForm({ firstName: "", lastName: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 tracking-tight">Let&apos;s build something great</h2>
          <p className="text-muted">
            Ready to elevate your technology? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        {status === "sent" ? (
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-muted">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Service Interest</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm text-muted"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project..."
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark disabled:opacity-60 transition-colors shadow-lg shadow-brand/25"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
