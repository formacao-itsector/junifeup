import { useCoreStore } from '@store';
import { LanguageEnum, ThemeEnum } from '@types';
import React from 'react';

export const ZustandTab: React.FC = () => {
  //zustand states
  const theme = useCoreStore((state) => state?.theme);
  const language = useCoreStore((state) => state?.language);

  //zustand functions
  const switchTheme = useCoreStore((state) => state.switch_theme);
  const switchLanguage = useCoreStore((state) => state.switch_language);

  //Flags
  const isLightMode = theme === ThemeEnum.Light;
  const isPT = language === LanguageEnum.PT;

  //Body colors
  const bodyElement = document.body;
  bodyElement.style.background = isLightMode ? 'white' : 'rgb(24, 24, 27)';
  bodyElement.style.color = isLightMode ? 'black' : 'white';

  //JSX
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center gap-3 my-8">
        <span className="font-bold text-lg">{isPT ? 'Exemplo de zustand:' : 'Zustand example:'}</span>

        <button
          onClick={() => {
            switchTheme?.();
            switchLanguage?.();
          }}
          className="border-2 border-violet-700 rounded-3xl font-bold text-lg px-[2.5rem] py-2 flex items-center justify-center transition-all hover:px-[2rem] hover:border-violet-700 focus:bg-violet-700"
        >
          {isPT ? 'Clica em mim!' : 'Click on me!'}
        </button>
      </div>
    </div>
  );
};
