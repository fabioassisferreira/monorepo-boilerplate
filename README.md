# monorepo-boilerplate

O **monorepo-boilerplate** é um projeto base para desenvolvimento de aplicações e bibliotecas em um único repositório, utilizando o conceito de **monorepo**. Ele foi estruturado para facilitar a criação, manutenção e publicação de múltiplos pacotes relacionados, promovendo o reuso de código e padronização de processos.

---

## O que é um Monorepo Lerna?

Um **monorepo** (repositório monolítico) é uma abordagem onde múltiplos projetos (aplicações, bibliotecas, utilitários) coexistem em um único repositório Git. Neste projeto, utilizamos o [Lerna](https://lerna.js.org/) para gerenciar os pacotes internos, facilitando scripts compartilhados, versionamento e publicação.

### Principais Ferramentas do Monorepo

- **Lerna**: Gerencia múltiplos pacotes, automatiza o versionamento e facilita o link entre dependências internas.
- **TypeScript**: Padroniza o desenvolvimento tipado em todos os pacotes.
- **Jest + Testing Library**: Testes unitários para componentes e utilitários.
- **Storybook**: Documentação visual e playground para componentes React.
- **Hygen**: Geração automática de arquivos e componentes via templates.
- **Husky + lint-staged**: Garante qualidade de código antes dos commits.
- **ESLint + Prettier**: Padronização e formatação automática do código.

---

## Como linkar projetos internos como dependência

O Lerna facilita o uso de dependências internas entre os pacotes do monorepo. Por exemplo, a aplicação `web-app` pode consumir componentes da `react-lib` sem precisar publicar a biblioteca em um repositório externo.

### Como funciona o link:

- Ao rodar `lerna bootstrap` ou `npm install` na raiz do monorepo, o Lerna cria links simbólicos entre os pacotes internos, permitindo que eles sejam importados normalmente via `import { Button } from 'react-lib'`.
- Isso garante que qualquer alteração feita em um pacote seja refletida imediatamente nos demais pacotes que o utilizam.

---

## Estrutura de Diretórios

```
.husky/             # Diretório de configuração do Husky
.vscode/            # Diretório de configuração do VSCode
packages/
  react-lib/        # Biblioteca de componentes React reutilizáveis
    _templates/     # Template de criação de arquivos Hygen
    .jestConfig/    # Configuração dos testes automatizados Jest + Testing-library
    .storybook/     # Configurações do Storybook
    src/
      components/   # Diretório de componentes
      utils/        # Diretório de utilitários
    ...

  web-app/          # Aplicação web que consome os componentes da react-lib
    _templates/     # Template de criação de arquivos Hygen
    public/         # Diretório de arquivos públicos
    src/
      assets/
      modules/
      App.tsx
      main.tsx
```

Cada pacote possui seu próprio `package.json`, configurações e dependências.

---

## Husky e lint-staged

O **Husky** é uma ferramenta que permite adicionar _git hooks_ facilmente ao projeto. Neste monorepo, ele é utilizado para rodar verificações automáticas antes dos commits, garantindo que apenas código de qualidade seja versionado.

- **Pre-commit**: Antes de um commit, o Husky executa o **lint-staged**, que por sua vez roda o ESLint e o Prettier apenas nos arquivos modificados.
- Isso garante que todo código commitado esteja formatado e siga as regras de lint definidas no projeto.

**Exemplo de fluxo:**

1. Você faz alterações no código.
2. Ao tentar commitar, o Husky executa o lint-staged.
3. O lint-staged roda ESLint e Prettier nos arquivos alterados.
4. Se houver erros, o commit é bloqueado até que sejam corrigidos.

---

## Visual Studio Code (VSCode)

O **VSCode** é um editor de código-fonte desenvolvido pela Microsoft, amplamente utilizado por desenvolvedores para programar em diversas linguagens. É a IDE recomendada para o desenvolvimento interno de aplicações Frontend Javascript. Ele oferece recursos como realce de sintaxe, autocompletar, depuração, integração com sistemas de controle de versão (como Git), além de uma vasta biblioteca de extensões para personalizar o ambiente de desenvolvimento.

O diretório `.vscode` é uma pasta especial que pode ser criada na raiz de um projeto para armazenar configurações específicas do VSCode. Dentro desse diretório, é possível definir arquivos como `settings.json`, `launch.json` e `tasks.json`, que servem para personalizar o comportamento do editor, configurar depuração, tarefas automatizadas e outras preferências apenas para aquele projeto, **sem afetar as configurações globais** do VSCode. Isso facilita a padronização do ambiente de desenvolvimento entre todos os colaboradores do projeto.

---

## Comandos Úteis

Execute os comandos a partir da raiz do monorepo ou dentro de cada pacote:

- **Instalar dependências:**
  ```bash
  npm install
  ```
- **Rodar Storybook:**
  ```bash
  cd packages/react-lib
  npm run storybook
  ```
- **Rodar testes:**
  ```bash
  cd packages/react-lib
  npm test
  ```
- **Build dos pacotes:**
  ```bash
  cd packages/react-lib
  npm run build
  ```
- **Gerar novo componente (Hygen):**
  ```bash
  npm run generate component NomeDoComponente
  ```

---

## Contribuindo

1. Para desenvolver componentes reutilizáveis, utilize o diretório `react-lib`.
2. Para criar e testar a aplicação final, utilize o diretório `web-app`.
3. Utilize os templates do Hygen para padronizar arquivos.
4. Teste e documente seus componentes.
5. Siga os padrões de desenvolvimento estabelecidos pelo time.
6. Siga o fluxo de Git documentado.

---

## Mais informações

- [Documentação Lerna](https://lerna.js.org/)
- [Documentação Husky](https://typicode.github.io/husky/#/)
- [Documentação lint-staged](https://github.com/okonet/lint-staged)
