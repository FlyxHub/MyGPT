import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import SplitText from "../../src/TextAnimations/SplitText/SplitText"

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

        <header className="flex flex-col items-center gap-9">

          <div className="w-[500px] max-w-[100vw] p-4">
            <SplitText
              text="Welcome to MyGPT"
              className="text-5xl text-center font-bold mb-15 text-gray-700 dark:text-gray-200 pb-2 leading-[1.2]"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <p className="text-center mb-5 text-gray-700 dark:text-gray-200">Powered by</p>
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>

        </header>

        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">

            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              The Development Team:
            </p>

            <ul className="text-center text-gray-700 dark:text-gray-200">
              <li>Flyx</li>
              <li>4DollarOrphan</li>
              {/* Sign here and PR to be listed on Github*/}
            </ul>

          </nav>
        </div>

        <div>
          <a
            href="https://discord.gg/WRvXgHqrak"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl border border-gray-700 hover:border-blue-500 hover:shadow-[0_0_16px_4px_rgba(59,130,246,0.6)] transition-shadow inline-block text-center"
          >
            Join the Discord!
          </a>
        </div>
      </div>
    </main>
  );
}
