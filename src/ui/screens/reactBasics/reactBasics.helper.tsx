import React, { useCallback, useState } from 'react';
import { BlogPostProps, BlogTypography, ExportedName, BlogComponents } from '@components';
import ExportedDefault from '../../components/typesOfExports/typesOfExports';

export const useReactBasicsHelper = () => {
  const [articles, setArticles] = useState<BlogPostProps[]>([
    {
      id: '0',
      title: 'ReactJs',
      content:
        'O React facilita a criação de UIs interativas. Facilita no design de cada state da nossa aplicação. O React também vai eficientemente atualizar e renderizar somente os componentes desejados de acordo com certas alterações',
      children: (
        <div>
          <div className="mt-2">
            <BlogTypography.Text content="Em baixo vais encontrar alguns pontos de interesse sobre o React, mas recomendamos-te a explorares a documentação do React." />
            <div className="mt-3">
              <BlogComponents.Link href="https://reactjs.org/docs/getting-started.html" label="React Docs" hasIcon />
            </div>
          </div>

          <div className="mt-2">
            <BlogTypography.Text content="Também deixamos um link para um video que fala sober as origens do React e a sua história." />
            <div className="mt-3">
              <BlogComponents.Link
                href="https://youtu.be/8pDqJVdNa44?si=qNW9mnU1i9D9f4DR"
                label="React History"
                hasIcon
              />
            </div>
          </div>
        </div>
      ),
      visibility: true,
      hideFlag: true,
    },
    {
      id: '1',
      title: 'O que é JSX?',
      content:
        'É a junção de Javascript e XML, é basicamente a renderização do javascript mas com a estrutura do XML. O React esta a ser compilado para dentro do React.CreateElement, o que basicamente mostra que o react esta a criar elementos por debaixo dos panos.',
      children: (
        <div className="mt-3">
          <BlogComponents.Link href="https://reactjs.org/docs/introducing-jsx.html" label="Reactjs - JSX" />
        </div>
      ),
      visibility: true,
    },
    {
      id: '2',
      title: 'ClassName no ReactJs',
      content:
        'A palavra Class é uma keyword reservada do javascript, e como o jsx é compilado em javascript atraves do babel iria ocorrer um erro.',
      visibility: true,
    },
    {
      id: '3',
      title: 'Named Vs. Default Exports',
      children: (
        <div className="leading-snug pt-3 gap-3">
          <div className="mb-6">
            <BlogTypography.Subtitle content="Named Exports" />
            <ul className="list-disc ml-5 text-zinc-400">
              <li>Estes utilizam o nome da function ou class como o seu identificador;</li>
              <li>São imported com o uso dos curly brackets;</li>
              <li>São permitidos vários named exports por ficheiro;</li>
              <li>Com o Typescript podem ser agrupados vários componentes dentro de um ficheiro index.ts.</li>
            </ul>
            <ExportedName />
          </div>
          <div>
            <BlogTypography.Subtitle content="Default Exports" />
            <ul className="list-disc ml-5 text-zinc-400">
              <li>São criados ao adicionar uma lina de export default - [Linha 8];</li>
              <li>Ao serem importados podem ser declarados com qualquer nome;</li>
              <li>É apenas permitido um default export por ficheiro;</li>
              <li>São geralmente utilizados para componentes que vão ser importados somente uma vez.</li>
            </ul>
            <ExportedDefault />
          </div>
          <div className="mt-3">
            <BlogComponents.Link
              href="https://betterprogramming.pub/understanding-the-difference-between-named-and-default-exports-in-react-2d253ca9fc22"
              label="Named Vs. Default Exports"
              hasIcon
            />
          </div>
        </div>
      ),
      visibility: true,
    },
    {
      id: '4',
      title: 'Data Flow no ReactJs',
      content:
        'O data flow é uni-direcional, como o React tem uma relação de componentes pai para filho, passamos os dados de cima para baixo, isto atraves de props.',
      children: (
        <div className="mt-3">
          <BlogComponents.Link
            href="https://dev.to/alexmercedcoder/react-data-flow-understanding-state-and-props-2759"
            label="Data between Components"
            hasIcon
          />
        </div>
      ),
      visibility: true,
    },
    {
      id: '5',
      title: 'O que é a virtual DOM?',
      content:
        'Sempre que acionado, o React cria uma reconstrução virtual da sua aplicação e compara-a com o estado real da sua aplicação (o DOM real) e atualiza apenas as partes que são diferentes, acelerando as atualizações, pois não está a reconstruir as partes que não mudaram. Portanto, quando essas mudanças são acionadas, é conhecido como uma renderização.',
      children: (
        <div className="mt-3">
          <BlogComponents.Link
            href="https://dev.to/alexmercedcoder/react-data-flow-understanding-state-and-props-2759"
            label="VirtualDOM"
            hasIcon
          />
        </div>
      ),
      visibility: true,
    },
    {
      id: '6',
      title: 'Garbage Collector no ReactJs',
      content:
        'O Garbage Collector é uma característica do ReactJS que se encarrega de libertar memória de componentes que já não são necessários. Ele identifica componentes que foram descartados e remove as referências da memória, o que evita o acúmulo de "lixo" e otimiza o desempenho da aplicação.',
      visibility: true,
    },
    {
      id: '7',
      title: 'Event Loop',
      content:
        'No contexto do ReactJS, o Event Loop é responsável por gerenciar as atualizações da interface do usuário de forma eficiente.',
      children: (
        <div className="mt-3">
          <BlogTypography.Text
            content={
              'Quando uma ação é disparada, como um clique em um botão, o ReactJS adiciona a tarefa de atualização à fila de eventos e aguarda a sua vez na fila para ser executada. Isso permite que outras tarefas importantes, como a renderização da interface, sejam realizadas sem serem interrompidas.'
            }
          />
          <div className="mt-3">
            <BlogComponents.Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
              label="Javascript - Event loop"
              hasIcon
            />
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
