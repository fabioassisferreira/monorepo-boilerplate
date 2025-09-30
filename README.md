# Monorepo Boilerplate

Este projeto utiliza uma estrutura de monorepo para organizar múltiplos pacotes e aplicações em um único repositório. Abaixo está uma explicação da organização dos diretórios principais:

## Estrutura de Diretórios

```
packages/
  react-lib/
    src/
      components/
      stories/
      utils/
    .storybook/
    .husky/
    _templates/
    ...
  web-app/
    src/
    public/
    ...
```

### `packages/`

Diretório principal que agrupa todos os pacotes e aplicações do monorepo.

---

#### `react-lib/`

Biblioteca de componentes React reutilizáveis.

- **`src/components/`**: Componentes React organizados por pasta, cada um com seus arquivos de implementação, teste e documentação.
- **`src/stories/`**: Exemplos e histórias para os componentes, usados pelo Storybook.
- **`src/utils/`**: Funções utilitárias compartilhadas pela biblioteca.
- **`.storybook/`**: Configurações do Storybook para documentação e visualização dos componentes.
- **`_templates/`**: Templates para geração automática de arquivos e componentes.
- **`.husky/`**: Hooks de pré-commit para garantir qualidade do código.
- Arquivos de configuração: ESLint, Prettier, Babel, Rollup, TypeScript, etc.

---

#### `web-app/`

Aplicação web principal que consome os componentes da `react-lib`.

- **`src/`**: Código-fonte da aplicação, incluindo páginas, estilos e assets.
- **`public/`**: Arquivos públicos e estáticos.
- Arquivos de configuração: Vite, TypeScript, ESLint, etc.

---

## Como usar

- Para desenvolver componentes reutilizáveis, utilize o diretório `react-lib`.
- Para criar e testar a aplicação final, utilize o diretório `web-app`.
- Os templates em `_templates/` facilitam a criação de novos componentes e arquivos.
- O Storybook está configurado em `.storybook/` para documentação visual dos componentes.

---

## Scripts comuns

Execute os scripts de cada pacote individualmente, por exemplo:

```bash
cd packages/react-lib
npm install
npm run build
```

Ou para a aplicação web:

```bash
cd packages/web-app
npm install
npm run dev
```

---

## Contribuição

1. Crie novos componentes em `react-lib/src/components`.
2. Documente e teste usando os arquivos `.mdx` e `.test.tsx`.
3. Utilize os templates para padronizar a estrutura dos arquivos.
4. Faça commits seguindo os hooks do Husky para garantir qualidade.

---

## Observações

- Cada pacote possui sua própria configuração e dependências.
- O monorepo facilita o compartilhamento de código e a manutenção centralizada.
