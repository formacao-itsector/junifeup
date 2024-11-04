import { devtools, persist } from 'zustand/middleware';
import { CoreStore, CoreStoreActions, CoreStoreState } from './core.types';
import { Anything, LanguageEnum, Paths, ThemeEnum } from '@types';
import { produce } from 'immer';
import { create } from 'zustand';

const initialState: CoreStoreState = {
  current_path: Paths.root,
  language: LanguageEnum.EN,
  theme: ThemeEnum.Dark,
};

const actions = (set: Anything): CoreStoreActions => {
  const set_current_path = (p: Paths) => {
    set(
      produce((state: CoreStoreState) => {
        state.current_path = p;
      }),
      false,
      'set_current_path'
    );
  };
  const switch_theme = () => {
    set(
      produce((state: CoreStoreState) => {
        state.theme = state?.theme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark;
      }),
      false,
      'switch_theme'
    );
  };
  const switch_language = () => {
    set(
      produce((state: CoreStoreState) => {
        state.language = state?.language === LanguageEnum.EN ? LanguageEnum.PT : LanguageEnum.EN;
      }),
      false,
      'switch_language'
    );
  };

  return {
    set_current_path,
    switch_theme,
    switch_language,
  };
};

export const useCoreStore = create<CoreStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        ...actions(set),
      }),
      {
        name: 'CORE.STORE',
      }
    ),
    {
      name: 'CORE.STORE',
    }
  )
);
