---
week: 14
phase: "Phase 2 - Intermediate Exploitation"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - close the intermediate phase with one stronger end-to-end target workflow
  - stress independence, target triage, and cleaner reporting
  - write a phase checkpoint that prepares the move into OSCP-track work
key_tools:
  - nmap
  - Burp Suite
  - ffuf or gobuster
  - linpeas or winpeas
  - bash
  - Obsidian
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine writeup
  - 1 Phase 2 checkpoint note
  - 1 weekly review
---

# Week 14 - Phase 2 capstone with stronger independence, attack chaining, and report-quality notes

**Phase:** Phase 2 - Intermediate Exploitation
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** `generated_obsidian_vault/30_Reviews/Weekly/Week_14_Review.md`

## Weekly focus
- close the intermediate phase with one stronger end-to-end target workflow
- stress independence, target triage, and cleaner reporting
- write a phase checkpoint that prepares the move into OSCP-track work

## Expected weekly outcomes
- candidate demonstrates a more independent attack chain on a sanctioned target
- one report-quality writeup exists with better selectivity and reasoning
- Phase 2 checkpoint names readiness gaps before PEN-200 style work

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Short second target or blocker revisit
**Task:** Use one hour of fresh enumeration on a second sanctioned target or revisit the capstone blocker deliberately.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Transferability or blocker note
**Success criteria:** You either prove the workflow transfers or narrow the blocker further.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Exploit or post-access follow-up
**Task:** Spend one focused hour on the best unresolved path only.
**Tools:** Burp Suite, bash, browser
**Output:** Focused follow-up note
**Success criteria:** The note avoids branching chaos.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Learning log
**Task:** Write down the strongest Phase 2 lesson on independence, hypothesis control, or privesc routine.
**Tools:** Obsidian
**Output:** Learning log: `End of Phase 2`
**Success criteria:** The note captures behavioral change, not just topic coverage.

### Break - 10m
### Hour 4 - 60m active
**Resource:** OSCP-track prep
**Task:** Set up PEN-200, Proving Grounds, report skeletons, and late-phase tracking notes in the vault.
**Tools:** browser, Obsidian
**Output:** Week 15 launch checklist
**Success criteria:** Phase 3 starts with infrastructure ready.

### Outputs
- Transferability or blocker note
- Focused follow-up note
- Learning log: `End of Phase 2`
- Week 15 launch checklist

### Session success criteria
- You either prove the workflow transfers or narrow the blocker further.
- The note avoids branching chaos.
- The note captures behavioral change, not just topic coverage.
- Phase 3 starts with infrastructure ready.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Phase review
**Task:** Read the Phase 2 checkpoint and capstone writeup together, then trim any remaining low-value note clutter.
**Tools:** Obsidian
**Output:** Trimmed Phase 2 reference notes
**Success criteria:** The notes feel closer to an exam-ready workflow binder.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Artifact cleanup
**Task:** Link the checkpoint, capstone writeup, and learning log from Week 14 and the dashboard.
**Tools:** Obsidian, terminal
**Output:** Linked Phase 2 capstone set
**Success criteria:** The phase closeout is obvious from the vault.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Quick-reference maintenance
**Task:** Refresh your most important offensive checklists before starting OSCP-track work.
**Tools:** Obsidian
**Output:** Updated Phase 2 quick-reference pack
**Success criteria:** The pack is short, practical, and current.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 14 review and name the biggest risk entering Phase 3.
**Tools:** Obsidian
**Output:** Week 14 review note
**Success criteria:** The first OSCP-track correction target is explicit.

### Outputs
- Trimmed Phase 2 reference notes
- Linked Phase 2 capstone set
- Updated Phase 2 quick-reference pack
- Week 14 review note

### Session success criteria
- The notes feel closer to an exam-ready workflow binder.
- The phase closeout is obvious from the vault.
- The pack is short, practical, and current.
- The first OSCP-track correction target is explicit.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Phase review
**Task:** Review Weeks 9-13 and identify the strongest improvements in independence, plus the two biggest blockers before OSCP-track work.
**Tools:** Obsidian
**Output:** Draft Phase 2 checkpoint
**Success criteria:** The draft uses evidence from real targets and writeups.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Target planning
**Task:** Pick one sanctioned capstone target that requires a fuller chain than the average Week 10-13 exercise and prepare the note skeleton.
**Tools:** Obsidian
**Output:** Capstone target prep note
**Success criteria:** Wednesday can begin immediately without setup lag.

### Outputs
- Draft Phase 2 checkpoint
- Capstone target prep note

### Session success criteria
- The draft uses evidence from real targets and writeups.
- Wednesday can begin immediately without setup lag.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger or HTB Academy warm-up
**Task:** Do one focused exercise that resembles the capstone target's expected web or service weakness.
**Tools:** Burp Suite, browser
**Output:** Warm-up exploit note
**Success criteria:** The note primes the reasoning you expect to use on Wednesday.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Tool review
**Task:** Refresh the shortest versions of your nmap, content discovery, and privesc checklists before the capstone day.
**Tools:** Obsidian
**Output:** Capstone quick-reference pack
**Success criteria:** The pack is concise enough to consult during a live target.

### Outputs
- Warm-up exploit note
- Capstone quick-reference pack

### Session success criteria
- The note primes the reasoning you expect to use on Wednesday.
- The pack is concise enough to consult during a live target.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned Phase 2 capstone target
**Task:** Perform disciplined first-pass enumeration and rank attack paths before touching exploitation.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Enumeration section draft
**Success criteria:** The target note shows good control over scope and prioritization.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned Phase 2 capstone target
**Task:** Validate the strongest path and document failures without letting them bloat the notes.
**Tools:** Burp Suite, bash, browser
**Output:** Exploit attempt section draft
**Success criteria:** The strongest path is pursued with clear evidence.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned Phase 2 capstone target
**Task:** Continue to foothold and privesc if available; if the target blocks you, capture the blocker precisely and stop random branching.
**Tools:** linpeas or winpeas, bash
**Output:** Foothold and privesc results note
**Success criteria:** The note shows discipline even if the full chain is incomplete.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Draft the full writeup immediately, aiming for report-quality structure and signal density.
**Tools:** Obsidian
**Output:** Week 14 capstone writeup
**Success criteria:** The writeup is the best artifact you have produced so far.

### Outputs
- Enumeration section draft
- Exploit attempt section draft
- Foothold and privesc results note
- Week 14 capstone writeup

### Session success criteria
- The target note shows good control over scope and prioritization.
- The strongest path is pursued with clear evidence.
- The note shows discipline even if the full chain is incomplete.
- The writeup is the best artifact you have produced so far.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Checkpoint finalization
**Task:** Complete the Phase 2 checkpoint with readiness claims, weak spots, and correction rules for OSCP-track work.
**Tools:** Obsidian
**Output:** Completed Phase 2 checkpoint
**Success criteria:** The checkpoint is honest and operationally useful.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Writeup refinement
**Task:** Add or improve screenshots, evidence labels, and attack-path explanations in the capstone writeup.
**Tools:** Obsidian
**Output:** Refined Week 14 writeup
**Success criteria:** The report is cleaner and more persuasive after revision.

### Outputs
- Completed Phase 2 checkpoint
- Refined Week 14 writeup

### Session success criteria
- The checkpoint is honest and operationally useful.
- The report is cleaner and more persuasive after revision.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- Burp Suite
- ffuf or gobuster
- linpeas or winpeas
- bash
- Obsidian

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine writeup
- 1 Phase 2 checkpoint note
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If the capstone target remains incomplete, preserve the writeup and checkpoint anyway; do not abandon reporting just because the chain stopped short.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
