import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          React State Management Libraries
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[100px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[100px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="flex flex-col align-center justify-center">
        <h2 className="text-2xl font-bold text-center text-sky-400 mb-2">
          Client side
        </h2>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-5 lg:text-center">
          <Link
            href="/state"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              State{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>

          <Link
            href="/zustand"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              Zustand{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>

          <Link
            href="/recoil"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              Recoil{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>

          <Link
            href="/jotai"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              Jotai{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>

          <Link
            href="/all"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              All{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
        </div>
      </div>

      <div className="flex flex-col align-center justify-center">
        <h2 className="text-2xl font-bold text-center text-sky-400 mb-2">
          Server side
        </h2>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-5 lg:text-center">
          <a
            href="/state/server"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              State{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="/zustand/server"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              Zustand{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="/recoil/server"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              Recoil{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="/jotai/server"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              Jotai{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="/all/server"
            className="group items-center justify-center rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-4"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-center`}>
              All{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>
      </div>
    </main>
  );
}
