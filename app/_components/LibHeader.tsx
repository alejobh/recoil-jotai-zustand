import Link from 'next/link';

interface LibHeaderProps {
  name: 'Zustand' | 'Recoil' | 'Jotai' | 'State' | 'All';
  server?: boolean;
}

export const LibHeader = ({ name, server = false }: LibHeaderProps) => (
  <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:p-4 lg:dark:bg-zinc-800/30 font-bold">
      <Link href="/" className="mr-3 text-sky-400/100">
        Go Back
      </Link>
      {name}
      {server ? ' - Server Rendered' : ''}
    </div>
  </div>
);
