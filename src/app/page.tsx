import Avatar from "@/components/Avatar";
import Section from "@/components/Section";
import { getAssetPath } from "@/lib/utils";

export default function Home() {
  return (
    <main className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10 md:py-16">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6">
            <Avatar
              src={getAssetPath("/avatar.jpg")}
              alt="Ziyan (Olivia) He"
              size="lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
            Ziyan (Olivia) He
          </h1>
          <p className="text-lg text-black/70 dark:text-white/70">
            Software Engineer
          </p>
          <p className="text-md text-black/50 dark:text-white/50">
            Vancouver, BC
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm text-black/60 dark:text-white/60">
            <a href="mailto:oliviahe0111@gmail.com" className="hover:text-primary transition-colors">
              oliviahe0111@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+17788669837" className="hover:text-primary transition-colors">
              (778) 866-9837
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/ziyan-he-2959a7233/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://github.com/oliviahe0111"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* About Section */}
          <Section id="about" title="About">
            <p className="text-base text-black/80 dark:text-white/80 leading-relaxed">
              Highly motivated Software Engineer with hands-on experience in full-stack development, data engineering, and testing.
              Skilled at building scalable systems, optimizing pipelines, and delivering high-quality software products.
              Strong background in distributed systems, cloud-native applications, and end-to-end automation.
            </p>
          </Section>

          {/* Experience Section */}
          <Section id="experience" title="Experience">
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  Software Engineer Intern — The Gist
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50">
                  Jul 2024 – Present • Vancouver, BC
                </p>
                <ul className="text-base text-black/80 dark:text-white/80 mt-2 space-y-1 list-disc list-inside">
                  <li>Delivered full software development lifecycle for a cross-platform monorepo (Next.js + React Native/Expo)</li>
                  <li>Built reusable modules and scalable architecture</li>
                  <li>Implemented real-time search algorithms with Algolia, enabling low-latency query suggestions</li>
                  <li>Integrated Supabase database for personalized feeds and secure data management</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  Data Engineer Co-op — CIBC
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50">
                  Sep 2024 – Apr 2025 • Toronto, ON
                </p>
                <ul className="text-base text-black/80 dark:text-white/80 mt-2 space-y-1 list-disc list-inside">
                  <li>Designed and tested automation workflows with PowerShell + Ansible, retrieving credentials securely via HashiCorp Vault</li>
                  <li>Optimized SQL Server data pipeline with incremental scanning and efficient queries, reducing runtime by 95%</li>
                  <li>Automated Power BI workspace creation with REST APIs, eliminating manual ServiceNow tasks</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  Software Test Engineer Co-op — Corvus Energy
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50">
                  Sep 2022 – Dec 2022 • Vancouver, BC
                </p>
                <ul className="text-base text-black/80 dark:text-white/80 mt-2 space-y-1 list-disc list-inside">
                  <li>Developed unit tests in Python (Pytest) for IoT battery APIs, boosting coverage by 80%</li>
                  <li>Performed backend integration testing on Flask APIs</li>
                  <li>Maintained CI/CD workflows in Azure Pipelines for reliable builds, tests, and deployments</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Education Section */}
          <Section id="education" title="Education">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium text-black dark:text-white">
                University of British Columbia — Vancouver, BC
              </h3>
              <p className="text-sm text-black/50 dark:text-white/50">
                Expected Graduation: Dec 2025
              </p>
              <p className="text-base text-black/80 dark:text-white/80 mt-1">
                Bachelor of Science in Computer Science, Minor in Data Science
              </p>
              <p className="text-base text-black/80 dark:text-white/80">
                GPA: 3.9
              </p>
              <p className="text-sm text-black/70 dark:text-white/70 mt-2">
                Coursework: Software Engineering, Operating Systems, Data Structures & Algorithms, Computer Vision
              </p>
            </div>
          </Section>

          {/* Skills Section */}
          <Section id="skills" title="Technical Skills">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-black/70 dark:text-white/70 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL", "R", "C", "PowerShell", "HTML/CSS"].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center rounded bg-primary/10 dark:bg-primary/20 px-3 py-1"
                    >
                      <p className="text-sm font-medium text-black/80 dark:text-white/80">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-black/70 dark:text-white/70 mb-2">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Express", "Flask", "JUnit", "Mocha/Chai", "Pytest", "Java Swing", "Pygame"].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center rounded bg-primary/10 dark:bg-primary/20 px-3 py-1"
                    >
                      <p className="text-sm font-medium text-black/80 dark:text-white/80">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-black/70 dark:text-white/70 mb-2">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Oracle SQL", "Supabase", "MongoDB", "SQL Server", "Azure", "Ansible", "Git/GitHub", "VSCode", "IntelliJ"].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center rounded bg-primary/10 dark:bg-primary/20 px-3 py-1"
                    >
                      <p className="text-sm font-medium text-black/80 dark:text-white/80">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Projects Section */}
          <Section id="projects" title="Projects">
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <a
                  href="https://github.com/oliviahe0111/FollowUpFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-black dark:text-white hover:text-primary transition-colors w-fit"
                >
                  InfiniteBoardAI ↗
                </a>
                <p className="text-sm text-black/50 dark:text-white/50">
                  Next.js, Supabase, Prisma, PostgreSQL, Vercel • Sep 2025
                </p>
                <ul className="text-base text-black/80 dark:text-white/80 mt-2 space-y-1 list-disc list-inside">
                  <li>Built full-stack MVP for interactive brainstorming boards with AI-generated notes and draggable infinite canvas</li>
                  <li>Designed RESTful APIs and PostgreSQL schema with Prisma ORM</li>
                  <li>Integrated secure Google OAuth authentication with middleware</li>
                  <li>Deployed to Vercel with CI/CD pipelines for high availability</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <a
                  href="https://github.com/tomcsvan/EigenSim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-black dark:text-white hover:text-primary transition-colors w-fit"
                >
                  Algorithmic Trading Backtesting Platform ↗
                </a>
                <p className="text-sm text-black/50 dark:text-white/50">
                  PHP, Oracle SQL, C++ • Aug 2025
                </p>
                <ul className="text-base text-black/80 dark:text-white/80 mt-2 space-y-1 list-disc list-inside">
                  <li>Designed Oracle SQL schema for users, strategies, backtests, trades, and reports</li>
                  <li>Built C++ backtest engines for trade processing and metrics computation</li>
                  <li>Developed PHP web interface to launch simulations and display reports</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <a
                  href="https://github.com/oliviahe0111/mern-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-black dark:text-white hover:text-primary transition-colors w-fit"
                >
                  Baking Blog ↗
                </a>
                <p className="text-sm text-black/50 dark:text-white/50">
                  React, Node.js, Express, MongoDB • Apr 2024
                </p>
                <ul className="text-base text-black/80 dark:text-white/80 mt-2 space-y-1 list-disc list-inside">
                  <li>Built full-stack blogging platform with React frontend and dynamic homepage</li>
                  <li>Implemented REST APIs with Node.js/Express and MongoDB for CRUD and secure authentication</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
