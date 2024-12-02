import React from 'react';

interface TabsProps {
  currentTab: number;
  tabs: string[];
  onClick: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, onClick, currentTab }) => {
  return (
    <div>
      <div className="flex gap-2 mt-3 mb-36 sm:grid-cols-4 items-center cursor-pointer">
        {tabs.map((tab, i) => {
          return (
            <div
              key={i}
              className={`${
                currentTab === i ? 'border-solid border-b-2 border-violet-600 ' : 'text-zinc-500/70'
              } flex justify-center font-bold text-lg transition-all hover:text-violet-600 hover:-translate-y-[2px] `}
              onClick={() => {
                onClick(i);
              }}
            >
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
};
