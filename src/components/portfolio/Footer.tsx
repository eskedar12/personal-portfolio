import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border mt-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Eskedar Nigussie.
        </p>
        <div className="flex items-center gap-2">
          <a href="https://github.com/eskedar12" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-border hover:bg-surface hover:text-primary transition"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/eskedar-nigussie-a25a91286/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-border hover:bg-surface hover:text-primary transition"><Linkedin size={16} /></a>
          <a href="mailto:nigussieeskedar@gmail.com" target="_blank" rel="noreferrer" aria-label="Email" className="p-2 rounded-full border border-border hover:bg-surface hover:text-primary transition"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
