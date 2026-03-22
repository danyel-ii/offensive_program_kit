# Obsidian Vault Specification

Codex must generate a vault that is useful immediately after opening it.

## Design philosophy
The vault is an **execution system**, not just a note archive.

It must help the user:
- know the current phase and week
- know what to do today
- log outputs and weak spots
- review progress
- navigate between program, logs, and artifacts

## Compatibility rule
The vault must work in plain Markdown / vanilla Obsidian first.

Optional plugin support is allowed, but only if:
- a non-plugin fallback exists
- the vault still makes sense without plugins

## Required top-level vault files
At minimum create:
- `00_Dashboard.md`
- `01_Start_Here.md`
- `02_Program_Index.md`
- `03_Weekly_Review_Index.md`
- `04_Machines_Index.md`
- `05_Tools_Index.md`
- `06_Concepts_Index.md`
- `07_Resources_Index.md`
- `08_Reports_Index.md`

## Required directories
Create at minimum:
- `10_Templates/`
- `20_Program/`
- `20_Program/Weeks/`
- `30_Reviews/Weekly/`
- `40_Machines/`
- `50_Learning_Logs/`
- `60_Tools/`
- `70_Concepts/`
- `80_Resources/`
- `90_Reports/`
- `99_Admin/`

## Required template files
Create template notes for:
- Daily Session
- Week Plan
- Weekly Review
- Machine Writeup
- Learning Log
- Exploit Attempt
- Tool Note
- Concept Note
- Resource Note
- Phase Checkpoint
- Report Skeleton

## Program content inside the vault
Inside `20_Program/` include:
- `00_Program_Overview.md`
- `01_Phase_0_Foundations.md`
- `02_Phase_1_Offensive_Entry.md`
- `03_Phase_2_Intermediate_Exploitation.md`
- `04_Phase_3_OSCP_Track.md`
- `Weeks/Week_01.md` through `Weeks/Week_24.md`

Inside `30_Reviews/Weekly/` pre-generate:
- `Week_01_Review.md` through `Week_24_Review.md`

These review files may be stubbed from a template, but must exist.

## Dashboard requirements
`00_Dashboard.md` must include:
- current phase checklist
- weekly cadence summary
- active vs elapsed time explanation
- this-week deliverables summary
- quick links to:
  - current week
  - review index
  - machine index
  - learning log area
  - report area
- weekly scorecard fields
- weak-area tracker
- missed-session rule summary

## Frontmatter / metadata recommendation
For weekly notes and other structured notes, include frontmatter where useful:
- week
- phase
- note_type
- tools
- tags
- status
- deliverables

Do not make the vault depend on Dataview; frontmatter should still be human-readable.

## Linking rules
Cross-link where helpful:
- dashboard ↔ program overview
- program overview ↔ phases
- phases ↔ weeks
- week notes ↔ weekly reviews
- week notes ↔ machine writeups
- week notes ↔ tool notes
- week notes ↔ concept/resource notes

## Simplicity rule
Do not overengineer the vault.
A clean, navigable vault is better than a plugin-heavy vault that breaks outside one machine.

## Optional plugin support
If Codex includes optional plugin snippets:
- put them in a clearly marked section
- label them as optional
- ensure the note is still readable without them

## Example quality
The vault should feel like:
- a personal operations center
- a course command board
- a lab logbook
- a review archive

It should not feel like:
- a generic note dump
- a random collection of course summaries
- a personal wiki with no execution flow
