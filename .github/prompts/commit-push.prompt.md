---
description: "Stage all changes, commit with an auto-generated Conventional Commits message, and push to origin main."
name: "Commit & Push"
argument-hint: "(optional) extra context for the commit message"
agent: "agent"
---

# Commit & Push

Stage every change in the working tree, write a Conventional Commits message that accurately describes those changes, and push to `origin main`.

## Steps

1. Inspect what's about to be committed:
   - `git status --short`
   - `git diff --stat`
   - `git diff --cached --stat` (if anything is already staged)
   - Read the diff for any non-trivial change so the message is accurate. Don't rely on filenames alone.
2. **Stop and ask the user** before proceeding if you find any of: secrets/credentials, unrelated changes mixed together that should be separate commits, large binary blobs, or files that look like accidental check-ins (`.env`, `node_modules/`, build artifacts not in `.gitignore`).
3. Pick the Conventional Commits **type** from the actual change, not the filename:
   - `feat` — new user-visible capability
   - `fix` — bug fix
   - `docs` — documentation only
   - `style` — formatting/whitespace, no code change
   - `refactor` — code change that neither fixes a bug nor adds a feature
   - `perf` — performance improvement
   - `test` — adding or correcting tests
   - `build` — build system, dependencies, bundler config (Vite, npm, lockfiles)
   - `ci` — CI config (`.github/workflows/**`)
   - `chore` — tooling, repo housekeeping, agent/skill files, `.gitignore`
4. Pick a **scope** when one clear area is touched (e.g. `feat(home): …`, `ci(pages): …`). Omit the scope if the change spans the repo.
5. Write the message:
   - Subject line: `<type>(<scope>)?: <imperative summary>` — lowercase after the colon, no trailing period, **≤ 72 characters**.
   - If multiple distinct things changed or the rationale isn't obvious from the subject, add a body: blank line, then wrapped lines ≤ 72 chars explaining *what* and *why*.
   - Add `BREAKING CHANGE: <description>` in the footer for breaking changes (and use `!` after the type, e.g. `feat!:`).
   - Incorporate any extra context the user passed as an argument.
6. Run, in this order, in **one** terminal invocation so the user sees the full chain:
   ```bash
   git add -A \
     && git commit -m "<subject>" $(: optionally -m "<body>") \
     && git push origin main
   ```
   Use multiple `-m` flags for the body — don't embed newlines in a single `-m` string.
7. Report back: the final commit subject, the short SHA, and the push result. If anything failed (pre-commit hook, non-fast-forward, auth), surface the error verbatim and stop — don't retry with `--force` or `--no-verify`.

## Guardrails

- If `git status` shows nothing to commit, say so and exit — don't create an empty commit.
- If the current branch isn't `main`, stop and ask the user before pushing.
- Never use `git push --force`, `git push --force-with-lease`, `git commit --amend` on already-pushed commits, or `--no-verify` without the user explicitly asking.
- Never invent a scope or message details that aren't grounded in the diff.
