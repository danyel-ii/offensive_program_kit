# Acceptance Tests

Codex must run through these tests after generation and before stopping.

Create the audit results in:
- `generated_program/99_self_audit.md`
- `generated_obsidian_vault/99_Admin/Self_Audit.md`

Use a simple pass/fail table.

---

## Test A — File existence
- [ ] `generated_program/00_program_overview.md` exists
- [ ] `generated_program/01_phase_0_foundations.md` exists
- [ ] `generated_program/02_phase_1_offensive_entry.md` exists
- [ ] `generated_program/03_phase_2_intermediate_exploitation.md` exists
- [ ] `generated_program/04_phase_3_oscp_track.md` exists
- [ ] `generated_program/05_resource_map.md` exists
- [ ] `generated_program/06_tool_progression.md` exists
- [ ] `generated_program/07_milestones_and_checkpoints.md` exists
- [ ] `generated_program/08_missed_session_protocol.md` exists
- [ ] `generated_program/97_assumptions.md` exists
- [ ] `generated_program/98_resource_substitutions.md` exists
- [ ] `generated_program/99_self_audit.md` exists
- [ ] 24 weekly program files exist
- [ ] all required vault files exist
- [ ] 24 weekly review stub files exist in the vault

## Test B — Schedule math
For every week file:
- [ ] Monday = 120 active / 130 elapsed
- [ ] Tuesday = 120 active / 130 elapsed
- [ ] Wednesday = 240 active / 270 elapsed
- [ ] Thursday = 120 active / 130 elapsed
- [ ] Friday = rest
- [ ] Saturday = 240 active / 270 elapsed
- [ ] Sunday = 240 active / 270 elapsed

## Test C — Phase coverage
- [ ] Weeks 1–4 are Foundations
- [ ] Weeks 5–8 are Offensive Entry
- [ ] Weeks 9–14 are Intermediate Exploitation
- [ ] Weeks 15–24 are OSCP Track

## Test D — Output discipline
- [ ] Every week includes at least one learning log
- [ ] Every week includes a weekly review
- [ ] Weeks 1–2 include at least one hands-on practical lab
- [ ] Weeks 3–24 include at least one exploit attempt each week
- [ ] Weeks 4–24 include at least one machine or target writeup each week

## Test E — Tool recurrence
Across the program:
- [ ] nmap appears repeatedly
- [ ] Burp Suite appears repeatedly
- [ ] gobuster or ffuf appears repeatedly
- [ ] netcat appears repeatedly
- [ ] linpeas or winpeas appears repeatedly

## Test F — Resource alignment
- [ ] Jason Dion Network+ is used early
- [ ] Jason Dion Security+ is used early
- [ ] Linux Basics for Hackers appears in foundations
- [ ] PortSwigger appears early and repeatedly
- [ ] TryHackMe appears early
- [ ] TCM PEH appears in Offensive Entry
- [ ] HTB or HTB Academy appears in Intermediate Exploitation
- [ ] PEN-200 / Proving Grounds appear in OSCP Track

## Test G — Consolidation and simulation
- [ ] Around Week 6 there is visible consolidation
- [ ] Around Week 12 there is visible consolidation
- [ ] Around Week 18 there is visible consolidation
- [ ] There is at least one late-stage mock / timed simulation
- [ ] There is at least one late-stage report-heavy weekend

## Test H — Vault usability
- [ ] dashboard exists and is usable
- [ ] templates exist
- [ ] program index exists
- [ ] weekly review index exists
- [ ] machine / tool / concept / resource / report indexes exist
- [ ] week files are navigable from within the vault

## Test I — Safety scope
- [ ] no real targets outside authorized labs
- [ ] no stealth / evasion / malware / persistence content outside lab simulations
- [ ] all practical tasks are framed as lab-only

## Test J — Clarity
Spot-check 3 random weeks:
- [ ] each day has explicit tasks
- [ ] each day has outputs
- [ ] each day has success criteria
- [ ] the tasks fit the time budget
