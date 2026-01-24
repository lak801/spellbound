import Image from "next/image";
import Logo from "./images/Spellbound Logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#081124] to-[#020617] font-sans text-white flex items-center justify-center p-8">
      <main className="w-full max-w-4xl rounded-2xl bg-white/5 backdrop-blur-md border border-white/6 shadow-2xl p-12">
        <header className="flex items-center gap-6">
          <Image
            src={Logo}
            alt="Spellbound Logo"
            width={84}
            height={84}
            className="rounded-md"
          />
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Spellbound
            </h1>
            <p className="mt-1 text-zinc-300 max-w-xl">
              A cozy, tactical indie board game of arcane duels, cunning rituals
              and unexpected alliances. Summon creatures, cast spells, and outwit
              your opponents in a living fantasy world.
            </p>
          </div>
        </header>

        <section className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Join the adventure</h2>
            <p className="text-zinc-300">
              We're building Spellbound and launching on Kickstarter soon. Follow
              our journey, back the project, and help bring the magic to life.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.kickstarter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-6 py-3 text-black font-semibold shadow hover:scale-[1.02] transition-transform"
              >
                Back on Kickstarter
              </a>

              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-white font-medium hover:bg-white/5 transition-colors"
              >
                Join Discord
              </a>
            </div>

            <p className="text-sm text-zinc-400">
              Subscribe for updates, playtests, and exclusive preview content.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-white/3 to-white/2 p-6 border border-white/6">
            <h3 className="text-lg font-semibold">Quick Features</h3>
            <ul className="mt-4 space-y-3 text-zinc-200">
              <li>• 60–90 minute player-driven matches</li>
              <li>• Unique spell-crafting system with modular components</li>
              <li>• Beautiful hand-drawn art and miniature-friendly scale</li>
              <li>• Solo and cooperative variants</li>
            </ul>

            <div className="mt-6">
              <a
                href="/docs/preview"
                className="text-sm underline text-zinc-300 hover:text-white"
              >
                Read the preview rules
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-white/6 pt-6 text-sm text-zinc-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Spellbound — Made with love</span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-zinc-300 hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-zinc-300 hover:text-white"
            >
              Contact
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
