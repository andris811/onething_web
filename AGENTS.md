# AGENTS.md - Agent Guidelines for This Repository

## Build/Lint/Test Commands
- **Build**: `npm run build` or `yarn build`
- **Lint**: `npm run lint` or `yarn lint`
- **Dev Server**: `npm run dev` or `yarn dev`
- **Start Production**: `npm run start` or `yarn start`

## Code Style Guidelines

### Imports
- Use ES6 imports with named imports when possible
- Group imports: external libraries first, then internal modules
- Sort imports alphabetically within groups

### Formatting
- Use consistent indentation (2 spaces preferred)
- Max line length: 80-100 characters
- Use semicolons consistently

### Types
- Use TypeScript for type safety
- Prefer explicit types over implicit `any`
- Use interfaces for object shapes, types for unions

### Naming Conventions
- **Variables/Functions**: camelCase
- **Classes/Types**: PascalCase
- **Constants**: UPPER_SNAKE_CASE
- **Files**: kebab-case or camelCase
- **Components**: PascalCase

### Error Handling
- Use try/catch for async operations
- Prefer throwing specific error types
- Log errors appropriately without exposing sensitive data

### General
- Write self-documenting code with clear variable names
- Add comments for complex logic only
- Follow DRY principle and single responsibility
- Use Tailwind CSS for styling
- Follow React best practices and hooks

## Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/legal/` - Legal page (Terms & Privacy)
- `src/components/` - Reusable React components
- `public/` - Static assets

## Pages
- `/` - Main page with Hero, Screenshot, Reviews, Features (#features), Screenshots, and Contact (#contact) sections
- `/legal` - Terms & Privacy page with comprehensive app terms and privacy information

## Color Scheme
- Primary: #E5745A (Orange)
- Secondary: #F1C0A8 (Light Orange)
- Background: #FCFCFA (Off-white)

## Cursor Rules
*(No .cursor/rules/ or .cursorrules found)*

## Copilot Rules
*(No .github/copilot-instructions.md found)*