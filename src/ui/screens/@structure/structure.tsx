import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNav } from '@navigation';
import { Header } from '@components';
import { Paths } from '@types';

export const Structure: FC = () => {
  const { navigateTo } = useNav();

  useEffect(() => {
    navigateTo({ path: Paths.reactIntro });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
