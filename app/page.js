import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101010] text-white">
      <Navbar />

      <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-16 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-lime-300">
              Team Blog & Portfolio
            </p>
            <div className="animate-fade-left">

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              BUILDING
              <br />
              <span className="text-lime-300">TOGETHER</span>
            </h1>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              We are a team of developers creating modern web experiences
              with Next.js, React, and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/portfolio"
                className="rounded-md bg-lime-300 px-7 py-3 font-bold text-black transition hover:bg-lime-200"
              >
                View Portfolio
              </a>

              <a
                href="/about"
                className="rounded-md border border-gray-600 px-7 py-3 font-bold transition hover:bg-white hover:text-black"
              >
                Meet Our Team
              </a>
            </div>

    
            <div className="mt-14 grid max-w-xl grid-cols-2 gap-8 sm:grid-cols-4">
              <div>
                <p className="text-3xl font-bold text-lime-300">5</p>
                <p className="mt-1 text-sm text-gray-400">Members</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-lime-300">5+</p>
                <p className="mt-1 text-sm text-gray-400">Pages</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-lime-300">1</p>
                <p className="mt-1 text-sm text-gray-400">Team</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-lime-300">∞</p>
                <p className="mt-1 text-sm text-gray-400">Ideas</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-lime-300/20 blur-3xl" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-lime-300 sm:h-96 sm:w-96">
                <img src="/team.jpg"
                  alt="Our team"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}