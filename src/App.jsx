const heroStats = [
  { label: "Experience", value: "7+ Years", detail: "Product-focused shipping" },
  { label: "Apps Delivered", value: "10+", detail: "Web + Mobile + SaaS" },
  { label: "AI Systems", value: "LLM / RAG", detail: "Agents, analytics, automation" },
  { label: "Hackathon", value: "1st Place", detail: "22+ teams at company event" },
];

const capabilityTracks = [
  {
    title: "LLM Engineering",
    score: 94,
    bullets: [
      "RAG architecture, retrieval strategy, and eval loops",
      "Fine-tuning workflows and prompt optimization",
      "Copilot-style assistants integrated into product workflows",
    ],
  },
  {
    title: "Agentic Product Automation",
    score: 91,
    bullets: [
      "Marketing agents for campaign orchestration and follow-ups",
      "Workflow engines for loyalty/rewards decision trees",
      "Conversational automation for customer support",
    ],
  },
  {
    title: "Frontend + Mobile Excellence",
    score: 96,
    bullets: [
      "React, Next.js, Tailwind, React Native",
      "Component systems and reusable UX architecture",
      "High-performance interfaces with measurable conversion uplift",
    ],
  },
];

const featuredWins = [
  {
    title: "Company Hackathon — 1st Place",
    description:
      "Won first place among 22+ teams by building a self-hosted RAG solution with end-to-end ownership across UI, data pipelines, and backend orchestration.",
    badge: "Winner",
  },
  {
    title: "RAG Auto Reporting + Dynamic Charts",
    description:
      "Designed an internal auto-reporting system that converts operational data into RAG-grounded summaries and dynamic chart narratives for faster decision-making.",
    badge: "AI Impact",
  },
  {
    title: "Contractor Rewards Business Lift",
    description:
      "Delivered 30% growth in first-time conversions and 30% increase in invoice submissions, contributing to a 10% revenue uplift.",
    badge: "Revenue",
  },
];

const timeline = [
  {
    role: "Senior Software Developer",
    company: "BI WORLDWIDE",
    period: "Dec 2022 – Present",
    points: [
      "Led Contractor Rewards as a frontend-first, full-stack owner including mobile delivery.",
      "Integrated LLM-powered assistants and automation layers for loyalty engagement.",
      "Drove architecture decisions for multi-tenant SaaS foundations in Phoenix/Channel Smart 2.0.",
    ],
  },
  {
    role: "Co-founder & Full Stack Developer",
    company: "To One App",
    period: "Jul 2022 – Dec 2022",
    points: [
      "Built social-commerce MVP connecting decentralized producers with consumer demand.",
      "Designed profit-sharing and marketplace mechanics with product-first thinking.",
    ],
  },
  {
    role: "Senior Software Developer (Freelance)",
    company: "Meetmile Stone Designs",
    period: "Jul 2019 – Jul 2022",
    points: [
      "Delivered 6+ SaaS/e-commerce products across healthcare and delivery domains.",
      "Mentored developers and established quality standards for scalable shipping.",
    ],
  },
];

const personalSide = [
  "Writing on geopolitics, culture, and technology power shifts.",
  "Deep advocacy for Tamil language, heritage, and modern relevance.",
  "Sports mindset: basketball + volleyball discipline applied to product execution.",
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl" />
        <div className="absolute right-[-8%] top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <header className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-violet-300">Senior Software Developer · AI Product Builder</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Arun Palanisamy</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Building elite, revenue-focused digital products with React, mobile platforms, and production-grade AI systems.
            I combine product judgment with full-stack execution, from LLM/RAG innovation to polished UX that people love.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
            <span className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Professional Mode</span>
            <span className="rounded-full border border-orange-300/40 bg-orange-400/10 px-4 py-2 text-orange-200">Personal Mode · Open at your own risk</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-6 pb-16">
        <section className="grid gap-4 md:grid-cols-4">
          {heroStats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Gamified Capability Dashboard</h2>
              <span className="rounded-full border border-violet-300/30 px-3 py-1 text-xs text-violet-200">Live Skill Map</span>
            </div>
            <div className="space-y-5">
              {capabilityTracks.map((track) => (
                <div key={track.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
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
                </div>
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
          <h2 className="text-2xl font-semibold">Professional Journey</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {timeline.map((item) => (
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

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Personal Side</h2>
            <p className="mt-2 text-sm text-slate-300">
              Concern, conviction, and unapologetically personal reflections — where geopolitics, language, and identity meet.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {personalSide.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-4 space-y-3 text-sm">
              <p><span className="text-slate-400">Email:</span> arunpalanisamy21@gmail.com</p>
              <p><span className="text-slate-400">Phone:</span> +91 94455 28764</p>
              <p><span className="text-slate-400">Focus:</span> React, React Native, LLM apps, Fine-tuning, Agentic workflows</p>
              <p><span className="text-slate-400">Languages:</span> English, Tamil</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
