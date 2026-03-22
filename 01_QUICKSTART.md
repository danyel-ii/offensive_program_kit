# Quickstart

## What this kit is for
Use this kit when you want Codex to generate:
- a complete offensive cybersecurity path,
- a week-by-week / day-by-day training program,
- and a matching Obsidian vault.

## Fastest way to use it
1. Put this kit in the root of the Codex workspace.
2. Open the workspace in Codex.
3. Paste the full contents of `02_MASTER_PROMPT.md` into Codex.
4. Let Codex run.
5. Review the files in `generated_program/` and `generated_obsidian_vault/`.
6. Check `generated_program/99_self_audit.md`.

## Required behavior from Codex
Codex must:
- read the entire kit before generating output,
- preserve the candidate's real constraints,
- avoid vague tasks,
- produce a plan that can be executed exactly as written,
- and account for break-adjusted time properly.

## If a resource has changed names
Some learning platforms rename paths or modules over time. If Codex finds that a named module no longer exists or is obviously outdated, it must:
1. pick the closest current equivalent,
2. preserve the same learning objective,
3. record the substitution in `generated_program/98_resource_substitutions.md`.

## What "explicit task" means in this project
An explicit task includes:
- exact resource
- exact action
- exact duration
- exact output artifact
- tools used
- success criteria

Bad:
- "Study Linux"
- "Practice web security"

Good:
- "PortSwigger Academy → HTTP Basics lesson + first request/response lab; 60m active; output: 1 learning log with a raw request example, annotated with method, headers, body."

## What "perfectly suited" means here
The generated program must fit:
- the candidate's background (strong analytics, beginner operations)
- the candidate's goal (offensive / OSCP-track)
- the candidate's weekly schedule
- the candidate's preferred note-taking environment (Obsidian)
- the candidate's need for structured repetition, milestones, and recovery rules

## Expected outputs
- `generated_program/`
- `generated_obsidian_vault/`

See `08_OUTPUT_TREE.md` for the exact required structure.
