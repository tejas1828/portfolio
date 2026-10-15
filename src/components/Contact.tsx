import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-bg-secondary/40 border-t border-border-color">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
            Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary mt-3 mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Seeking to join an engineering team as a Junior Software Engineer. Feel free to reach out directly!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-text-primary">
                Let's Discuss Opportunities
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Whether you have an open full-stack role, an internship conversion discussion, or a collaborative project in mind, I look forward to connecting with you.
              </p>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-bg-tertiary border border-border-color flex items-center justify-between group">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-text-muted">Email Address</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-text-primary hover:text-accent-primary truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-text-muted hover:text-accent-primary hover:bg-bg-secondary transition-all"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card with Copy & Call */}
              <div className="p-4 rounded-xl bg-bg-tertiary border border-border-color flex items-center justify-between group">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Phone Number</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-text-primary hover:text-accent-primary block transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-text-muted hover:text-accent-primary hover:bg-bg-secondary transition-all"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-bg-tertiary border border-border-color flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Location</p>
                  <p className="text-sm font-semibold text-text-primary">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase text-text-muted mb-3">Online Profiles</p>
                <div className="flex items-center space-x-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-bg-tertiary border border-border-color text-text-primary hover:text-accent-primary hover:border-accent-primary transition-all text-xs font-semibold shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-bg-tertiary border border-border-color text-text-primary hover:text-accent-primary hover:border-accent-primary transition-all text-xs font-semibold shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Fill out the form below to reach me directly.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Thank you! Your email client has been prepared. Looking forward to speaking!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-color text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-color text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Junior Software Engineer Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-color text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-color text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-xl font-bold hover:opacity-95 shadow-lg shadow-accent-primary/25 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
