"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RawCard } from "@/components/ui/RawCard";
import { HardButton } from "@/components/ui/HardButton";
import { fadeUp } from "@/lib/motion";
import { personalInfo } from "@/lib/data";

function Field({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-fg-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="w-full border-2 border-fg bg-bg p-3 text-fg"
      />
    </div>
  );
}

// Bu form gerçek bir backend'e bağlı değil (henüz bir e-posta servisi kurulmadı).
// Bu yüzden sahte bir "gönderildi" mesajı göstermek yerine, doldurulan bilgileri
// kullanıcının kendi e-posta istemcisinde (mailto:) hazır şekilde açıyoruz —
// dürüst ve sıfır bağımlılıklı bir yaklaşım.
export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = formData.subject || `${formData.name} tarafından mesaj`;
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.1 }}
      className="lg:col-span-2"
    >
      <RawCard className="p-6 md:p-8">
        <h2 className="mb-2 border-b-2 border-fg pb-4 font-display text-xl font-bold uppercase text-fg">
          Mesaj Gönder
        </h2>
        <p className="mb-6 mt-4 text-sm text-fg-muted">
          Formu gönderdiğinde mesajın, e-posta istemcinde (Gmail, Outlook vb.) hazır şekilde açılır — bu site
          üzerinden doğrudan bir sunucuya gönderilmez.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label="İsim" name="name" value={formData.name} onChange={handleChange} />
            <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          </div>
          <Field label="Konu" name="subject" value={formData.subject} onChange={handleChange} />
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-fg-muted">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none border-2 border-fg bg-bg p-3 text-fg transition-[box-shadow] focus:outline-none focus:shadow-brutal-sm"
            />
          </div>
          <HardButton type="submit" className="gap-2 bg-accent px-6 py-3 text-accent-fg">
            Mesajı E-posta İstemcimde Aç
          </HardButton>
        </form>
      </RawCard>
    </motion.div>
  );
}
