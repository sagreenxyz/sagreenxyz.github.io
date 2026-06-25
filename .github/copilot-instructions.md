# Copilot Instructions

This project uses [Web Awesome](https://webawesome.com) (`@awesome.me/webawesome`) for UI components.

## Agent Skills

Two Web Awesome Agent Skills are installed in this repo. When working on UI work, load the relevant skill(s) before writing code.

- **Component reference** — `.agents/skills/webawesome/SKILL.md`
  Use when working with a specific component's properties, slots, events, methods, CSS parts, or framework setup.
- **Design companion** — `.agents/skills/webawesome-design/SKILL.md`
  Use when laying out a page (`<wa-page>`), theming on-brand, or composing a polished UI.

Most real tasks benefit from both — they cross-reference each other.

## Conventions

- Prefer Web Awesome components (`<wa-*>`) and CSS utilities over custom HTML/CSS when an equivalent exists.
- Use `--wa-*` design tokens for colors, spacing, and typography rather than hard-coded values.
- For layout, reach for `<wa-page>` (full-page) or Web Awesome layout utilities (stack, cluster, grid) before writing custom CSS.
