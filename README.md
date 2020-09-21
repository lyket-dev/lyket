# Lyket

Lyket is a tool to quickly implement clap/like/vote buttons on a webpage. To create a new button you need to choose a behaviour (Like, Clap or Updown) and an identifier. From that moment on, the server will keep track of every user interaction on that button.

## Monorepo usage

This monorepo is setup for `@lyket/` NPM organization. It contains:

- `@lyket/react` - Lyket React component
- `@lyket/widget` - Lyket embedded version

After that you can install all the dependencies in the root directory. Since the monorepo uses Lerna and Yarn Workspaces, npm CLI is not supported (only yarn).

```sh
yarn install
```

This will install all dependencies in each project, build them, and symlink them via Lerna

## Development workflow

All packages should have a start script that runs the project in watch mode.

```sh
yarn start
```

This builds each package to `<packages>/<package>/dist` and runs the project in watch mode so any edits you save inside `<packages>/<package>/src` cause a rebuild to `<packages>/<package>/dist`. The results will stream to to the terminal.
