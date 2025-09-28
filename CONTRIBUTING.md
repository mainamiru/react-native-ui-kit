# Contributing to @mainamiru/react-native-ui-kit

Thank you for your interest in contributing! This project is a monorepo managed with Bun workspaces containing:

- `packages/react-native-ui-kit/` – the UI Kit library published as `@mainamiru/react-native-ui-kit`
- `apps/docs/` – the documentation and examples app (Expo + expo-router)

We welcome issues, feature requests, and pull requests.

## Prerequisites

- Node.js 18+ (LTS recommended)
- Bun (used as the package manager): https://bun.sh
- Git
- Optional: Expo CLI for local docs previews

## Getting Started

1. Fork the repository and clone your fork:

```bash
git clone https://github.com/mainamiru/react-native-ui-kit.git
cd react-native-ui-kit
```

2. Install dependencies (monorepo workspaces are configured):

```bash
bun install
```

3. Start the docs app (recommended for developing and testing components):

From the repo root:

```bash
bun run start
```

Or directly inside the docs app:

```bash
cd apps/docs
bun run start
```

Common docs scripts (from `apps/docs/package.json`):

- `bun run start` – start Expo
- `bun run android` – start Expo on Android
- `bun run ios` – start Expo on iOS
- `bun run web` – start Expo for web
- `bun run build:web` – export static site for web

## Developing the UI Kit

The package lives in `packages/react-native-ui-kit/`.

Build the library:

```bash
cd packages/react-native-ui-kit
bun run build
```

Lint the code:

```bash
bun run lint
```

Auto-fix lint issues and format:

```bash
bun run lint:fix
bun run format
```

When you change components, preview them in the docs app (`apps/docs`) to verify behavior on iOS/Android/Web.

## Project Structure

- `packages/react-native-ui-kit/src/` – components, hooks, providers, types, utils
- `packages/react-native-ui-kit/dist/` – build output (generated)
- `apps/docs/` – example usage + docs site

## Coding Guidelines

- Use TypeScript for all new code.
- Keep components accessible; follow React Native accessibility best practices.
- Prefer small, composable components.
- Keep props typed and documented via TSDoc where helpful.
- Add stories/examples to the docs app when adding new components or significant features.

## Commit Convention

Use conventional commits for clear history and automated changelog generation in the future:

- `feat: ` a new feature
- `fix: ` a bug fix
- `docs: ` documentation only changes
- `refactor: ` code change that neither fixes a bug nor adds a feature
- `perf: ` code change that improves performance
- `test: ` adding missing tests or correcting existing tests
- `chore: ` changes to the build process or auxiliary tools and libraries

Examples:

```
feat(button): add loading state and aria roles
fix(text-input): resolve cursor jump on Android
```

## Branching & Pull Requests

1. Create a branch from `main`:

```bash
git checkout -b feat/button-loading
```

2. Make changes and ensure:

- `bun run lint` passes in the package you changed.
- `bun run format` has been run.
- The docs app builds and runs locally without errors.

3. Commit using conventional commits and push your branch.

4. Open a Pull Request against `main` with:

- A clear title and description of changes
- Screenshots or GIFs for UI changes where applicable
- Notes on breaking changes, migration steps, or new props

5. A maintainer will review your PR. Please respond to feedback promptly.

## Releasing

Releases are performed by the maintainers. The published package name is `@mainamiru/react-native-ui-kit`.

## License

By contributing, you agree that your contributions will be licensed under the MIT License. See `LICENSE` in the repository root.
