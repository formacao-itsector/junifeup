import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ReactAdvanced,
  ReactBasics,
  ReactHooks,
  ReactState,
  ReactTypescript,
  Structure,
  RepoInit,
  ReactPropsState,
  Styling,
} from '@screens';
import { PathListener } from '@components';
import { Paths } from '@types';
import './lib/styles/global.css';
import { Provider } from 'react-redux';
import { useContextelper } from '@hooks';
import { reduxStore } from '@store';

const App = () => {
  const { ThemeContext, LanguageContext, currentTheme, currentLanguage } = useContextelper();
  return (
    <Provider store={reduxStore}>
      <ThemeContext.Provider value={currentTheme}>
        <LanguageContext.Provider value={currentLanguage}>
          <BrowserRouter>
            <Routes>
              <Route path={Paths.root} element={<Structure />}>
                <Route path={Paths.repoInit} element={<RepoInit />} />
                <Route path={Paths.reactBasics} element={<ReactBasics />} />
                <Route path={Paths.reactTypescript} element={<ReactTypescript />} />
                <Route path={Paths.reactPropsState} element={<ReactPropsState />} />
                <Route path={Paths.reactHooks} element={<ReactHooks />} />
                <Route path={Paths.reactState} element={<ReactState />} />
                <Route path={Paths.reactAdvanced} element={<ReactAdvanced />} />
                <Route path={Paths.styling} element={<Styling />} />
              </Route>
            </Routes>
            <PathListener />
          </BrowserRouter>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  );
};

// o createroot necessita que lhe seja passado um container de HTML onde ele possa montar o codigo React, neste caso
// dizemos para usar a div com o id "root" para esse efeito (encontrada no ficheiro /public/template.html), não
// existindo ele cria uma com o mesmo nome

createRoot((document.getElementById('root') as HTMLElement) || document.createElement('root')).render(<App />);
