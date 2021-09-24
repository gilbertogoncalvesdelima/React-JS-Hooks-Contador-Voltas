# Resumo

hooks é uma forma de manter dados e manipular a execução de instruções em componentes funcionais (lembrando que componentes funcionais somente retornam os elementos que serão mostrados/renderizados na tela) e apenas com javascript essas funções não armazenariam valores.
Hooks sempre começam com "use", como useState e useEffects.

# useState

Ele tira uma "foto" de um dado para o componente funcional, e retorna uma função capaz de alteração esta foto. Toda vez que esta foto é alterada, o componente é renderizado novamente. Esta foto também em react é conhecida como estado interno do componente ou state.

# useHook

Permite ter efeitos colaterais que serão executados na renderização de um componente. Se utilizado sem dependências (ex: useEffect(funcao)), será executado em toda renderização. Se utilizado com dependências vazias (ex: useEffect(funcao, [])), será executado somente na primeira vez que for renderizado (mesmo comportamento de um construtor). E caso seja passado um valor (ex: useEffect(funcao, [a])), será executado somente se a tiver seu valor alterado.

# Font Link Site

Foi utilizado a font, Raleway
https://fonts.google.com

# Link para visualizar o projeto

https://contador-voltas-react-js.netlify.app/
