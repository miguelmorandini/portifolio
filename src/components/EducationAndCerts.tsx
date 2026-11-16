import { Award, Calendar, GraduationCap } from 'lucide-react';
import { certifications, education, Lang, uiLabels } from '../data/portfolio';

interface EducationAndCertsProps {
  lang: Lang;
}

export function EducationAndCerts({ lang }: EducationAndCertsProps) {
  return (
    <section id="education" className="border-b border-zinc-900 bg-[#070c0a] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            {uiLabels.sections.eduEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {uiLabels.sections.eduTitle[lang]}
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Academic Education */}
          <div className="lg:col-span-7">
            <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <GraduationCap className="h-4 w-4 text-emerald-400" />
              {uiLabels.misc.academicHeading[lang]}
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-2xl border border-zinc-800/90 bg-[#0a120f] p-6 transition hover:border-emerald-500/35"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-start gap-3.5">
                      {edu.logo && (
                        <div className={`flex h-12 w-16 shrink-0 items-center justify-center rounded-xl ${edu.logoStyle === 'light' ? 'bg-white p-1.5 shadow-sm' : 'border border-zinc-800 bg-zinc-950/80 px-2.5 py-2'}`}>
                          <img src={edu.logo} alt={edu.institution} className="h-full w-full object-contain" />
                        </div>
                      )}
                    <div>
                      <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                      <p className="mt-1 text-sm font-medium text-emerald-300">
                        {edu.degree[lang]}
                      </p>
                    </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-[11px] text-zinc-300">
                      <Calendar className="h-3 w-3 text-emerald-400" />
                      {edu.period[lang]}
                    </span>
                  </div>

                  <p className="mt-2 font-mono text-xs text-zinc-400">{edu.status[lang]}</p>

                  {edu.skills && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Courses & Certifications */}
          <div className="lg:col-span-5">
            <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <Award className="h-4 w-4 text-emerald-400" />
              {uiLabels.misc.certsHeading[lang]}
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-800/90 bg-[#0a120f] p-5 transition hover:border-emerald-500/35"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 font-mono text-[10px] font-bold uppercase text-emerald-300">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="inline-block rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                      {cert.badgeLabel}
                    </span>
                    <h4 className="mt-1.5 text-sm font-bold leading-snug text-white">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-400">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
