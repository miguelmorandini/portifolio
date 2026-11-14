import { Lang, techGroups, uiLabels } from '../data/portfolio';

interface TechStackProps {
  lang: Lang;
}

export function TechStack({ lang }: TechStackProps) {
  return (
    <section id="stack" className="border-b border-zinc-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            {uiLabels.sections.stackEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {uiLabels.sections.stackTitle[lang]}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-zinc-800/90 bg-[#09100d] p-6 transition hover:border-emerald-500/30"
            >
              <h3 className="border-b border-zinc-800/80 pb-3 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                {group.title[lang]}
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-zinc-800/70 bg-zinc-900/40 px-3.5 py-2.5 transition hover:border-emerald-500/30"
                  >
                    <span className="text-sm font-semibold text-zinc-100">{item.name}</span>
                    <span className="font-mono text-[11px] text-zinc-400">
                      {item.detail[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
