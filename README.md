# 🎮 ConnectPlay

**ConnectPlay** é uma plataforma web para conectar jogadores sem duo ou com time incompleto. O objetivo é facilitar a formação de duplas ou grupos baseados em interesses e perfis compatíveis.

---

## 🚀 Tecnologias Usadas

- **React + TypeScript**
- **Vite** (build rápido)
- **Tailwind CSS** (estilização)
- **ShadCN UI** (componentes prontos e acessíveis)
- **Node.js + Express** (backend - separado)
- **MongoDB** (banco de dados)

---

## 🧰 Como rodar o projeto (passo a passo)

> Esses passos são para rodar o **frontend** do projeto localmente.

### ✅ Pré-requisitos

- Ter o **Node.js** instalado (versão LTS recomendada)
- Ter o **npm** ou **yarn**
- Ter o **Git** instalado
- (Opcional) Usar o **WebStorm** com a conta acadêmica

---

### 📦 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/connectplay.git

# 2. Acesse a pasta do frontend
cd connectplay-frontend

# 3. Instale as dependências
npm install

# 4. Rode o projeto localmente
npm run dev
```

### 🗂️ Estrutura de Pastas e Organização do Frontend


```bash
src/
├── assets/         # Imagens, logos, ícones, fontes
├── components/     # Componentes reutilizáveis e visuais (ex: Botão, Card, Modal)
├── features/       # Funcionalidades separadas por domínio (ex: matchmaking, chat, perfil)
│   └── matchmaking/
│       ├── components/           # Componentes específicos da funcionalidade
│       ├── MatchmakingPage.tsx   # Página principal (layout da tela)
│       └── matchmaking.logic.ts  # Lógica de funcionamento (hooks, handlers, chamadas API)
├── layouts/        # Estrutura base da interface (menu lateral, topo, etc.)
├── lib/            # Helpers, configurações globais, integração com libs externas (ex: axios)
├── pages/          # Páginas principais do sistema (ex: HomePage, ProfilePage)
├── routes/         # Definições de rotas do React Router
├── services/       # Conexões com backend / chamadas de API
├── store/          # Estado global da aplicação (Zustand, Redux, etc)
├── styles/         # Arquivos de estilo, configurações do Tailwind, temas
└── types/          # Tipagens globais e compartilhadas em TypeScript


| Parte da aplicação      | Local                                        | Descrição                                                                  |
| ----------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| Layout visual da tela   | `src/pages/` ou `src/features/*/components/` | JSX e Tailwind. Exibe o que o usuário vê, sem lógica pesada.               |
| Lógica funcional        | `src/features/*/*.logic.ts`                  | Toda regra de negócio (hooks, validação, chamadas API, controle de estado) |
| Componentes genéricos   | `src/components/`                            | Componentes reutilizáveis em diversas partes da aplicação                  |
| Integração com backend  | `src/services/`                              | Funções que fazem fetch/post no backend (Express/MongoDB)                  |
| Gerenciamento de estado | `src/store/`                                 | Zustand ou Redux, caso necessário manter dados globais                     |

```