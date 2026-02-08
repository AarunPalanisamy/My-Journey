const highlights = [
  {
    label: "Years Experience",
    value: "7+",
    detail: "SaaS, loyalty, consumer apps",
  },
  {
    label: "Products Shipped",
    value: "10+",
    detail: "Revenue-ready builds",
  },
  {
    label: "Platforms",
    value: "Web & Mobile",
    detail: "React, React Native, PWA",
  },
];

const expertise = [
  {
    title: "AI & Product Innovation",
    items: [
      "AI Agents · Agentic AI · Generative AI",
      "Microsoft Copilot · Workflow Automation",
      "RAG · Fine Tuning",
    ],
  },
  {
    title: "Frontend Engineering & UX",
    items: [
      "React · Next.js · React Native",
      "Tailwind CSS · Progressive Web Apps",
      "Component-driven design systems",
    ],
  },
  {
    title: "Algorithms & Systems",
    items: [
      "Data Structures · Problem Solving",
      "Node.js · Fastify · PostgreSQL",
      "MongoDB · AWS · Knex.js",
    ],
  },
];

const experiences = [
  {
    role: "Senior Software Developer",
    org: "BI WORLDWIDE (Contractor Rewards & Phoenix)",
    timeframe: "Dec 2022 – Present",
    highlights: [
      "Built Contractor Rewards frontend with React + Tailwind; delivered reusable UI components and launched iOS/Android app end-to-end.",
      "Lifted first-time user conversions by 30% and invoice submissions by 30%, driving 10% revenue growth.",
      "Core engineer for Channel Smart 2.0 multi-tenant SaaS platform, owning architecture and scale-up to production.",
      "Integrated AI-powered agents and Copilot-style workflows to automate loyalty journeys.",
    ],
  },
  {
    role: "Co-founder & Full Stack Developer",
    org: "To One App (Startup)",
    timeframe: "Jul 2022 – Dec 2022",
    highlights: [
      "Built a social-commerce MVP connecting consumers to decentralized producers with profit-sharing models.",
    ],
  },
  {
    role: "Senior Software Developer (Freelance)",
    org: "Meetmile Stone Designs",
    timeframe: "Jul 2019 – Jul 2022",
    highlights: [
      "Delivered SaaS and e-commerce solutions (CareRakshak, FreshToHome Delivery) using React, React Native, AWS, MongoDB, and Node.js.",
      "Mentored junior developers on coding standards, design best practices, and code reviews.",
      "Scaled a freelance practice into 6+ successful client projects across SaaS and commerce.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "GyanMatrix Technologies",
    timeframe: "Feb 2018 – Jan 2019",
    highlights: [
      "Enhanced UI performance for NeonMob collectible gaming platform.",
      "Rebuilt Loany fintech experience in React Native for a mobile-first upgrade.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Juspay Technologies",
    timeframe: "Jun 2017 – Jan 2018",
    highlights: [
      "Built scalable features in PureScript and Haskell.",
      "Implemented the Juspay Fuel App as a cross-platform PWA.",
    ],
  },
];

const achievements = [
  "Hackathon Winner: Built a self-hosted RAG model in Databricks, covering UI, AI, and backend layers.",
  "Product Impact: Drove 30% increase in invoice submissions and repeat engagement for Contractor Rewards.",
  "UI/UX Standards: Established atomic components architecture adopted across Phoenix.",
  "Conversational AI: Reduced customer query pain points by 80% with a chatbot for Contractor Rewards.",
];

const certifications = [
  "Microsoft Copilot Certification",
  "UpGrad – Generative AI Course",
  "Technology for Product Managers (LinkedIn Learning)",
  "Characteristics of Great Scrum Master (LinkedIn Learning)",
];

const personalArticles = [
  {
    title: "The Quiet Power of Tamil: A Language Built for Eternity",
    summary:
      "An exploration of Tamil as a living archive of identity, philosophy, and cultural resilience.",
  },
  {
    title: "Geo-Politics in a Multipolar World",
    summary:
      "Observations on how technology, energy, and culture will redraw global power lines.",
  },
  {
    title: "A Personal Manifesto on Craft",
    summary:
      "Why speed matters, but craft keeps products alive long after launch.",
  },
];

const contactLinks = [
  { label: "Email", value: "arunpalanisamy21@gmail.com" },
  { label: "Phone", value: "+91 94455 28764" },
  { label: "GitHub", value: "github.com/arunpalanisamy" },
  { label: "LinkedIn", value: "linkedin.com/in/arunpalanisamy" },
  { label: "Medium", value: "medium.com/@arunpalanisamy" },
];

function App() {
  return (
    <div className="min-h-screen bg-midnight font-[Manrope] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-electric/40 blur-[120px]" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/30 blur-[140px]" />
        </div>
        <header className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-16 pt-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">
              Senior Software Developer
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Arun Palanisamy
              <span className="block text-xl font-medium text-white/70 md:text-2xl">
                Product Enthusiast · AI Powered Full-Stack Specialist
              </span>
            </h1>
            <p className="max-w-xl text-base text-white/70">
              Product-focused engineer with 7+ years turning ambiguous ideas into scalable, revenue-ready products. I blend
              frontend-first UX craft with end-to-end backend ownership and AI-driven innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
                Professional
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
                Personal · Open at your own risk
              </span>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur">
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {contactLinks.map((link) => (
                <li key={link.label} className="flex items-center justify-between gap-3">
                  <span>{link.label}</span>
                  <span className="text-white">{link.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>

      <main className="mx-auto max-w-6xl space-y-20 px-6 pb-20">
        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-ink/60 p-6 shadow-lg shadow-black/20"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-white/70">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Professional Profile</h2>
            <p className="text-white/70">
              Known for sharp product judgment, strong system design, and execution speed. I build things users actually
              adopt, with measurable growth across loyalty, rewards, fintech, and consumer SaaS platforms.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {expertise.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Achievements</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {achievements.map((achievement) => (
                <li key={achievement} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  {achievement}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Professional Experience</h2>
            <span className="text-sm text-white/60">End-to-end product ownership</span>
          </div>
          <div className="space-y-6">
            {experiences.map((role) => (
              <article key={role.org} className="rounded-2xl border border-white/10 bg-ink/50 p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{role.role}</h3>
                    <p className="text-sm text-white/70">{role.org}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">{role.timeframe}</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <p className="mt-4 text-sm text-white/70">
              B.Tech — Information Technology, Karpagam College of Engineering, Tamil Nadu (2018)
            </p>
            <h3 className="mt-6 text-lg font-semibold">Certifications</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {certifications.map((certification) => (
                <li key={certification}>• {certification}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Additional Information</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Languages: English, Tamil.</li>
              <li>Awards: Hosted 10+ coding contests; HackerRank bronze medals.</li>
              <li>Hobbies: Amateur multi-sport athlete with a passion for basketball and volleyball.</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/70">
                “Elite products are built at the intersection of empathy, systems thinking, and decisive execution.”
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-black/20 p-6">
            <h2 className="text-2xl font-semibold">Personal Space</h2>
            <p className="mt-3 text-sm text-white/70">
              Everything here is personal. Open at your own risk — stories, reflections, and bold takes that keep me
              grounded.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p>• Concern: Building humane technology while staying fiercely competitive.</p>
              <p>• Current focus: The greatness of Tamil language & the reshaping of global geopolitics.</p>
              <p>• Moodboard: Basketball courts, late-night sprints, and high-conviction product bets.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Personal Articles</h2>
            <div className="grid gap-4">
              {personalArticles.map((article) => (
                <article key={article.title} className="rounded-2xl border border-white/10 bg-ink/40 p-5">
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{article.summary}</p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:border-white/60 hover:text-white"
                  >
                    Read draft
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2024 Arun Palanisamy. Crafted for elite product storytelling.</p>
          <p>React · Tailwind CSS · Mobile-ready by design</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
