import { BlogComponents, BlogPostProps } from '@components';
import React, { useCallback, useState } from 'react';

export const useReactHooksHelper = () => {
  const [articles, setArticles] = useState<BlogPostProps[]>([
    {
      id: '1',
      title: 'O que são Hooks?',
      content:
        'Hooks são uma característica do React que permitem que componentes funcionais tenham estado interno e possam interagir com o ciclo de vida do componente e outras funcionalidades normalmente disponíveis apenas em componentes de classe.',
      visibility: true,
    },
    {
      id: '2',
      title: 'Quais os hooks mais utilizados?',
      children: (
        <div className="leading-snug pt-3 gap-3">
          <div className="mb-6">
            <ul>
              <li>React.useState</li>

              <li>React.useEffect</li>

              <li>React.useRef</li>

              <li>React.useCallback</li>

              <li>React.useMemo</li>
            </ul>
          </div>
        </div>
      ),
      visibility: true,
    },
    {
      id: '3',
      title: 'useState',
      content: 'Permite criar variáveis de estado em um componente de função do React',
      visibility: true,
    },
    {
      id: '4',
      title: 'useEffect',
      content:
        'Permite executar efeitos colaterais em functional componentes ( Did Mount, Did Update, Will Unmount, etc … )',
      visibility: true,
    },
    {
      id: '5',
      title: 'useRef',
      content: 'Permite usar facilmente Referências do React.',
      visibility: true,
    },
    {
      id: '6',
      title: 'useCallback',
      content: 'Previne que callbacks sejam recriados',
      visibility: true,
    },
    {
      id: '7',
      title: 'useMemo',
      content:
        'O hook useMemo é muito semelhante ao useCallback e ajuda a melhorar o desempenho. Mas em vez de ser para callbacks, é para armazenar os resultados de operações mais pesadas.',
      visibility: true,
    },

    {
      id: '8',
      title: 'Links úteis',
      children: (
        <>
          <div className="flex flex-row gap-6 my-3">
            <BlogComponents.Link href="https://react.dev/learn#using-hooks" label="React Hooks Docs" hasIcon />
          </div>
        </>
      ),
      visibility: true,
    },
  ]);

  const handleArticleVisibilityOnClick = useCallback(
    (id: string) => {
      const articlesCopy = [...articles];
      const i = articlesCopy.findIndex((item) => item.id === id);

      articlesCopy[i].visibility = !articles[i].visibility;
      setArticles(articlesCopy);
    },
    [articles]
  );

  return { articles, handleArticleVisibilityOnClick };
};

