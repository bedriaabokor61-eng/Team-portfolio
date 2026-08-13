"use client"

import Link from "next/link"

const TEAM = [
  {
    name: "Victor Kichwen",
    role: "About Page & Docker Lead",
    bio: "Focused on the team's story, documentation, Docker setup and making sure our projects are easy to run and understand.",
    avatar:
      "https://i.pinimg.com/736x/e1/c1/79/e1c17923503767d63d53575e36f9afa9.jpg",
  },
  {
    name: "Kinyira Millicent",
    role: "Contact & CI/CD Lead",
    bio: "Responsible for communication experiences, form validation, automated workflows and reliable deployments.",
    avatar:
      "https://i.pinimg.com/736x/ce/df/3b/cedf3b4924081572db987ebcaf0ee8b9.jpg",
  },
  {
    name: "Mervyn Maina",
    role: "Home & Project Setup",
    bio: "Works on project structure, routing and creating smooth experiences from the first page a visitor sees.",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Mervyn&backgroundColor=d1d4f9",
  },
  {
    name: "Badria Abokor",
    role: "Frontend Developer",
    bio: "Focused on shared components, navigation and building clean, responsive interfaces across the project.",
    avatar:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Badria&backgroundColor=ffd5dc",
  },
  {
    name: "Henry Njuguna",
    role: "Blog & Content",
    bio: "Works on content experiences, blog structure and presenting information in a simple and engaging way.",
    avatar:
      "https://i.pinimg.com/736x/43/0b/03/430b032a73a9cabaaf1c86ece2c226bf.jpg",
  },
]
const VALUES = [
  {
    number: "01",
    title: "Clarity",
    description:
      "We believe great digital experiences should feel simple, understandable and intentional.",
  },
  {
    number: "02",
    title: "Collaboration",
    description:
      "Different ideas make better products. We work together, review each other's work and learn as a team.",
  },
  {
    number: "03",
    title: "Curiosity",
    description:
      "We keep learning, experimenting and finding better ways to solve problems.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pb-32 lg:pt-28">
            <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                  About us
                </p>

                <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                  We build things
                  <br />
                  <span className="text-neutral-400 dark:text-neutral-600">
                    together.
                  </span>
                </h1>
              </div>

              <div className="max-w-sm lg:pb-2">
                <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
                  We are a group of creative and curious people who enjoy
                  turning ideas into useful digital experiences.
                </p>

                <div className="mt-8 h-px w-16 bg-neutral-900 dark:bg-white" />

                <p className="mt-5 text-sm leading-6 text-neutral-500 dark:text-neutral-500">
                  Designers, developers and problem solvers working toward
                  better digital experiences.
                </p>
              </div>
            </div>

            {/* Decorative line */}
            <div className="mt-20 border-t border-neutral-200 dark:border-neutral-800" />
          </div>
        </section>

        {/* OUR STORY */}
        <section className="bg-neutral-50 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Our story
                </p>

                <h2 className="mt-5 max-w-sm text-4xl font-semibold tracking-tight sm:text-5xl">
                  Small team.
                  <br />
                  Big ideas.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-2xl font-medium leading-relaxed tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                  We believe good work comes from people who care about what
                  they create.
                </p>

                <div className="mt-8 space-y-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                  <p>
                    Our team brings together different skills, perspectives and
                    ideas. We collaborate on projects, solve problems together
                    and continuously improve the way we work.
                  </p>

                  <p>
                    From planning and design to development and deployment,
                    everyone contributes to creating experiences that are
                    useful, accessible and enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  What guides us
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  How we work
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                The principles behind the decisions we make and the products
                we build.
              </p>
            </div>

            <div className="grid border-t border-neutral-200 dark:border-neutral-800 md:grid-cols-3">
              {VALUES.map((value) => (
                <article
                  key={value.number}
                  className="border-b border-neutral-200 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-neutral-800"
                >
                  <span className="text-sm text-neutral-400">
                    {value.number}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-neutral-50 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                The team
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Meet the talented
                <br />
                people behind it all.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 dark:text-neutral-400">
                Every person brings something different to the table. Together,
                we turn ideas into meaningful experiences.
              </p>
            </div>
			</div>

           {/* Team grid */}
<div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
  {TEAM.map((member, index) => (
    <article key={member.name} className="group">

      {/* ANIMATED AVATAR CARD */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 via-white to-neutral-200 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800">

        {/* Floating decoration */}
        <div className="absolute left-8 top-8 h-3 w-3 animate-pulse rounded-full bg-orange-300/70" />

        <div
          className="absolute right-10 top-14 h-2 w-2 animate-pulse rounded-full bg-purple-300/70"
          style={{ animationDelay: "700ms" }}
        />

        <div
          className="absolute bottom-20 left-10 h-2 w-2 animate-pulse rounded-full bg-blue-300/70"
          style={{ animationDelay: "1200ms" }}
        />

        {/* Background circle */}
        <div className="absolute left-1/2 top-[42%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-inner dark:bg-neutral-800 sm:h-64 sm:w-64" />

        {/* Rotating ring */}
        <div className="absolute left-1/2 top-[42%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-neutral-300 dark:border-neutral-700 sm:h-72 sm:w-72" />

        {/* Anime avatar */}
        <div className="absolute left-1/2 top-[42%] w-52 -translate-x-1/2 -translate-y-1/2 animate-[float_4s_ease-in-out_infinite] transition-transform duration-500 group-hover:scale-110 sm:w-60">
          <img
            src={member.avatar}
            alt={`${member.name} anime avatar`}
            className="h-full w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Decorative square */}
        <div className="absolute left-[18%] top-[35%] h-4 w-4 rotate-45 rounded-sm border border-neutral-300 dark:border-neutral-700" />

        {/* Decorative circle */}
        <div className="absolute right-[18%] top-[28%] h-3 w-3 rounded-full border border-neutral-300 dark:border-neutral-700" />

        {/* Decorative square */}
        <div className="absolute bottom-[20%] right-[15%] h-5 w-5 rotate-12 rounded-md border border-neutral-300 dark:border-neutral-700" />

        {/* Member number */}
        <div className="absolute bottom-5 left-5">
          <span className="text-5xl font-semibold tracking-tighter text-neutral-200 dark:text-neutral-800">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

      </div>

      {/* Member information */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold tracking-tight">
          {member.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {member.role}
        </p>

        {/* Small accent line */}
        <div className="mt-3 h-px w-8 bg-neutral-300 transition-all duration-300 group-hover:w-16 dark:bg-neutral-700" />

        <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500 dark:text-neutral-400">
          {member.bio}
        </p>
      </div>

    </article>
  ))}
</div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
            <div className="border-t border-neutral-200 pt-16 dark:border-neutral-800 lg:pt-24">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Join us
                  </p>

                  <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-none tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                    We&apos;re looking for
                    <br />
                    <span className="text-neutral-400 dark:text-neutral-600">
                      talented people.
                    </span>
                  </h2>
                </div>

                <div>
                  <p className="max-w-md text-base leading-7 text-neutral-600 dark:text-neutral-400">
                    Great teams are always growing. If you enjoy learning,
                    creating and solving interesting problems, we would love
                    to hear from you.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Get in touch

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
          <div>
            <p className="text-sm font-semibold">Team Portfolio</p>
            <p className="mt-1 text-xs text-neutral-500">
              Building, learning and growing together.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
            <Link
              href="/"
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}