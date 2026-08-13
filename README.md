# Hotel Platform Monorepo

Une plateforme hôtelière complète basée sur une architecture monorepo **pnpm workspaces + Turborepo**.

## 🏗️ Structure du Monorepo

```text
hotel-platform/
├── apps/
│   ├── api/        # Backend NestJS (PostgreSQL, Prisma, Swagger, Socket.IO ready)
│   ├── web/        # Frontend Client React + Vite + Tailwind CSS + TanStack Query + Zustand
│   ├── admin/      # Back-Office Admin React + Vite + Tailwind CSS
│   └── mobile/     # App Mobile Expo + React Native + Expo Router + NativeWind
│
└── packages/
    ├── types/       # Déclarations de types TypeScript partagés (@hotel-platform/types)
    ├── api-client/  # Client SDK API partagé (@hotel-platform/api-client)
    ├── validation/  # Schémas de validation Zod/class-validator (@hotel-platform/validation)
    ├── config/      # Configurations partagées (ESLint, TSConfig, Tailwind) (@hotel-platform/config)
    └── utils/       # Fonctions utilitaires réutilisables (@hotel-platform/utils)
```

## 🚀 Prérequis & Installation

- **Node.js**: `>= 18.0.0`
- **pnpm**: `>= 8.0.0`

### 1. Installation des dépendances
```bash
pnpm install
```

### 2. Génération du client Prisma
```bash
pnpm prisma:generate
```

## 💻 Commandes de Développement

### Lancer tous les projets en parallèle
```bash
pnpm dev
```

### Lancer une application spécifique
```bash
# Backend NestJS (API)
pnpm dev --filter=api

# Web Frontend React
pnpm dev --filter=web

# Admin Frontend React
pnpm dev --filter=admin

# App Mobile Expo
pnpm dev --filter=mobile
```

## 📦 Bundling & Linting

```bash
# Build de tous les packages et apps
pnpm build

# Linting
pnpm lint
```
