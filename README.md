# Patas & Cia: landing page de petshop

Site institucional de uma página para um petshop de cães e gatos, feito com Next.js 16, TypeScript e Tailwind CSS 4. O objetivo do site é apresentar os serviços e levar o visitante a agendar um horário pelo WhatsApp.

O site é só de apresentação. Não há backend, banco de dados, formulários, login ou agendamento online, e todo o conteúdo fica no código.

> **Estado atual:** "Patas & Cia" é um nome provisório, e os dados de contato são fictícios. Antes de publicar, siga os passos em [Personalização](#personalização).

## O que a página tem

| Seção | Conteúdo |
| --- | --- |
| Cabeçalho | Logo, navegação por âncoras e botão do WhatsApp, fixo no topo |
| Início | Título, chamada para agendar e ilustração em SVG de um cachorro e um gato |
| Serviços | Banho e tosa, consulta veterinária, hospedagem, ração e acessórios |
| Diferenciais | Motivos para escolher o petshop |
| Como funciona | Os três passos do agendamento |
| Contato | Endereço, horários, telefone e botão do WhatsApp |
| Rodapé | Direitos autorais e links de navegação |

O layout é responsivo, as cores acompanham o modo claro ou escuro do sistema, e a rolagem suave respeita a preferência de movimento reduzido. Os botões de agendamento abrem o WhatsApp com uma mensagem já preenchida.

## Tecnologias

| Tecnologia | Versão |
| --- | --- |
| [Next.js](https://nextjs.org) (App Router, Turbopack) | 16.4.5 |
| [React](https://react.dev) | 19.3.0 |
| [TypeScript](https://www.typescriptlang.org) | 5 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |
| [ESLint](https://eslint.org) | 9 |

A página é feita inteiramente com Server Components, sem `"use client"`. Ícones e ilustrações são SVGs escritos direto no código, sem biblioteca de componentes.

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

## Personalização

Os textos e dados do site ficam em constantes no início de `src/app/page.tsx`:

| Constante | O que define |
| --- | --- |
| `CONTATO` | Nome, WhatsApp, telefone, endereço, horários e mensagem inicial do WhatsApp |
| `SERVICOS` | Cartões da seção de serviços |
| `DIFERENCIAIS` | Itens da seção de diferenciais |
| `PASSOS` | Etapas da seção "Como funciona" |
| `NAVEGACAO` | Links do cabeçalho e do rodapé |
| `ANO` | Ano exibido no rodapé, que não muda sozinho |

O campo `whatsapp` deve ter apenas números, com o código do país e o DDD, como em `5511999999999`.

O nome do petshop também aparece no título e na descrição dos metadados, em `src/app/layout.tsx`. As cores ficam em `src/app/globals.css`.

## Estrutura

```
projeto-1/
├── .agents/, .claude/   # skills e regras para agentes de IA
├── public/              # arquivos estáticos, servidos a partir de /
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css  # importa o Tailwind e define as cores do tema
│       ├── layout.tsx   # layout raiz, metadados e fontes
│       └── page.tsx     # página inicial (rota /), com todas as seções
├── AGENTS.md            # instruções para agentes de IA, geradas pelo Next.js
├── CLAUDE.md            # instruções para o Claude Code
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── skills-lock.json     # versões das skills de agentes instaladas
└── tsconfig.json
```

As convenções de organização do código estão em `.claude/rules/rules-global/rules-global.md`.

## Configuração

- **Alias de importação:** `@/*` aponta para `src/*`. Por exemplo, `@/app/layout` resolve para `src/app/layout.tsx`.
- **Tailwind CSS:** é processado pelo plugin `@tailwindcss/turbopack`, configurado em `next.config.ts`, por isso o projeto não tem arquivo do PostCSS.
- **Next.js:** `cacheComponents` e `partialPrefetching` estão ativados em `next.config.ts`.
- **Fontes:** Geist e Geist Mono são carregadas com `next/font` em `src/app/layout.tsx`.
- **Variáveis de ambiente:** o projeto não usa nenhuma.

## Próximos passos

- Substituir os dados provisórios e revisar os textos de serviços e diferenciais.
- Separar as seções de `src/app/page.tsx` em componentes dentro de `src/app/_components`, como pedem as convenções do projeto.
- Remover de `public/` as imagens do template, que a página não usa mais.

## Documentação

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
