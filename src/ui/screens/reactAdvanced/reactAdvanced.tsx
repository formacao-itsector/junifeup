import React, { useState } from 'react';
import { MantineProvider, Tabs } from '@mantine/core';
import { Example_1 } from './example_1/example_1';
import { Example_2 } from './example_2/example_2.screen';
import { Example_3 } from './example_3/example_3.core';
import '@mantine/core/styles.css';

export const ReactAdvanced: React.FC = () => {
  const [exampleInView, setExampleInView] = useState<string | null>('first');

  const handleChangeExample = (tab: string | null) => {
    setExampleInView(tab);
  };

  return (
    <MantineProvider forceColorScheme="dark">
      <Tabs value={exampleInView} onChange={(tab) => handleChangeExample(tab)}>
        <Tabs.List grow>
          <Tabs.Tab value="first">Example #1</Tabs.Tab>
          <Tabs.Tab value="second">Example #2</Tabs.Tab>
          <Tabs.Tab value="third">Example #3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first">
          <Example_1 />
        </Tabs.Panel>
        <Tabs.Panel value="second">
          <Example_2 />
        </Tabs.Panel>
        <Tabs.Panel value="third">
          <Example_3 />
        </Tabs.Panel>
      </Tabs>
    </MantineProvider>
  );
};
