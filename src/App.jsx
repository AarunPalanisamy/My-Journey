import { useMemo, useState } from "react";

const professionalMetrics = [
  { label: "Experience", value: "7+ Years", detail: "Product + engineering execution" },
  { label: "Shipped Products", value: "10+", detail: "SaaS, loyalty, healthcare, commerce" },
  { label: "Core Stack", value: "React + AI", detail: "Web, mobile, micro frontend" },
  { label: "Hackathon", value: "1st Place", detail: "RAG solution across 22+ teams" },
];

const capabilityTracks = [
  {
    title: "AI Enthusiast + LLM Builder",
    score: 94,
    bullets: [
      "RAG pipelines, prompt engineering, and production evaluations",
      "Fine-tuning strategy for domain-specific behavior and quality",
      "Copilot-style assistants for business and customer workflows",
    ],
  },
  {
    title: "Frontend Architect",
    score: 96,
    bullets: [
      "React, Next.js, Tailwind, React Native with product-grade UX",
      "Design systems and component architecture for scalable teams",
      "Performance-oriented interfaces with measurable conversion growth",
    ],
  },
  {
    title: "Micro Frontend Systems",
    score: 90,
    bullets: [
      "Plugin/extension-ready shell architecture for shared platform modules",
      "Common core + independently deployable feature domains",
      "Contract-first integration for teams building autonomous extensions",
    ],
  },
];

const featuredWins = [
  {
    title: "Company Hackathon Winner",
    badge: "Winner",
    description:
      "Secured first place among 22+ teams by creating a self-hosted RAG solution with UI, backend, and data orchestration ownership.",
  },
  {
    title: "RAG Auto Reporting + Dynamic Chart Narratives",
    badge: "AI Impact",
    description:
      "Built internal reporting pipelines that convert operational events into retrieval-grounded summaries and visual, decision-ready chart stories.",
  },
  {
    title: "Contractor Rewards Business Lift",
    badge: "Revenue",
    description:
      "Delivered 30% increase in first-time conversion and invoice submissions, supporting 10% revenue growth.",
  },
];

const careerTimeline = [
  {
    role: "Senior Software Developer",
    company: "BI WORLDWIDE",
    period: "Dec 2022 – Present",
    points: [
      "Owned critical frontend + mobile experiences and delivered full-stack enhancements.",
      "Integrated AI agents and Copilot-style flows for loyalty and engagement automation.",
      "Contributed architecture to multi-tenant platforms with scalability-first decisions.",
    ],
  },
  {
    role: "Freelancing Lead Engineer",
    company: "Marzi",
    period: "Independent Engagement",
    points: [
      "Delivered freelance engineering support across product features and user experience upgrades.",
      "Worked on medical application workflows and reliability-focused delivery patterns.",
      "Supported Sidekicks initiatives with practical product iteration and shipping discipline.",
    ],
  },
  {
    role: "Product Builder",
    company: "Fitakka (fitakka.com)",
    period: "Current",
    points: [
      "Building Macro Calculator across Android, iOS, and web experiences.",
      "Aligning product strategy, UX, and engineering for cross-platform consistency.",
      "Designing a habit-oriented health utility with conversion-aware onboarding.",
    ],
  },
];

const personalStatements = [
  "I hold deep ethics for Tamil language and cultural legacy.",
  "I write opinionated pieces on geopolitics, identity, and technology influence.",
  "I value discipline from sports and apply it to product execution and leadership.",
];

function App() {
  const [mode, setMode] = useState("professional");
  const [riskAccepted, setRiskAccepted] = useState(false);

  const modeTitle = useMemo(
    () => (mode === "professional" ? "Professional Mode" : "Personal Mode"),
    [mode]
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-12%] top-10 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <header className="mx-auto max-w-6xl px-6 pb-8 pt-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-violet-300">Senior Software Developer · AI Enthusiast · Frontend Architect</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Arun Palanisamy</h1>
          <p className="mt-4 max-w-4xl text-slate-300">
            Product-minded engineer who blends AI systems, frontend architecture, and mobile execution to ship beautiful,
            business-impactful products. Specialized in React ecosystems, agentic workflows, micro frontends, and outcome-driven UX.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setMode("professional")}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition ${
                mode === "professional"
                  ? "border-emerald-300/50 bg-emerald-400/15 text-emerald-200"
                  : "border-white/20 text-slate-300 hover:border-white/40"
              }`}
            >
              Professional Mode
            </button>
            <button
              type="button"
              onClick={() => setMode("personal")}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition ${
                mode === "personal"
                  ? "border-orange-300/50 bg-orange-400/15 text-orange-200"
                  : "border-white/20 text-slate-300 hover:border-white/40"
              }`}
            >
              Personal Mode · Open At Your Own Risk
            </button>
            <span className="rounded-full border border-violet-300/30 px-3 py-1 text-[11px] uppercase tracking-wider text-violet-200">
              {modeTitle}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {mode === "professional" ? (
          <div className="space-y-8">
            <section className="grid gap-4 md:grid-cols-4">
              {professionalMetrics.map((metric) => (
                <article key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-xs uppercase tracking-widest text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{metric.detail}</p>
                </article>
              ))}
            </section>

            <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Capability Map</h2>
                  <span className="rounded-full border border-violet-300/30 px-3 py-1 text-xs text-violet-200">Gamified Skill Radar</span>
                </div>
                <div className="space-y-5">
                  {capabilityTracks.map((track) => (
                    <article key={track.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold">{track.title}</h3>
                        <span className="text-sm text-cyan-200">{track.score}/100</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" style={{ width: `${track.score}%` }} />
                      </div>
                      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-300">
                        {track.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/70 p-6">
                <h2 className="text-2xl font-semibold">Signature Wins</h2>
                <div className="mt-4 space-y-3">
                  {featuredWins.map((win) => (
                    <article key={win.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <h3 className="font-semibold">{win.title}</h3>
                        <span className="rounded-full border border-white/20 px-2 py-1 text-[10px] uppercase tracking-wider text-slate-300">
                          {win.badge}
                        </span>
                      </div>
                      <p className="text-sm text-slate-300">{win.description}</p>
                    </article>
                  ))}
                </div>
              </aside>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">Professional Experience</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {careerTimeline.map((item) => (
                  <article key={item.role} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-widest text-violet-200">{item.period}</p>
                    <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm text-slate-300">{item.company}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-300">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <section className="rounded-3xl border border-orange-300/30 bg-gradient-to-b from-orange-500/10 to-black/40 p-6">
            {!riskAccepted ? (
              <div className="mx-auto max-w-2xl space-y-4 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-orange-200">Personal Zone</p>
                <h2 className="text-3xl font-semibold">Open at Your Own Risk</h2>
                <p className="text-slate-300">
                  This side is unapologetically personal — language, identity, discipline, ethics, and perspectives on geopolitics.
                </p>
                <button
                  type="button"
                  onClick={() => setRiskAccepted(true)}
                  className="rounded-full border border-orange-300/50 bg-orange-400/15 px-5 py-2 text-xs uppercase tracking-wider text-orange-100 hover:bg-orange-400/25"
                >
                  I Understand · Enter Personal View
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-orange-200">Personal View Unlocked</p>
                    <h2 className="mt-2 text-3xl font-semibold">Convictions Beyond Code</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setRiskAccepted(false)}
                    className="rounded-full border border-white/25 px-4 py-2 text-xs uppercase tracking-wider text-slate-200 hover:border-white/50"
                  >
                    Lock Personal View
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <h3 className="text-lg font-semibold">Personal Ethics</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                      {personalStatements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <h3 className="text-lg font-semibold">Contact + Presence</h3>
                    <div className="mt-3 space-y-2 text-sm text-slate-300">
                      <p><span className="text-slate-400">Email:</span> arunpalanisamy21@gmail.com</p>
                      <p><span className="text-slate-400">Phone:</span> +91 94455 28764</p>
                      <p><span className="text-slate-400">Themes:</span> Tamil language, geopolitics, identity, product discipline</p>
                    </div>
                  </article>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
