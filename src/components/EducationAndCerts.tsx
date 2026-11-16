import { useState } from 'react';
import {
  Award,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileBadge2,
  GraduationCap,
} from 'lucide-react';
import {
  CertificationItem,
  certifications,
  education,
  Lang,
  profile,
  uiLabels,
} from '../data/portfolio';

interface EducationAndCertsProps {
  lang: Lang;
}

function formatCredentialPeriod(cert: CertificationItem, lang: Lang): string | null {
  if (!cert.issuedAt) return null;
  const issued = `${uiLabels.misc.issuedLabel[lang]} ${cert.issuedAt[lang]}`;
  if (!cert.expiresAt) return issued;
  return `${issued} • ${uiLabels.misc.validUntilLabel[lang]} ${cert.expiresAt[lang]}`;
}

export function EducationAndCerts({ lang }: EducationAndCertsProps) {
  const [showAllBadges, setShowAllBadges] = useState(false);

  const primaryCerts = certifications.filter(
    (cert) => cert.tier === 'certification' || cert.tier === 'accreditation',
  );
  const knowledgeBadges = certifications.filter((cert) => cert.tier === 'knowledge');
  const partnerBadges = certifications.filter((cert) => cert.tier === 'partner');
  const secondaryCount = knowledgeBadges.length + partnerBadges.length;

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

        {/* Courses & Certifications (Primary Highlight) */}
        <div className="mt-10">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
              <Award className="h-4 w-4 text-emerald-400" />
              {uiLabels.misc.certsHeading[lang]}
            </h3>

            <a
              href={profile.databricksWalletUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-300 transition hover:border-emerald-400/60 hover:bg-emerald-500/15"
            >
              {uiLabels.misc.databricksWallet[lang]}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {primaryCerts.map((cert) => {
              const period = formatCredentialPeriod(cert, lang);
              return (
                <div
                  key={cert.id}
                  className={`flex items-start gap-4 rounded-2xl border p-5 transition ${
                    cert.featured
                      ? 'border-emerald-500/50 bg-emerald-950/25 shadow-lg shadow-emerald-950/30 hover:border-emerald-400/75'
                      : 'border-zinc-800/90 bg-[#0a120f] hover:border-emerald-500/35'
                  }`}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950/70 p-1.5">
                    {cert.badgeImageUrl ? (
                      <img
                        src={cert.badgeImageUrl}
                        alt={cert.title}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <Award className="h-7 w-7 text-emerald-300" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`inline-block rounded px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                          cert.featured
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-emerald-500/10 text-emerald-300'
                        }`}
                      >
                        {cert.badgeLabel}
                      </span>

                      <div className="flex items-center gap-3">
                        {cert.certificateImageUrl && (
                          <a
                            href={cert.certificateImageUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[11px] text-zinc-300 transition hover:text-emerald-300"
                          >
                            <FileBadge2 className="h-3 w-3 text-emerald-400" />
                            {uiLabels.misc.viewCertificate[lang]}
                          </a>
                        )}
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400 transition hover:text-emerald-300"
                          >
                            {uiLabels.misc.verifyCredential[lang]}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h4 className="mt-2 text-base font-bold leading-snug text-white">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-400">{cert.issuer}</p>
                    {period && (
                      <p className="mt-1.5 font-mono text-[11px] text-zinc-500">{period}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {secondaryCount > 0 && (
            <div className="mt-4 rounded-2xl border border-zinc-800/90 bg-[#0a120f] p-4 sm:p-5">
              <button
                type="button"
                onClick={() => setShowAllBadges((prev) => !prev)}
                aria-expanded={showAllBadges}
                className="flex w-full items-center justify-between gap-3 text-left"
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {showAllBadges
                      ? uiLabels.misc.hideBadges[lang]
                      : `${uiLabels.misc.showBadges[lang]} (${secondaryCount})`}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] text-zinc-400">
                    {knowledgeBadges.length} {uiLabels.misc.knowledgeBadgesLabel[lang]} •{' '}
                    {partnerBadges.length} {uiLabels.misc.partnerBadgesLabel[lang]}
                  </p>
                </div>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-400">
                  {showAllBadges ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </span>
              </button>

              {showAllBadges && (
                <div className="mt-4 space-y-5 border-t border-zinc-800/80 pt-4">
                  {[
                    {
                      label: `${uiLabels.misc.knowledgeBadgesLabel[lang]} (${knowledgeBadges.length})`,
                      items: knowledgeBadges,
                    },
                    {
                      label: `${uiLabels.misc.partnerBadgesLabel[lang]} (${partnerBadges.length})`,
                      items: partnerBadges,
                    },
                  ].map((group) => (
                    <div key={group.label}>
                      <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                        {group.label}
                      </p>
                      <div className="grid gap-2.5 md:grid-cols-2">
                        {group.items.map((badge) => {
                          const period = formatCredentialPeriod(badge, lang);
                          return (
                            <div
                              key={badge.id}
                              className="flex items-center gap-3 rounded-xl border border-zinc-800/70 bg-zinc-950/60 px-3.5 py-2.5 transition hover:border-emerald-500/35"
                            >
                              {badge.badgeImageUrl && (
                                <img
                                  src={badge.badgeImageUrl}
                                  alt={badge.title}
                                  loading="lazy"
                                  className="h-10 w-10 shrink-0 object-contain"
                                />
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-medium leading-snug text-zinc-200">
                                  {badge.title}
                                </p>
                                {period && (
                                  <p className="mt-0.5 font-mono text-[10px] text-zinc-500">
                                    {period}
                                  </p>
                                )}
                              </div>
                              {badge.credentialUrl && (
                                <a
                                  href={badge.credentialUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`${uiLabels.misc.verifyCredential[lang]} ${badge.title}`}
                                  className="inline-flex shrink-0 items-center gap-1 font-mono text-[11px] text-emerald-400 transition hover:text-emerald-300"
                                >
                                  {uiLabels.misc.verifyCredential[lang]}
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Academic Education (Supporting Section) */}
        <div className="mt-10">
          <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <GraduationCap className="h-4 w-4 text-emerald-400" />
            {uiLabels.misc.academicHeading[lang]}
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl border border-zinc-800/90 bg-[#0a120f] p-5 transition hover:border-emerald-500/35"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-start gap-3.5">
                    {edu.logo && (
                      <div
                        className={`flex h-11 w-14 shrink-0 items-center justify-center rounded-xl ${
                          edu.logoStyle === 'light'
                            ? 'bg-white p-1.5 shadow-sm'
                            : 'border border-zinc-800 bg-zinc-950/80 px-2 py-1.5'
                        }`}
                      >
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-white">{edu.institution}</h4>
                      <p className="mt-0.5 text-xs font-medium text-emerald-300">
                        {edu.degree[lang]}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300">
                    <Calendar className="h-3 w-3 text-emerald-400" />
                    {edu.period[lang]}
                  </span>
                </div>

                <p className="mt-2 font-mono text-[11px] text-zinc-400">{edu.status[lang]}</p>

                {edu.skills && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2 py-0.5 font-mono text-[10px] text-zinc-300"
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
      </div>
    </section>
  );
}
