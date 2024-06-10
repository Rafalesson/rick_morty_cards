# Projeto Rick and Morty Character Explorer

## Introdução

Este projeto é uma aplicação web que permite aos usuários explorar personagens do universo de Rick and Morty. Utilizando a API pública do Rick and Morty, os usuários podem visualizar informações detalhadas sobre cada personagem em um formato de card interativo.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e técnicas:

### HTML5
- **Estrutura Semântica**: Utilização de elementos semânticos do HTML5 para uma melhor acessibilidade e SEO, como `<header>`, `<footer>`, `<nav>`, e `<main>`.
- **Atributos de Acessibilidade**: Uso de atributos `alt` em imagens e `aria-*` para melhorar a acessibilidade.

### CSS3
- **Flexbox**: Emprego do Flexbox para criar layouts flexíveis e responsivos.
- **Media Queries**: Aplicação de media queries para adaptar o layout a diferentes tamanhos de tela, garantindo um design responsivo.

### JavaScript ES6
- **Fetch API**: Uso da Fetch API para realizar requisições assíncronas à API do Rick and Morty e obter dados dos personagens.
- **Async/Await**: Implementação de funções assíncronas com `async` e `await` para um código mais limpo e legível.
- **Manipulação do DOM**: Dinamização do conteúdo da página através da manipulação do DOM para adicionar e atualizar elementos dinamicamente.
- **Event Listeners**: Configuração de ouvintes de eventos para interações do usuário, como rolagem e cliques.
- **Template Literals**: Uso de template literals para inserir variáveis e expressões no HTML de forma mais eficiente.

### API Pública do Rick and Morty
- **Integração com API**: Conexão com a API pública do Rick and Morty para extrair dados em tempo real.
- **Paginação de Dados**: Implementação de lógica de paginação para carregar dados adicionais à medida que o usuário rola a página.
- **Tratamento de Erros**: Gerenciamento de erros na comunicação com a API para garantir que a aplicação continue funcionando mesmo quando ocorrem falhas.

## Funcionalidades

- **Exploração de Personagens**: Os usuários podem navegar por uma lista de personagens, visualizando informações como nome, status, espécie e localização.
- **Carregamento Dinâmico**: À medida que o usuário rola para baixo, novos cards de personagens são carregados automaticamente.
- **Indicadores de Status**: Cada personagem possui um indicador de status que mostra se estão vivos, mortos ou desconhecidos, com cores correspondentes.
- **Rodapé Fixo**: Um rodapé fixo exibe informações de desenvolvimento e permanece visível independentemente da rolagem.
- **Botão de Retorno ao Topo**: Um botão de retorno ao topo é exibido quando o usuário rola para baixo, permitindo uma navegação rápida de volta ao início da página.

## Design Responsivo

O site é totalmente responsivo e adaptado para dispositivos móveis, garantindo uma experiência de usuário consistente em todas as plataformas e tamanhos de tela.

## Execução

Para executar este projeto **[clique aqui](https://rafalesson.github.io/rick_morty_cards/)**

