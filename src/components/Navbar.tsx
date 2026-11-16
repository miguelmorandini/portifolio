import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { Lang, uiLabels } from '../data/portfolio';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

const navKeys = ['about', 'experience', 'projects', 'education', 'stack', 'contact'] as const;

export function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/10 bg-[#050807]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-zinc-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-1 transition group-hover:border-emerald-400/60 group-hover:bg-emerald-500/15">
            <img src={logoImg} alt="Miguel Morandini" className="h-full w-full object-contain" />
          </span>
          <span>
            miguel<span className="text-emerald-400">.morandini</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm font-medium text-zinc-400 transition hover:text-emerald-400"
            >
              {uiLabels.nav[key][lang]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-medium text-emerald-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/20"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className={lang === 'pt' ? 'text-white font-semibold' : 'text-zinc-400'}>PT</span>
            <span className="text-zinc-600">/</span>
            <span className={lang === 'en' ? 'text-white font-semibold' : 'text-zinc-400'}>EN</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-300 transition hover:border-emerald-500/40 hover:text-emerald-400 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-emerald-500/10 bg-[#070c0a] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-1.5 text-sm font-medium text-zinc-300 transition hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                {uiLabels.nav[key][lang]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
