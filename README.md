# projeto-1

Aplicação web com Next.js 16, TypeScript e Tailwind CSS 4, criada com o [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

> **Estado atual:** o projeto tem a home de uma landing page de petshop, com dados provisórios. Antes de publicar, substitua o nome, o WhatsApp, o endereço e os horários na constante `CONTATO`, em `src/app/page.tsx`, e o nome nos metadados de `src/app/layout.tsx`.

## Tecnologias

| Tecnologia | Versão |
| --- | --- |
| [Next.js](https://nextjs.org) (App Router) | 16.4.5 |
| [React](https://react.dev) | 19.3.0 |
| [TypeScript](https://www.typescriptlang.org) | 5 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |
| [ESLint](https://eslint.org) | 9 |

## Pré-requisitos

- Node.js 20.9 ou superior
- npm

Se você usa o nvm, selecione uma versão compatível antes de rodar o projeto:

```bash
nvm install 24
nvm use 24
```

## Como rodar

```bash
npm install
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000). A página é atualizada automaticamente quando você edita os arquivos.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Serve o build de produção (rode `npm run build` antes) |
| `npm run lint` | Verifica o código com o ESLint |

O projeto ainda não tem testes automatizados.

## Estrutura

```
projeto-1/
├── public/              # arquivos estáticos, servidos a partir de /
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css  # importa o Tailwind e define as variáveis de tema
│       ├── layout.tsx   # layout raiz, metadados e fontes
│       └── page.tsx     # página inicial (rota /)
├── AGENTS.md            # instruções para agentes de IA, geradas pelo Next.js
├── CLAUDE.md            # instruções para o Claude Code
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Configuração

- **Alias de importação:** `@/*` aponta para `src/*`. Por exemplo, `@/app/layout` resolve para `src/app/layout.tsx`.
- **Tailwind CSS:** é processado pelo plugin `@tailwindcss/turbopack`, configurado em `next.config.ts`, por isso o projeto não tem arquivo do PostCSS. As variáveis de tema ficam em `src/app/globals.css`.
- **Next.js:** `cacheComponents` e `partialPrefetching` estão ativados em `next.config.ts`.
- **Modo escuro:** as cores acompanham a preferência do sistema, por meio de `prefers-color-scheme`.
- **Fontes:** Geist e Geist Mono são carregadas com `next/font` em `src/app/layout.tsx`.

## Próximos passos

- Substituir os dados provisórios e revisar os textos de serviços e diferenciais em `src/app/page.tsx`.
- Remover de `public/` as imagens do template, que a página não usa mais.

## Documentação

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
