# WORKSHOP JUNIFEUP

Este documento procura explicar como se pode criar, de raíz, sem se utilizar um template pré-definido, um projeto em
React com uma configuração simpista.

## Requisitos para instalação

O projeto foi criado com o Node.js v20.18.0 e com o npm v10.8.2, mas pode ser usada uma versão mais recente, se
necessário.

[ [https://nodejs.org/en](https://nodejs.org/en) ] [ [https://www.npmjs.com/](https://www.npmjs.com/) ]

[ [Download Node.js v20.18.0 e npm v10.8.2 ](https://nodejs.org/download/release/v20.18.0/) ]

## Arquitetura geral

Além do React [ [https://reactjs.org](https://reactjs.org/) ], o projeto utiliza o Webpack [ [https://webpack.js.org]
(https://webpack.js.org/) ] como o nosso bundler.

Como suporte para desenvolvimento, o projeto usa o Typescript [ [https://www.typescriptlang.org](https://www.typescriptlang.org/)
], ESLint [ [https://eslint.org](https://eslint.org/) ], e o Prettier [ [https://prettier.io](https://prettier.io/) ]

## Instalação passo a passo

> Para aprofundar conhecimentos sobre esta categoria consultar a documentação:
> 
> [ [https://git-scm.com/doc](https://git-scm.com/doc) ]
> 
> [ [https://docs.github.com/en](https://docs.github.com/en) ]
> 
> [ [https://www.atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials) ]
> 
> [ [https://docs.npmjs.com/](https://docs.npmjs.com/) ]

1. O processo inicia com a criação de um repositorio vazio numa plataforma de version control, neste caso foi usado o 
   GitHub.
   [ [https://github.com/](https://github.com/) ]
2. Num IDE iniciar um novo projeto e clonar o repositorio que foi criado.
3. Inicializar o projeto. [ [https://docs.npmjs.com/cli/v9/commands/npm-init](https://docs.npmjs.com/cli/v9/commands/npm-init) ]:
``` 
npm init 
``` 
4. Instalar as dependências:
``` 
npm i react react-dom 
```
5. Instalar as dependências de desenvolvimento:
``` 
npm i -D @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint 
eslint-plugin-react eslint-webpack-plugin html-webpack-plugin prettier ts-loader typescript url-loader 
webpack webpack-cli webpack-dev-server serve
```
6. Depois da instalação das dependências é necessário realizar algumas configurações, tema a ser aprofundado na 
   categoria seguinte

## Detalhes da configuração

### package.json [ [https://docs.npmjs.com/cli/v9/configuring-npm/package-json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json) ]

Além de guardar a árvore de dependências, estão incluidos alguns scripts que ajudam durante o desenvolvimento:

``` npm run dev ``` Executa o projeto em modo de desenvolvimento, usando as configs do ficheiro webpack.development.js.

``` npm run prod ``` Executa o projeto em modo de produção, usando as configs do ficheiro webpack.production.js.

``` npm run build ``` Remove a pasta /build, compila o projeto na mesma pasta, em preparação para ser 
distribuido ou para ser servido de forma estática.

``` npm run serve ``` Serve o projeto de forma estatica, usando os ficheiros na pasta /build

``` npm run prettier ``` Executa o prettier no projeto e corrige todos os ficheiros que não estejam a cumprir as regras.

``` npm run eslint ``` Executa o eslint no projeto e corrige todos os ficheiros que não estejam a cumprir as regras.

``` npm run ready ``` Execeuta os dois comandos anteriores, util para se correr antes de um commit/pull request.

### Webpack [ [https://webpack.js.org/configuration/](https://webpack.js.org/configuration/) ]

A configuração do Webpack inclui uma configuração partilhada (webpack.shared.js) para ser usada nas outras duas 
configurações. Para um ambiente de desenvolvimento (webpack.development.js) e para um ambiente de produção 
(webpack.production.js). (mais detalhe pode ser encontrado nos ficheiros)

### Typescript [ [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) ] 

O ficheiro que define como se comporta o compilador é o (tsconfig.js).

### ESLint [ [https://eslint.org/docs/latest/use/configure/configuration-files](https://eslint.org/docs/latest/use/configure/configuration-files) ]

O ESLint serve como a ferramenta principal para identificar e reportar problemas em projetos Javascript. Segue uma 
quantidade de regras acordadas pela comunidade e existem vários plugins que podem ser adicionados para complementar as 
regras core. No ficheiros (.eslint.js) e (.eslintignore) é possivel configurar todas as regras que são usadas e 
quais os ficheiros a serem incluidos na analise.
 
### Prettier [ [https://prettier.io/docs/en/configuration.html ](https://prettier.io/docs/en/configuration.html ) ]

O Prettier ajuda a haver regras standard de como o codigo é formatado independentemente do IDE, também configuravel 
atraves dos ficheiros (.prettierrc.js) (.prettierignore)

### Design Tools

Para design o projeto vai recorrer ao [Tailwindcss](https://tailwindcss.com) e [MantineUI](https://mantine.dev), mas podes utilizar uma outra ferramenta cujo estejas mais familiarizado.
