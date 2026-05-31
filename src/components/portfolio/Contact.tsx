import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's build <span className="text-gradient">something.</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Have an idea, a role, or a project in mind? My inbox is always open.
          </p>
          <div className="space-y-4">
            {/* Email - Clickable */}
            <a 
              href="mailto:nigussieeskedar@gmail.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition group"
            >
              <Mail size={18} className="text-primary shrink-0" />
              <span className="break-all">nigussieeskedar@gmail.com</span>
            </a>
            
            {/* GitHub - Clickable */}
            <a 
              href="https://github.com/eskedar12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition group"
            >
              <Github size={18} className="text-primary shrink-0" />
              <span>github.com/eskedar12</span>
            </a>
            
            {/* LinkedIn - Clickable */}
            <a 
              href="https://www.linkedin.com/in/eskedar-nigussie-a25a91286/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition group"
            >
              <Linkedin size={18} className="text-primary shrink-0" />
              <span>linkedin.com/in/eskedar-nigussie-a25a91286/</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" type="text" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@example.com" />
          </div>
          <Field label="Subject" type="text" placeholder="What's this about?" />
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium glow-primary hover:opacity-90 transition"
          >
            {sent ? "Message queued ✓" : "Send message"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}