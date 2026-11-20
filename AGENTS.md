# AGENTS.md

Guide for AI agents and new contributors working in **VibeVue**.

VibeVue is a Vue 3 starter/template SPA: a small demo app (minimal home page + modal, Pinia counter page, 404) built on Vite, Vue Router, Pinia, vue-i18n, Tailwind CSS v4, DaisyUI 5, Vitest, ESLint, and PWA support. It is deployed to Vercel at https://vibe-vue.vercel.app and is a template, so prefer clean, reusable patterns over one-off hacks. The UI follows the restrained design system described below.

## Requirements

- Node.js >= 22, npm >= 9 (see `package.json` `engines`).
- Plain JavaScript only — there is no TypeScript and no type-check step.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (also installs the Husky pre-commit hook). |
| `npm run dev` | Vite dev server on port 5173 (`strictPort`, opens a browser). |
| `npm run build` | Production build to `dist/`. |
| `npm run build:prod` | Production build with `--mode production`. |
| `npm run preview` | Serve the built app locally. |
| `npm run lint` | `eslint . --fix` (fixes in place). |
| `npm run tests` | Run all Vitest specs once. |
| `npm run tests:coverage` | Vitest with V8 coverage (`coverage/`). |
| `npm run check` | Full gate: clear Vitest cache, lint with fix, run tests. |

- `npm run check` runs automatically via `.husky/pre-commit` (see `.husky/pre-commit`). A commit fails if lint or tests fail, so run it before committing rather than fighting the hook.
- There is no end-to-end suite; `e2e/**` is excluded in `vitest.config.js`.

## Directory map

```
index.html                 # App shell: SEO/OG/PWA meta tags, analytics <noscript> pixel
vite.config.js             # Vite plugins: Vue, Tailwind, bundle analyzer, PWA, sitemap
vitest.config.js           # Merges vite config in "test" mode + jsdom environment
eslint.config.js           # Flat config, Vue recommended + project style rules
vercel.json                # SPA rewrite: every path -> /index.html
skills-lock.json           # Local skills lockfile (gitignored)
.agents/skills/            # Project-local skill, gitignored (frontend-design)
public/                    # Static assets, icon.svg, llms.txt
src/
  main.js                  # App bootstrap: Pinia, router, i18n, lazy analytics loader
  App.vue                  # Layout shell: header/footer, loading spinner, <RouterView>
  assets/                  # base.css (Tailwind, DaisyUI, design tokens, link tones) and inline SVG components
  components/
    BaseButton.vue         # DaisyUI button wrapper (label, theme prop, click emit)
    BaseFade.vue           # <Transition> wrapper with CSS-variable fade timing; respects reduced motion
    BaseModal.vue          # DaisyUI <dialog> modal demo
    HeaderSection.vue      # Nav links with link tones + ThemeToggle + SwitchLanguage
    FooterSection.vue      # Minimal copyright bar in the shared max-w-4xl container
    LoadingSpinner.vue     # DaisyUI loading ring
    SwitchLanguage.vue     # Quiet text button, toggles en <-> el, persists to localStorage
    ThemeToggle.vue        # Monochrome sun/moon icon button bound to useTheme()
    ToolsList.vue          # Styled tech inventory rendered from home.tools via rt()
  composables/useTheme.js  # Reads/sets data-theme on <html>, persists theme
  constants/index.js       # COLOR_VARIANTS, THEMES, LANGUAGES, AVAILABLE_*
  locales/                 # localesEN.js, localesEL.js (must stay in sync)
  router/index.js          # Routes, link tones, and loading-state navigation guards
  store/                   # Pinia stores (counter, loader) and store/types/index.js (store IDs)
  views/                   # HomeView, SecondPage (/about), PageNotFound
```

Specs live next to the code they test (`*.spec.js`).

## Runtime architecture

- **Bootstrap (`src/main.js`)**: creates the app, Pinia, router, and i18n (`legacy: false`). Locale comes from `localStorage.lang` (default `en`); `fallbackLocale` is `el`. Analytics (Simple Analytics) is injected only in the browser, when the host is not localhost and Do Not Track is off — don't add analytics tags to `index.html`.
- **Layout (`src/App.vue`)**: header/footer render unless the route sets `meta.hideLayout` (the 404 route does). While the loading store is `true`, the spinner replaces `<RouterView>`.
- **Routing (`src/router/index.js`)**: all routes are lazily imported. `linkExactActiveClass: 'active-route'` styles only the exact active route; general links use `.app-link`. `beforeEach` sets loading `true` and blocks any `meta.requiresAuth` route until real auth logic is added; `afterEach` sets loading `false`.
- **State**: Pinia. `store/loader.js` is setup-style (`ref` + function, preferred for new stores); `store/counter.js` is options-style. Store IDs are centralized in `store/types/index.js`.
- **Theming**: `useTheme()` sets `data-theme` on `<html>` and persists to `localStorage.theme`. It is called once in `src/main.js` before mount so the saved theme also applies to hidden-layout routes such as 404, where `ThemeToggle` isn't rendered. DaisyUI themes are declared in `src/assets/base.css` as `light --default, dark`, so theme names must remain exactly `light` / `dark` (`THEMES` constants). The toggle uses monochrome `currentColor` sun/moon SVGs, so no icon colors are hardcoded.
- **Build**: `vite.config.js` exports a function. `vitest.config.js` invokes it with `mode: 'test'`; set `VITE_SKIP_BUILD_PLUGINS=true` to skip Tailwind, analyzer, PWA, and sitemap during tests. PWA registers with `autoUpdate`; the sitemap hostname and canonical/OG URLs are hardcoded in `vite.config.js`, `index.html` and `public/llms.txt` — update all of them together if the domain changes.

## Design system

The UI is deliberately minimal and defined in `src/assets/base.css`:

- **Color tokens** (`@theme`): `--color-canvas`, `--color-ink`, `--color-muted`, `--color-line`, `--color-brand`. Dark overrides live in `[data-theme='dark']`. Use `--color-brand` (not `--color-accent`) — DaisyUI owns `--color-accent` (turquoise) and its layered value wins in light theme. Reuse these tokens instead of new hex values; the amber/signal and petrol palette from an earlier iteration was rejected.
- **Type**: Tailwind's default sans (`font-sans`) everywhere. Do not reintroduce display faces, wide letter spacing, or stretched glyphs — they were explicitly rejected.
- **Link tones** (`@layer components`): `.app-link` for general links (muted, ink on hover) and `.active-route` for the exact active route (accent, semibold, underline). Apply `.app-link` to new RouterLinks.
- **Layout**: centered `max-w-4xl` content container, generous whitespace, thin dividers. Avoid cards, shadows, badges, filled color blocks, numbered markers, and decorative eyebrows.
- **Motion**: one short page-load fade via `BaseFade`, disabled under `prefers-reduced-motion`. Avoid per-section entrance animations.

## Coding conventions

Style is enforced by `eslint.config.js` and `.editorconfig`:

- Vue 3 `<script setup>` with Composition API only. `<script setup>` contents are indented with 2 spaces; no semicolons; single quotes; trailing commas only in multiline; spaces inside object braces; `===` only; `const`/`let`, never `var`.
- Template component tags are PascalCase; HTML attributes are kebab-case; always declare emits explicitly. Multi-word component names are allowed (e.g. `BaseFade`).
- Use `defineOptions({ name: '...' })` for reusable components, matching the existing ones.
- Import from `vue` / `vue-router` / `vue-i18n` directly (`vue/prefer-import-from-vue`). There is no `@/` path alias — use relative imports.
- Use `defineAsyncComponent(() => import(...))` for heavy or below-the-fold children, following `App.vue`, `HeaderSection.vue` and the views. Routes are already lazy.
- Styling uses Tailwind v4 utilities plus the shared tokens/tones in `src/assets/base.css`. Prefer existing tokens over inline hex values. Keep any hand-written CSS scoped to the SFC (`ToolsList.vue` has one small scoped hover rule). DaisyUI classes remain for the modal, button and loading ring; don't reintroduce its card/badge/hero treatments on the redesigned pages. Reuse `COLOR_VARIANTS` for button themes.
- Prefer small, focused components; shared values belong in `src/constants/index.js`.

### Localization (required)

- Never hardcode user-visible text. Use `$t('group.key')` in templates and add the key to **both** `src/locales/localesEN.js` and `src/locales/localesEL.js` with identical structure. This includes `aria-label` text (see `theme.*`, `language.*`).
- Structured arrays (for example `home.tools`) are read with `$tm(...)` and rendered through `rt()` by a dedicated component (`ToolsList.vue`). The former `home.content` card sections and `PageContent.vue` were removed — don't reintroduce them.
- Language switching uses `AVAILABLE_LANGUAGES` (`['en', 'el']`) and `LANGUAGES` labels, persisted in `localStorage.lang`.

### Stores

- Register the store ID in `src/store/types/index.js`, then create the store with `defineStore(StoreTypes.X, ...)`.
- Prefer setup-style stores for new code. Destructure state/getters through `storeToRefs()` in components; call actions directly.
- Stores may be used inside router guards; ensure Pinia is installed before the router runs (already handled in `main.js`).

### Tests

- Co-locate `*.spec.js` files; import `describe/test/expect` from `vitest` explicitly.
- Mount with `@vue/test-utils` and pass dependencies through `global.plugins` (fresh `createPinia()` and `createI18n({ legacy: false, ... })`).
- Reset shared state in `beforeEach` (`localStorage.clear()`, `setActivePinia(createPinia())`, remove `data-theme`).
- If a component uses async children, `await vi.dynamicImportSettled()` before asserting.
- Components that render `RouterLink` need a memory-history `createRouter()` in `global.plugins` and `await router.isReady()` when tested.
- Keep assertions on rendered text/classes/emits rather than implementation internals.

## Common tasks

**Add a page**
1. Create `src/views/MyPage.vue` using `<script setup>`, the design-system tokens above, and `$t()` keys.
2. Register it in `src/router/index.js` with a unique `name` and a lazy `component` import; add `meta: { hideLayout: true }` only if it should render without header/footer.
3. Add translations to both locale files.
4. Add a spec if the page has logic worth protecting.

**Add a UI component**
Create it in `src/components/`, use `defineOptions({ name: '...' })`, document props via runtime object `defineProps`, and add a `*.spec.js`. Follow `ToolsList.vue` for a styled list that renders translated messages.

**Add a store**
Add the ID to `store/types.js`, implement a setup-style store, write `store/myThing.spec.js` covering initial state and actions.

## Gotchas

- The pre-commit hook runs the full test suite and ESLint with `--fix`; it may modify staged files.
- `meta.requiresAuth` routes currently return `false` from the guard and never navigate — implement auth before using that flag.
- `npm run build` starts the bundle analyzer on port 8888 when it finishes. A concurrent build fails with `EADDRINUSE`; stop the stale build process before rebuilding.
- Skills are local-only: `.agents/skills/frontend-design` and `skills-lock.json` are gitignored. Install with `npx skills add <source> --skill <name> -a opencode -y` from the project root. Never use `-g` — nothing should be installed in your user profile.
- `dev-dist/`, `dist/` and `coverage/` are generated and gitignored; never edit them by hand.
- `public/` assets are copied verbatim; import app assets (SVGs used as components) from `src/assets/` instead.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `refactor:`, `test:`, `chore(deps):`), matching the existing history.
