import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  Info
} from "lucide-react";
import { contactDetails, personalInfo } from "@/data/portfolioData";

export default function ContactSection({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (minimum 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Please enter a subject (minimum 3 characters).";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger mailto client prefilled with form data
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Bharath,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    window.open(mailtoUrl, "_blank");
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id={id || "contact"}
      className="py-20 md:py-28 bg-[#090d16] relative overflow-hidden border-t border-white/[0.06] scroll-mt-14"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            {contactDetails.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            {contactDetails.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Get In Touch Directly
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Whether you have an open engineering role, a backend consulting inquiry, or an interesting distributed architecture challenge, feel free to reach out.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3">
                {/* Email card */}
                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0c101d] flex items-center justify-between group hover:border-purple-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Email</span>
                      <a
                        href={contactDetails.channels[0].href}
                        className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailAddress}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone card (optional in public UI) */}
                {personalInfo.showPhone && personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="p-4 rounded-xl border border-white/[0.08] bg-[#0c101d] flex items-center justify-between group hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-500 uppercase block">Phone</span>
                        <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                          {personalInfo.phone}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                )}

                {/* LinkedIn card */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#0c101d] flex items-center justify-between group hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">LinkedIn</span>
                      <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                        panuganti-bharath
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* GitHub card */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#0c101d] flex items-center justify-between group hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-500/10 text-slate-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">GitHub</span>
                      <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                        panuganti0211
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Location card */}
                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0c101d] flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Based in</span>
                    <span className="text-sm font-medium text-white">
                      {contactDetails.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-300 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Available for full-time engineering roles & technical discussions.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c101d]/90 backdrop-blur-md p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill out the details below to initiate a conversation directly via email.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#131929] border border-purple-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Draft Prepared in Email Client</h4>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-md mx-auto">
                    Your inquiry was pre-formatted and opened in your email application. Because direct on-page form submission is not configured on this static portfolio, please send the email from your application or reach out directly at{" "}
                    <a href={`mailto:${personalInfo.email}`} className="text-purple-400 underline font-medium">
                      {personalInfo.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#131929] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? "border-rose-500 focus:ring-rose-500"
                            : "border-white/[0.1] focus:border-purple-500 focus:ring-purple-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#131929] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? "border-rose-500 focus:ring-rose-500"
                            : "border-white/[0.1] focus:border-purple-500 focus:ring-purple-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Backend Engineering Role / Project Inquiry"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#131929] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.subject
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-white/[0.1] focus:border-purple-500 focus:ring-purple-500"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Bharath, we reviewed your backend portfolio and would like to discuss..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#131929] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-white/[0.1] focus:border-purple-500 focus:ring-purple-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:via-indigo-500 hover:to-sky-500 text-white font-medium text-sm shadow-lg shadow-purple-900/30 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client to Send</span>
                  </button>

                  {/* Integration Notice */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-start gap-2 text-[11px] text-slate-500">
                    <Info className="w-3.5 h-3.5 shrink-0 text-slate-400 mt-0.5" />
                    <span>
                      Client-side form handler: opens your default email client with your message pre-formatted. To route submissions through a serverless API (e.g. EmailJS, Web3Forms, Resend), plug your API endpoint into this component.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
