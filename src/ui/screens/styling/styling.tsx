import { Tabs as TabsComponent } from '@components';
import React, { useState } from 'react';
import { Tabs } from './tabs';

export const Styling = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { CSS, SC, Tailwind } = Tabs;

  return (
    <div className="border-solid border-t-2 border-violet-600">
      <div className="flex justify-center items-center flex-col">
        <TabsComponent
          currentTab={currentTab}
          tabs={['CSS', 'Styled Component', 'TailwindCss']}
          onClick={(i) => {
            setCurrentTab(i);
          }}
        />

        {currentTab === 0 && <CSS />}
        {currentTab === 1 && <SC />}
        {currentTab === 2 && <Tailwind />}
      </div>
    </div>
  );
};
