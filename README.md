# React Monorepo

A monorepo setup with Vite React apps using React 19, Biome for linting/formatting, and a shared UI package with HeroUI.

## Structure

```
├── apps/
│   └── app1/              # Vite React app
├── packages/
│   └── ui/                # Shared UI components with HeroUI
├── biome.json             # Global Biome configuration
├── pnpm-workspace.yaml    # PNPM workspace configuration
└── package.json           # Root package.json with workspace scripts
```

## Quick Start

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Build the UI package:

   ```bash
   pnpm --filter @monorepo/ui build
   ```

3. Start development:

   ```bash
   pnpm --filter app1 dev
   ```

## Available Scripts

- `pnpm build` - Build all packages
- `pnpm dev` - Start development servers for all apps
- `pnpm lint` - Lint all code with Biome
- `pnpm format` - Format all code with Biome
- `pnpm check` - Run Biome check and fix issues
- `pnpm type-check` - Type check all packages

## Creating New Apps

To create a new Vite React app:

1. Create the app in `apps/`:

   ```bash
   cd /apps
   pnpm create vite new-app --template react-ts
   ```

2. Update the package.json to include the UI package:

   ```json
   {
     "dependencies": {
       "@monorepo/ui": "workspace:*"
     }
   }
   ```

3. Wrap your app with the UIProvider:

   ```tsx
   import { UIProvider } from "@monorepo/ui";

   // In your main.tsx
   <UIProvider>
     <App />
   </UIProvider>;
   ```

## UI Package

The UI package (`@monorepo/ui`) provides:

- **UIProvider**: HeroUI theme provider
- **Button**: HeroUI button component
- **Card**: HeroUI card component with header support

Import components:

```tsx
import { Button, Card, UIProvider } from "@monorepo/ui";
```

