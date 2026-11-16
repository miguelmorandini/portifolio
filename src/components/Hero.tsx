import { useState } from 'react';
import {
  ArrowRight,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Lang, profile, uiLabels } from '../data/portfolio';

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden border-b border-emerald-500/10 bg-emerald-grid">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {uiLabels.hero.status[lang]}
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-3 text-lg font-semibold text-emerald-400 sm:text-xl">
              {profile.headline[lang]}
            </p>

            <p className="mt-4 font-mono text-sm text-emerald-300/90 sm:text-base">
              &gt; {profile.tagline[lang]}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {profile.intro[lang]}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
              >
                {uiLabels.hero.viewProjects[lang]}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/70 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-emerald-500/50 hover:text-emerald-300"
              >
                {uiLabels.hero.viewExperience[lang]}
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-emerald-500/20 bg-[#09110e]/90 p-6 shadow-2xl shadow-emerald-950/40 backdrop-blur">
              {/* Banner header inspired by GitHub README */}
              <div className="bg-hex-pattern mb-5 rounded-xl border border-emerald-500/20 p-4">
                <div className="flex items-center gap-4">
                  {!imgError ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      onError={() => setImgError(true)}
                      className="h-16 w-16 rounded-full border-2 border-emerald-400/60 object-cover shadow-lg shadow-emerald-950/60"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-400/60 bg-emerald-500/15 font-mono text-lg font-bold text-emerald-300">
                      MM
                    </div>
                  )}

                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                      <Sparkles className="h-3 w-3" />
                      Data Engineering &amp; AI
                    </span>
                    <h2 className="mt-1 truncate text-base font-bold text-white">@{profile.handle}</h2>
                    <p className="flex items-center gap-1 text-xs text-zinc-400">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-emerald-500/15 pt-3">
                  {profile.bannerTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-emerald-500/20 bg-emerald-950/60 px-2 py-0.5 font-mono text-[10px] text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick telemetry rows */}
              <div className="space-y-3">
                <a
                  href={profile.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3 transition hover:border-emerald-500/35"
                >
                  <img src={profile.companyLogo} alt={profile.company} className="h-10 w-10 shrink-0 rounded-xl bg-white p-1.5 object-contain" />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      {lang === 'pt' ? 'Atuação Atual' : 'Current Role'}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-zinc-100">{profile.company}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-emerald-400" />
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                  <div className="flex h-10 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/70 px-2 py-1.5">
                    <img src={profile.institutionLogo} alt="Fatec Matão" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      {uiLabels.hero.gradLabel[lang]}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-zinc-200">
                      {uiLabels.hero.gradValue[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                  <Database className="h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      {uiLabels.hero.focusLabel[lang]}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-zinc-200">
                      {uiLabels.hero.focusValue[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
