import { Cpu, Database, Layers } from 'lucide-react';
import { Lang, pillars, profile, uiLabels } from '../data/portfolio';

interface AboutProps {
  lang: Lang;
}

const pillarIcons: Record<string, typeof Database> = {
  data: Database,
  ai: Cpu,
  software: Layers,
};

export function About({ lang }: AboutProps) {
  return (
    <section id="about" className="border-b border-zinc-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            {uiLabels.sections.aboutEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {uiLabels.sections.aboutTitle[lang]}
          </h2>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 text-base leading-relaxed text-zinc-300 lg:col-span-5">
            {profile.aboutParagraphs[lang].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.id] ?? Database;
              return (
                <div
                  key={pillar.id}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-[#09100d] p-5 transition hover:border-emerald-500/35"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-emerald-400">{pillar.tag}</span>
                      <Icon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-white">
                      {pillar.title[lang]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {pillar.description[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
