# Codex Instruction Kit — Offensive Cybersecurity Program + Obsidian Vault

This kit is designed to let Codex generate, in one pass, a **complete 24-week offensive cybersecurity training program** and a **fully structured Obsidian vault** that fits the candidate, schedule, and end goal.

The kit is intentionally redundant: the same requirements appear in both narrative and machine-readable form so that Codex can succeed even if it relies more heavily on one format than another.

## Goal
Generate a plan that takes the candidate from:
- **CompTIA Network+ / Security+ foundations (Jason Dion on Udemy)**
to
- **credible OSCP-track / Tier-3-entry offensive capability**
using only:
- explicit tasks
- authorized lab platforms
- realistic time budgets
- a vault designed for execution, not passive note-taking

## What Codex must produce
1. A **24-week program** with explicit daily tasks.
2. A **resource map** that shows which materials are used when.
3. A **tool progression map** (nmap → Burp → gobuster/ffuf → privesc tools → reporting).
4. A **milestone / checkpoint map** by phase.
5. A **missed-session recovery protocol**.
6. A **self-audit** showing that the output satisfies the acceptance tests.
7. A **vanilla-first Obsidian vault** containing:
   - dashboard
   - templates
   - weekly program notes
   - review notes
   - machine writeup templates
   - learning logs
   - tool / concept / resource notes
   - admin and tracking notes

## Important scheduling rule
The candidate's training week is:

- Monday: 2h active work + 10m break = 2h10 elapsed
- Tuesday: 2h active work + 10m break = 2h10 elapsed
- Wednesday: 4h active work + 30m breaks = 4h30 elapsed
- Thursday: 2h active work + 10m break = 2h10 elapsed
- Friday: Rest
- Saturday: 4h active work + 30m breaks = 4h30 elapsed
- Sunday: 4h active work + 30m breaks = 4h30 elapsed

**Total per week**
- Active training time: **18h**
- Calendar elapsed time including pauses: **20h**

Codex must budget to the **active** time and separately display the **elapsed** time.

## Read order for Codex
Codex should read these files in this order:

1. `00_README_FIRST.md`
2. `01_QUICKSTART.md`
3. `02_MASTER_PROMPT.md`
4. `03_CANDIDATE_PROFILE.md`
5. `04_TIME_BUDGET_RULES.md`
6. `05_RESOURCE_CANON.md`
7. `06_PROGRAM_SPEC.md`
8. `07_OBSIDIAN_VAULT_SPEC.md`
9. `08_OUTPUT_TREE.md`
10. `09_QUALITY_GATES.md`
11. `10_ACCEPTANCE_TESTS.md`
12. `11_SAFE_SCOPE_GUARDRAILS.md`
13. `12_SELF_AUDIT_INSTRUCTIONS.md`
14. `13_MISSED_SESSION_PROTOCOL_SPEC.md`
15. the example files in `examples/`
16. the templates in `templates/`
17. the machine-readable files in `machine_readable/`

## One-pass rule
Codex should:
- read the whole kit first,
- generate the full output,
- run its self-audit,
- fix anything that fails,
- and only then stop.

It should **not** ask questions unless a required input file is missing.

## Safety scope
All practical tasks must stay inside:
- TryHackMe
- Hack The Box / HTB Academy
- PortSwigger Web Security Academy
- OffSec Proving Grounds / PEN-200 labs
- local intentionally vulnerable lab VMs / containers

No real target exploitation. No public target scanning except official training targets if explicitly sanctioned by those platforms. No stealth/evasion/persistence/malware tasks outside lab simulations.
