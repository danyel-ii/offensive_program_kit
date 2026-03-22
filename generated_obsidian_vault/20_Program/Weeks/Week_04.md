---
week: 4
phase: "Phase 0 - Foundations"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - combine networking, Linux, Burp, and scan interpretation into one guided workflow
  - produce the first machine or target writeup
  - close Phase 0 with a checkpoint and explicit weak areas
key_tools:
  - nmap
  - Burp Suite
  - bash
  - Obsidian
  - browser
deliverables:
  - 2 learning logs
  - 1 exploit attempt note
  - 1 machine-style writeup
  - 1 Phase 0 checkpoint note
  - 1 weekly review
---

# Week 04 - Foundation phase capstone and first machine-style writeup

**Phase:** Phase 0 - Foundations
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** [[30_Reviews/Weekly/Week_04_Review]]

## Weekly focus
- combine networking, Linux, Burp, and scan interpretation into one guided workflow
- produce the first machine or target writeup
- close Phase 0 with a checkpoint and explicit weak areas

## Expected weekly outcomes
- first machine or target writeup is completed
- Phase 0 checkpoint is written with honest weak spots
- candidate has a stable workflow for scan note, exploit note, and weekly review

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** TryHackMe or local target follow-up
**Task:** Revisit the Week 04 target or a second short sanctioned target to confirm that your enumeration logic still works on fresh input.
**Tools:** nmap, Burp Suite, bash
**Output:** Second target mini-note
**Success criteria:** You can adapt the same workflow to a new or partially solved target.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Writeup improvement pass
**Task:** Improve the machine-style writeup with clearer timestamps, better screenshots, and tighter explanations.
**Tools:** Obsidian
**Output:** Revised machine-style writeup
**Success criteria:** The writeup reads like a report, not raw scratch notes.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Learning log
**Task:** Write a log on the biggest shift from 'understanding concepts' to 'operating a workflow' during Phase 0.
**Tools:** Obsidian
**Output:** Learning log: `Phase 0 Workflow Lessons`
**Success criteria:** The note identifies what became a habit and what still requires deliberate effort.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Preparation for Phase 1
**Task:** Set up next week's TCM PEH, THM, and PortSwigger links inside the vault; update the dashboard's current week and current phase manually.
**Tools:** browser, Obsidian
**Output:** Week 05 launch checklist
**Success criteria:** The next week's resources are one click away inside the vault.

### Outputs
- Second target mini-note
- Revised machine-style writeup
- Learning log: `Phase 0 Workflow Lessons`
- Week 05 launch checklist

### Session success criteria
- You can adapt the same workflow to a new or partially solved target.
- The writeup reads like a report, not raw scratch notes.
- The note identifies what became a habit and what still requires deliberate effort.
- The next week's resources are one click away inside the vault.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Foundation review
**Task:** Review the cheat sheet, command list, and machine writeup; trim anything verbose that you would not actually consult under time pressure.
**Tools:** Obsidian
**Output:** Lean field-reference note
**Success criteria:** The note is compact and usable during future labs.

### Break - 10m
### Hour 2 - 60m active
**Resource:** PortSwigger reinforcement
**Task:** Solve one more beginner lab aligned to the Wednesday target's attack surface, even if the platform is different.
**Tools:** Burp Suite, browser
**Output:** Short exploit note
**Success criteria:** You can connect the lab pattern back to the target writeup.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Learning log consolidation
**Task:** Write a final foundations learning log covering networking, Linux, HTTP, nmap, and Burp as one workflow.
**Tools:** Obsidian
**Output:** Learning log: `End of Phase 0`
**Success criteria:** The log reads like an operator's workflow summary, not five disconnected topics.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 04 review and name the single biggest skill gap entering Offensive Entry.
**Tools:** Obsidian
**Output:** Week 04 review note
**Success criteria:** The review is specific enough to drive Week 05 behavior.

### Outputs
- Lean field-reference note
- Short exploit note
- Learning log: `End of Phase 0`
- Week 04 review note

### Session success criteria
- The note is compact and usable during future labs.
- You can connect the lab pattern back to the target writeup.
- The log reads like an operator's workflow summary, not five disconnected topics.
- The review is specific enough to drive Week 05 behavior.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Network+ and Security+ review
**Task:** Review the most important networking and security topics from the first three weeks; build a one-page cheat sheet for enumeration and web basics.
**Tools:** browser, Obsidian
**Output:** Foundation cheat sheet
**Success criteria:** The sheet covers protocols, HTTP structure, auth vocabulary, and first-step lab commands.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Phase 0 checkpoint drafting
**Task:** Start a checkpoint note that lists what is now comfortable, what is still slow, and what must improve before Phase 1.
**Tools:** Obsidian
**Output:** Draft Phase 0 checkpoint note
**Success criteria:** The draft names at least three real weaknesses rather than generic uncertainty.

### Outputs
- Foundation cheat sheet
- Draft Phase 0 checkpoint note

### Session success criteria
- The sheet covers protocols, HTTP structure, auth vocabulary, and first-step lab commands.
- The draft names at least three real weaknesses rather than generic uncertainty.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Solve one beginner lab in SQL injection, authentication, or XSS, then write the exploit flow in a reusable way.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt note
**Success criteria:** The note explains how you recognized the lab category and why the payload worked.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Machine writeup preparation
**Task:** Choose one sanctioned beginner target on THM or a local intentionally vulnerable VM and prepare the writeup skeleton before touching the target deeply.
**Tools:** Obsidian
**Output:** Machine writeup skeleton
**Success criteria:** The skeleton has sections for enumeration, initial access, and lessons learned.

### Outputs
- Exploit attempt note
- Machine writeup skeleton

### Session success criteria
- The note explains how you recognized the lab category and why the payload worked.
- The skeleton has sections for enumeration, initial access, and lessons learned.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned beginner target
**Task:** Enumerate the chosen target with `nmap -sC -sV -oA scans/week04_target <lab-ip>` and record all obvious attack paths.
**Tools:** nmap, bash
**Output:** Enumeration section draft
**Success criteria:** The note lists services, versions, web findings, and at least two ranked next steps.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned beginner target
**Task:** Perform targeted web or service testing on the most plausible attack path only; avoid random guesswork.
**Tools:** Burp Suite, browser, bash
**Output:** Exploit attempt section draft
**Success criteria:** The note records tested inputs, failed paths, and one validated weakness or decisive dead end.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned beginner target
**Task:** Complete the intended foothold or lab objective if possible; if not, document the exact blocker and the evidence you collected.
**Tools:** Burp Suite, bash
**Output:** Access results note
**Success criteria:** Either the foothold is achieved or the blocker is documented precisely enough to revisit later.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Turn the target notes into the first full machine-style writeup with linked evidence and lessons learned.
**Tools:** Obsidian
**Output:** Week 04 machine-style writeup
**Success criteria:** A reviewer can follow the chain from scan to exploit without guessing missing steps.

### Outputs
- Enumeration section draft
- Exploit attempt section draft
- Access results note
- Week 04 machine-style writeup

### Session success criteria
- The note lists services, versions, web findings, and at least two ranked next steps.
- The note records tested inputs, failed paths, and one validated weakness or decisive dead end.
- Either the foothold is achieved or the blocker is documented precisely enough to revisit later.
- A reviewer can follow the chain from scan to exploit without guessing missing steps.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Linux and HTTP repetition
**Task:** Repeat the commands and Burp actions used in Wednesday's target work until they feel less mechanical.
**Tools:** bash, Burp Suite
**Output:** Repetition checklist
**Success criteria:** You can rerun the scan and the request workflow from memory.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Phase 0 checkpoint finalization
**Task:** Finish the checkpoint note and set the first operating rules for Phase 1: how you will scan, note, and write up each target.
**Tools:** Obsidian
**Output:** Completed Phase 0 checkpoint note
**Success criteria:** The checkpoint contains correction steps, not just reflections.

### Outputs
- Repetition checklist
- Completed Phase 0 checkpoint note

### Session success criteria
- You can rerun the scan and the request workflow from memory.
- The checkpoint contains correction steps, not just reflections.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- Burp Suite
- bash
- Obsidian
- browser

## Required artifacts this week
- 2 learning logs
- 1 exploit attempt note
- 1 machine-style writeup
- 1 Phase 0 checkpoint note
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If the Wednesday capstone slips, preserve the enumeration and one exploit-validation block, then finish the writeup over Saturday rather than adding new target volume.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
