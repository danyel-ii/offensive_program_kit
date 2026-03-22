# Runbook for the Human Operator

## Purpose
This file explains how to use this kit with Codex in the fewest steps.

## Step-by-step
1. Unzip the kit into a clean workspace.
2. Open the workspace in Codex.
3. Paste the full contents of `02_MASTER_PROMPT.md`.
4. Let Codex generate the outputs.
5. Open:
   - `generated_program/99_self_audit.md`
   - `generated_program/00_program_overview.md`
   - `generated_obsidian_vault/00_Dashboard.md`

## What to inspect first
- Did Codex honor the 18h active / 20h elapsed weekly model?
- Are there actually 24 week files?
- Do the week files contain explicit tasks?
- Does the vault look usable on day one?
- Did Codex document any resource substitutions?

## If Codex partially fails
If the output is mostly correct but misses one or two structural requirements, rerun with:
- the original master prompt, plus
- a direct note pointing to the failed acceptance tests in `10_ACCEPTANCE_TESTS.md`.

## If a platform module has changed
Ask Codex to revise only the affected weeks and update:
- `generated_program/98_resource_substitutions.md`
