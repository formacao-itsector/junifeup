import React, { useCallback, useState } from 'react';
import { BlogPostProps } from '@components';
import { Prism as CodePreview } from 'react-syntax-highlighter';
import { codeSnippets } from '@utils';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const useReactPropsStateHelper = () => {
  const [articles, setArticles] = useState<BlogPostProps[]>([
    {
      id: '1',
      title: 'O que são Props?',
      children: (
        <div className="leading-snug pt-3 gap-3">
          <div className="mb-6">
            <ul className="leading-snug text-zinc-400 indent-1 pt-3">
              <li>● São parâmetros passados de um componente pai para os seus componentes filhos.</li>
              <li>● Permitem que os dados fluam de cima para baixo na árvore de componentes.</li>
              <li>● Permitem a reutilização de código.</li>
              <li>● Permitem separação de lógica.</li>
              <li>● São imutáveis ( “algo não está sujeito a mudar/alterar” )</li>
            </ul>
            <div className="leading-snug pt-3 gap-3">
              <div className="mb-6">
                <CodePreview
                  language="tsx"
                  style={duotoneDark}
                  wrapLines
                  wrapLongLines
                  showLineNumbers
                  className="rounded"
                >
                  {codeSnippets.PropsExample}
                </CodePreview>
              </div>
            </div>
          </div>
        </div>
      ),
      visibility: true,
    },
    {
      id: '2',
      title: 'O que é o State?',
      children: (
        <div className="leading-snug pt-3 gap-3">
          <div className="mb-6">
            <ul className="leading-snug text-zinc-400 indent-1 pt-3 flex gap-2 flex-col">
              <li>
                ● O state é um objeto JavaScript que contém os dados que podem ser atualizados pelo componente em React.
                É o responsável por controlar o comportamento dinâmico de um componente, ou seja, as mudanças de
                comportamento que ocorrem ao longo do tempo em uma aplicação.
              </li>
              <li>
                ● Ao contrário dos props, que são passados para o componente de fora, o state é gerido internamente pelo
                componente e pode ser alterado por meio de eventos como cliques do utilizador, chamadas API, entre
                outros.
              </li>
              <li>
                ● A utilização correta do state é crucial para a construção de aplicações React, pois ele permite que um
                componente altere seu comportamento sem precisar ser recriado inteiramente. Isso torna a aplicação mais
                reativa e ajuda a manter a performance do aplicativo.
              </li>
            </ul>
            <div className="leading-snug pt-3 gap-3">
              <div className="mb-6">
                <CodePreview
                  language="tsx"
                  style={duotoneDark}
                  wrapLines
                  wrapLongLines
                  showLineNumbers
                  className="rounded"
                >
                  {codeSnippets.StateExample}
                </CodePreview>
              </div>
            </div>
          </div>
        </div>
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
