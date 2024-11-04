import { BlogComponents, BlogPostProps, BlogTypography, CodeSnippet } from '@components';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { codeSnippets } from '@utils';
import React, { useCallback, useState } from 'react';

export const useRepoInitHelper = () => {
  const [articles, setArticles] = useState<BlogPostProps[]>([
    {
      id: '1',
      title: 'WORKSHOP JUNIFEUP',
      content:
        'Este documento procura explicar como se pode criar, de raíz, sem se utilizar um template pré-definido, um projeto em React com uma configuração simpista.',
      visibility: true,
      hideFlag: true,
    },
    {
      id: '2',
      title: 'Requisitos para instalação',
      content:
        'O projeto foi criado com o Node.js v20.18.2 e com o npm v10.8.2, mas pode ser usada uma versão mais recente, se necessrio.',
      children: (
        <>
          <div className="flex flex-row gap-6 my-3">
            <BlogComponents.Link href="https://nodejs.org/en" label="Nodejs Docs" hasIcon />
            <BlogComponents.Link href="https://www.npmjs.com/" label="Npmjs Docs" hasIcon />
          </div>
          <BlogComponents.Link
            href="https://nodejs.org/download/release/v20.18.0/"
            label="Download Node.js v20.18.2 e npm v10.8.2"
            hasIcon
          />
        </>
      ),
      visibility: true,
    },
    {
      id: '3',
      title: 'Arquitetura geral',
      content: 'Além do React, o projeto utiliza o Webpack como bundler.',
      children: (
        <>
          <div className="flex flex-row gap-6 my-3">
            <BlogComponents.Link href="https://reactjs.org" label="ReactJs" hasIcon />
            <BlogComponents.Link href="https://webpack.js.org" label="Webpack" hasIcon />
          </div>
          <div>
            <BlogTypography.Text
              content={'Como suporte para desenvolvimento, o projeto usa o Typescript, ESLint e o Prettier.'}
            />
            <div className="flex flex-row gap-6 mt-3">
              <BlogComponents.Link href="https://www.typescriptlang.org" label="Typescript" hasIcon />
              <BlogComponents.Link href="https://eslint.org" label="ESLint" hasIcon />
              <BlogComponents.Link href="https://prettier.io" label="Prettier" hasIcon />
            </div>
          </div>
        </>
      ),
      visibility: true,
    },
    {
      id: '4',
      title: 'Instalação passo a passo',
      content: 'Para aprofundar conhecimentos sobre esta categoria consultar a documentação:',
      children: (
        <>
          <div className="flex flex-row gap-6 my-3">
            <BlogComponents.Link href="https://git-scm.com/doc" label="Git Docs" hasIcon />
            <BlogComponents.Link href="https://docs.github.com/en" label="Github Docs" hasIcon />
            <BlogComponents.Link href="https://www.atlassian.com/git/tutorials" label="BitBucket" hasIcon />
            <BlogComponents.Link href="https://docs.npmjs.com/" label="Npmjs Docs" hasIcon />
          </div>
          <ol className="list-decimal text-zinc-400 flex flex-col gap-2">
            <li className="ml-4">
              O processo inicia com a criação de um repositorio vazio numa plataforma de version control, neste caso foi
              usado o GitHub.
              <BlogComponents.Link href="https://github.com/" label="Github" hasIcon />
            </li>
            <li className="ml-4">Num IDE iniciar um novo projeto e clonar o repositorio que foi criado.</li>
            <li className="ml-4">
              Inicializar o projeto.
              <CodeSnippet snippet={codeSnippets.RepoInitNpmInit} />
              <BlogComponents.Link href="https://docs.npmjs.com/cli/v9/commands/npm-init" label="Docs" hasIcon />
            </li>
            <li className="ml-4">
              Instalar as dependências:
              <CodeSnippet snippet={codeSnippets.RepoInitDependencies} />
            </li>
            <li className="ml-4">
              Instalar as dependências de desenvolvimento:
              <CodeSnippet snippet={codeSnippets.RepoInitDevDependencies} />
            </li>
            <li className="ml-4">
              Depois da instalação das dependências é necessário realizar algumas configurações, tema a ser aprofundado
              na categoria seguinte.
            </li>
          </ol>
        </>
      ),
      visibility: true,
    },
    {
      id: '5',
      title: 'Detalhes da configuração',
      content:
        'No ficheiro pacakge.json Além de guardar a árvore de dependências, estão incluidos alguns scripts que ajudam durante o desenvolvimento:',
      children: (
        <>
          <div className="flex flex-row gap-6 my-3">
            <BlogComponents.Link
              href="https://docs.npmjs.com/cli/v9/configuring-npm/package-json"
              label="Package.json Docs"
              hasIcon
            />
          </div>
          <ol className="list-decimal text-zinc-400 flex flex-col gap-3">
            <li className="ml-4">
              <b className="text-white">npm run dev</b>, executa o projeto em modo de desenvolvimento, usando as configs
              do ficheiro webpack.development.js.
            </li>
            <li className="ml-4">
              <b className="text-white">npm run prod</b>, executa o projeto em modo de produção, usando as configs do
              ficheiro webpack.production.js.
            </li>
            <li className="ml-4">
              <b className="text-white">npm run build</b>, remove a pasta /build, compila o projeto na mesma pasta, em
              preparação para ser distribuido ou para ser servido de forma estática.
            </li>
            <li className="ml-4">
              <b className="text-white">npm run serve</b>, serve o projeto de forma estatica, usando os ficheiros na
              pasta /build.
            </li>
            <li className="ml-4">
              <b className="text-white">npm run prettier</b>, executa o prettier no projeto e corrige todos os ficheiros
              que não estejam a cumprir as regras.
            </li>
            <li className="ml-4">
              <b className="text-white">npm run eslint</b>, executa o eslint no projeto e corrige todos os ficheiros que
              não estejam a cumprir as regras.
            </li>{' '}
            <li className="ml-4">
              <b className="text-white">npm run ready</b>, execeuta os dois comandos anteriores, util para se correr
              antes de um commit/pull request.
            </li>
          </ol>
          <CodeSnippet snippet={codeSnippets.RepoInitScripts} />
        </>
      ),
      visibility: true,
    },
    {
      id: '6',
      title: 'Webpack',
      content:
        'A configuração do Webpack inclui uma configuração partilhada (webpack.shared.js) para ser usada nas outras duasconfigurações. Para um ambiente de desenvolvimento (webpack.development.js) e para um ambiente de produção(webpack.production.js). (mais detalhes podem ser encontrado nos ficheiros)',
      children: (
        <div className="mt-3">
          <BlogComponents.Link href="https://webpack.js.org/configuration/" label="Webpack configuration" hasIcon />
        </div>
      ),
      visibility: true,
    },
    {
      id: '7',
      title: 'Typescript',
      content: 'O ficheiro que define como se comporta o compilador é o (tsconfig.js).',
      children: (
        <div className="mt-3">
          <BlogComponents.Link
            href="https://webpack.js.org/configuration/"
            label="Typescript - tsconfig.json docs"
            hasIcon
          />
        </div>
      ),
      visibility: true,
    },
    {
      id: '8',
      title: 'ESLint',
      content:
        'O ESLint serve como a ferramenta principal para identificar e reportar problemas em projetos Javascript. Segue uma quantidade de regras acordadas pela comunidade e existem vários plugins que podem ser adicionados para complementar as regras core.',
      children: (
        <div>
          <BlogTypography.Text
            content={
              'No ficheiros (.eslint.js) e (.eslintignore) é possivel configurar todas as regras que são usadas equais os ficheiros a serem incluidos na analise.'
            }
          />

          <div className="mt-3">
            <BlogComponents.Link
              href="https://eslint.org/docs/latest/use/configure/configuration-files"
              label="ESLint - configuration"
              hasIcon
            />
          </div>
        </div>
      ),
      visibility: true,
    },
    {
      id: '9',
      title: 'Prettier',
      content:
        'O Prettier ajuda a haver regras standard de como o codigo é formatado independentemente do IDE, também configuravelatraves dos ficheiros (.prettierrc.js) (.prettierignore)',
      children: (
        <div className="mt-3">
          <BlogComponents.Link
            href="https://prettier.io/docs/en/configuration.html"
            label="Prettier - configuration"
            hasIcon
          />
        </div>
      ),
      visibility: true,
    },
    {
      id: '10',
      title: 'Design Tool',
      content:
        'Para design o projeto vai recorrer ao Tailwindcss e MantineUI, mas podes utilizar uma outra ferramenta cujo estejas mais familiarizado.',
      children: (
        <div className="flex flex-row gap-6 mt-3">
          <BlogComponents.Link href="https://tailwindcss.com" label="Tailwindcss" hasIcon />
          <BlogComponents.Link href="https://mantine.dev" label="MantineUI" hasIcon />
        </div>
      ),
      visibility: true,
    },
    {
      id: '10',
      title: 'Configs Files',
      children: (
        <div className="flex flex-row gap-6 mt-3">
          <a href="./configs.zip" className={'w-fit group'} download>
            <div className="flex flex-row gap-1 items-center leading-snug transition-colors text-violet-400 group-hover:text-violet-500">
              configs.zip <ExternalLinkIcon className="w-3 h-3" />
            </div>
          </a>
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

