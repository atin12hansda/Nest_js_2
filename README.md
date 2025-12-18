# Nest_js_2 (Workspace)

This workspace contains three small NestJS projects used for experimentation and examples.

## Projects
- `nest-app` — main Nest application
- `nest-app-3001` — variant running on port 3001
- `nest-app-kafka` — example integrating Kafka (has docker-compose)

> See each project's own `README.md` for project-specific details.

---

## Quickstart
1. Install dependencies
   - If you use pnpm workspaces: `pnpm -w install`
   - Otherwise: `pnpm install` in each project folder (e.g. `cd nest-app && pnpm install`)

2. Run a project (example)
   - `cd nest-app && pnpm run start:dev` (or `pnpm start` / `pnpm run start:dev` depending on the package scripts)
   - For `nest-app-3001` and `nest-app-kafka` use the same pattern (check each project's `package.json` for exact script names)

3. Build for production
   - `pnpm run build` then run the output from the `dist/` folder (e.g. `node dist/main.js`)

---

## VS Code
- To create a multi-root workspace, in VS Code: `File -> Save Workspace As...` and pick a name (this creates a `.code-workspace` file).
- Recommended workspace settings (put in `.vscode/settings.json`):
  ```json
  {
    "files.exclude": { "**/node_modules": true, "**/dist": true },
    "search.exclude": { "**/node_modules": true, "**/dist": true },
    "files.watcherExclude": { "**/node_modules/**": true, "**/dist/**": true }
  }
  ```

---

## Git
- `node_modules/` and `dist/` are ignored by the repo and should not be committed.
- If you need to remove tracked folders: `git rm -r --cached node_modules` and `git rm -r --cached dist` then commit.

---

## Notes
- Each project may have its own README and `.gitignore` — check them for project-specific setup.
- If you want, I can create a `.code-workspace` file that opens all three folders together and add recommended VS Code settings.

---

Maintained by: You (local workspace)
