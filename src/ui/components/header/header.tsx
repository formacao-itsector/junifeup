import React, { ReactNode, useMemo } from 'react';
import { useCoreStore } from '@store';
import { useNav } from '@navigation';
import { Paths } from '@types';

export const Header: React.FC = () => {
  const { navigateTo } = useNav();
  const current_path = useCoreStore((state) => state.current_path);

  const titles: Record<Paths | string, { title: string; enabled: boolean }> = {
    [Paths.repoInit]: { title: 'Intro', enabled: true },
    [Paths.reactHooks]: { title: 'Hooks', enabled: true },
    [Paths.reactPropsState]: { title: 'Props & State', enabled: true },
    [Paths.reactTypescript]: { title: 'Typescript', enabled: true },
    [Paths.reactState]: { title: 'State Management', enabled: true },
    [Paths.styling]: { title: 'Styling', enabled: true },
    [Paths.reactBasics]: { title: 'React Basics', enabled: true },
    [Paths.reactAdvanced]: { title: 'Debug & Performance', enabled: true },
  };

  const navLinks = useMemo(() => {
    const links: ReactNode[] = [];

    for (const path in titles) {
      const label = titles[path as Paths]?.title;
      const enabled = titles[path as Paths]?.enabled;
      if (enabled)
        links.push(
          <a
            key={path}
            onClick={() => navigateTo({ path: path as Paths })}
            className="text-zinc-300 flex justify-center font-bold text-lg transition-all hover:text-violet-600 hover:-translate-y-[2px] hover:cursor-pointer"
          >
            {label}
          </a>
        );
    }
    return links;
  }, []);

  return (
    <div className={'mb-16'}>
      <h1 className="h-10 font-extrabold text-4xl flex justify-center mt-12">
        <a
          href="https://github.com/formacao-itsector"
          className="text-violet-600 transition-all hover:text-violet-700 hover:-translate-x-1"
        >
          ITSector |&nbsp;
        </a>
        {titles[current_path]?.title}
      </h1>
      <div className="flex justify-around mt-5 items-center">{navLinks}</div>
    </div>
  );
};
