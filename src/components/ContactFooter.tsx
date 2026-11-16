import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { Lang, profile, uiLabels } from '../data/portfolio';

interface ContactFooterProps {
  lang: Lang;
}

export function ContactFooter({ lang }: ContactFooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.handle);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#050807] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#0a1511] via-[#080f0c] to-[#060908] p-8 sm:p-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {uiLabels.sections.contactEyebrow[lang]}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {uiLabels.sections.contactTitle[lang]}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-300">
              {uiLabels.sections.contactSubtitle[lang]}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-emerald-500/50 hover:text-emerald-300"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-emerald-500/50 hover:text-emerald-300"
            >
              <Mail className="h-4 w-4" />
              {uiLabels.misc.sendEmail[lang]}
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-4 py-2.5 font-mono text-xs font-medium text-emerald-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/20"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? uiLabels.misc.copied[lang] : uiLabels.misc.copyHandle[lang]}
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-xs text-zinc-500 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="Miguel Morandini" className="h-5 w-5 object-contain opacity-90" />
            <p>{uiLabels.misc.footerNote[lang]}</p>
          </div>
          <p className="flex items-center gap-1.5 font-mono">
            <MapPin className="h-3.5 w-3.5 text-emerald-500" />
            {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
