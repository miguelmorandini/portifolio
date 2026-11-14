import { useState } from 'react';
import { ArrowUpRight, Bot, Code2, Database, ExternalLink, Quote, Sparkles } from 'lucide-react';
import { Lang, ProjectCategory, projects, uiLabels } from '../data/portfolio';

interface ProjectsProps {
  lang: Lang;
}

const categories: ProjectCategory[] = ['all', 'data', 'ai', 'fullstack'];

const categoryIcon = {
  data: Database,
  ai: Bot,
  fullstack: Code2,
};

export function Projects({ lang }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="border-b border-zinc-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {uiLabels.sections.projEyebrow[lang]}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {uiLabels.sections.projTitle[lang]}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition ${
                    active
                      ? 'border border-emerald-400/50 bg-emerald-500/20 text-emerald-300'
                      : 'border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  {uiLabels.filters[cat][lang]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const Icon = categoryIcon[project.category];
            const isFullWidthFeatured = project.id === 'cidade-integra' && activeCategory === 'all';

            return (
              <article
                key={project.id}
                className={`group flex flex-col justify-between rounded-2xl border p-6 transition ${
                  project.featured
                    ? 'border-emerald-500/25 bg-gradient-to-br from-[#0b1612] to-[#080d0b] hover:border-emerald-400/50'
                    : 'border-zinc-800/90 bg-[#09100d] hover:border-emerald-500/35'
                } ${isFullWidthFeatured ? 'md:col-span-2' : ''}`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-xs text-emerald-400">
                        {project.subtitle[lang]}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-300">
                          <Sparkles className="h-3 w-3" />
                          {uiLabels.misc.featuredBadge[lang]}
                        </span>
                      )}
                      {project.role && (
                        <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-0.5 font-mono text-[11px] text-zinc-300">
                          {project.role[lang]}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white transition group-hover:text-emerald-300">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                    {project.description[lang]}
                  </p>

                  {project.quote && (
                    <blockquote className="mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-500/15 bg-emerald-950/25 p-3.5 text-sm italic text-emerald-200/90">
                      <Quote className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{project.quote[lang]}</span>
                    </blockquote>
                  )}

                  {project.architectureNote && (
                    <p className="mt-3 font-mono text-xs text-zinc-400">
                      // {project.architectureNote[lang]}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800/80 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/35 bg-emerald-500/15 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/25"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {uiLabels.misc.viewLiveDemo[lang]}
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      {uiLabels.misc.viewOnGithub[lang]}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
