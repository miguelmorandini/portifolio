import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react';
import { experiences, Lang, uiLabels } from '../data/portfolio';

interface ExperienceProps {
  lang: Lang;
}

export function Experience({ lang }: ExperienceProps) {
  return (
    <section id="experience" className="border-b border-zinc-900 bg-[#070c0a] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            {uiLabels.sections.expEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {uiLabels.sections.expTitle[lang]}
          </h2>
        </div>

        <div className="relative mt-10 space-y-6 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-gradient-to-b before:from-emerald-500/60 before:via-emerald-500/20 before:to-transparent sm:before:left-6">
          {experiences.map((exp) => (
            <article key={exp.id} className="relative pl-11 sm:pl-16">
              <span
                className={`absolute left-2.5 top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border sm:left-[17px] ${
                  exp.current
                    ? 'border-emerald-300 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.75)]'
                    : 'border-emerald-500/50 bg-[#070c0a]'
                }`}
              />

              <div className="rounded-2xl border border-zinc-800/90 bg-[#0a120f] p-6 transition hover:border-emerald-500/35">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    {exp.logo && (
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                          exp.logoStyle === 'light'
                            ? 'bg-white p-1.5 shadow-sm'
                            : exp.logoStyle === 'raw'
                              ? 'overflow-hidden border border-zinc-800/80'
                              : 'border border-zinc-800 bg-zinc-950/80 p-1.5'
                        }`}
                      >
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className={`h-full w-full ${exp.logoStyle === 'raw' ? 'object-cover' : 'object-contain'}`}
                        />
                      </div>
                    )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-bold text-white">{exp.role[lang]}</h3>
                      {exp.current && (
                        <span className="rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-300">
                          {uiLabels.misc.currentBadge[lang]}
                        </span>
                      )}
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-300">
                      <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-emerald-300 hover:underline"
                        >
                          {exp.company}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="font-semibold text-emerald-300">{exp.company}</span>
                      )}
                      {exp.context && (
                        <span className="text-zinc-400">· {exp.context[lang]}</span>
                      )}
                      <span className="text-zinc-500">· {exp.type[lang]}</span>
                    </div>
                  </div>

                  </div>
                  <div className="flex flex-col items-start gap-1 text-xs text-zinc-400 sm:items-end">
                    <span className="inline-flex items-center gap-1.5 font-mono text-zinc-300">
                      <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                      {exp.period[lang]} · {exp.duration[lang]}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-zinc-500" />
                      {exp.location} · {exp.modality[lang]}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">{exp.description[lang]}</p>

                <ul className="mt-3 space-y-1.5 text-sm text-zinc-400">
                  {exp.highlights[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
