---
week: 17
phase: "Phase 3 - OSCP Track"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - reduce hint dependence while keeping practical momentum
  - alternate between web-heavy and service-heavy logic as targets demand
  - capture blockers precisely instead of dissolving into random exploration
key_tools:
  - nmap
  - ffuf or gobuster
  - Burp Suite
  - netcat
  - linpeas or winpeas
  - bash
  - Obsidian
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine writeup
  - 1 report fragment
  - 1 weekly review
---

# Week 17 - Independent mixed-target work with stronger judgment and less hint dependence

**Phase:** Phase 3 - OSCP Track
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** `generated_obsidian_vault/30_Reviews/Weekly/Week_17_Review.md`

## Weekly focus
- reduce hint dependence while keeping practical momentum
- alternate between web-heavy and service-heavy logic as targets demand
- capture blockers precisely instead of dissolving into random exploration

## Expected weekly outcomes
- candidate chooses attack paths with better judgment
- one stronger mixed-target writeup exists
- note quality remains high even when progress slows

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Second target or continuation
**Task:** Repeat the same judgment-focused workflow on a fresh or continued sanctioned target.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Second target note
**Success criteria:** Your ranking and branch control are stronger than on Wednesday.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Exploit work
**Task:** Validate one or two best paths only and use netcat, Burp, or service tools as justified by evidence.
**Tools:** netcat, Burp Suite, bash
**Output:** Exploit attempt note
**Success criteria:** Tool choice is led by evidence rather than habit.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Post-access follow-up
**Task:** If a shell is gained, capture the shortest clean path through the relevant privesc checklist.
**Tools:** linpeas or winpeas, bash
**Output:** Privesc note
**Success criteria:** The notes are concise and sequence-driven.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Learning log
**Task:** Write down one moment where you cut off a low-value branch earlier than you would have in Phase 1.
**Tools:** Obsidian
**Output:** Learning log: `Week 17 - Better Branch Control`
**Success criteria:** The note captures real evidence of improved judgment.

### Outputs
- Second target note
- Exploit attempt note
- Privesc note
- Learning log: `Week 17 - Better Branch Control`

### Session success criteria
- Your ranking and branch control are stronger than on Wednesday.
- Tool choice is led by evidence rather than habit.
- The notes are concise and sequence-driven.
- The note captures real evidence of improved judgment.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Artifact alignment
**Task:** Make sure the report fragment and writeup explain the same reasoning and outcomes.
**Tools:** Obsidian
**Output:** Aligned artifact set
**Success criteria:** The reasoning story is consistent across notes.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Quick-reference maintenance
**Task:** Refresh the netcat, triage, and blocker-documentation notes from this week's work.
**Tools:** Obsidian
**Output:** Updated tool and workflow notes
**Success criteria:** The notes become more specific and useful.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Artifact cleanup
**Task:** Link all relevant notes, scans, and screenshots from Week 17.
**Tools:** Obsidian, terminal
**Output:** Week 17 linked artifacts
**Success criteria:** Everything needed to revisit the week is reachable quickly.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 17 review and identify the main issue to tighten during Week 18 consolidation.
**Tools:** Obsidian
**Output:** Week 17 review note
**Success criteria:** The Week 18 focus is narrow and evidence-based.

### Outputs
- Aligned artifact set
- Updated tool and workflow notes
- Week 17 linked artifacts
- Week 17 review note

### Session success criteria
- The reasoning story is consistent across notes.
- The notes become more specific and useful.
- Everything needed to revisit the week is reachable quickly.
- The Week 18 focus is narrow and evidence-based.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** PEN-200 or targeted review
**Task:** Review content on footholds, shell handling, or post-exploitation that maps to your current weakest exam-style area.
**Tools:** browser, Obsidian
**Output:** Learning log: `Week 17 Judgment and Shell Handling`
**Success criteria:** The log is tied to concrete decisions you need to make on targets.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Netcat workflow refresh
**Task:** Refresh lab-safe netcat usage such as listener setup, banner grabs, and simple file or shell handling in authorized environments only.
**Tools:** netcat, bash, Obsidian
**Output:** Netcat tool note update
**Success criteria:** The note records when you use netcat and when you should not.

### Outputs
- Learning log: `Week 17 Judgment and Shell Handling`
- Netcat tool note update

### Session success criteria
- The log is tied to concrete decisions you need to make on targets.
- The note records when you use netcat and when you should not.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Target prep
**Task:** Select a sanctioned target likely to force both careful enumeration and some judgment about path selection.
**Tools:** Obsidian
**Output:** Week 17 target selection note
**Success criteria:** The target is chosen for reasoning practice, not novelty.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Short reinforcement lab
**Task:** Do a small web or service drill matching the target's likely surface.
**Tools:** Burp Suite or bash, browser
**Output:** Warm-up note
**Success criteria:** The warm-up supports the main target's expected decisions.

### Outputs
- Week 17 target selection note
- Warm-up note

### Session success criteria
- The target is chosen for reasoning practice, not novelty.
- The warm-up supports the main target's expected decisions.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned PG or TJ Null-aligned target
**Task:** Enumerate methodically and record ranked hypotheses with explicit reasons for the ranking.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Enumeration section draft
**Success criteria:** The note shows controlled judgment, not just commands.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned target
**Task:** Validate the strongest path, using `nc -lvnp <port>` or similar lab-safe netcat support where appropriate for shell capture or banner work.
**Tools:** netcat, Burp Suite, bash
**Output:** Exploit attempt note
**Success criteria:** The note makes netcat usage explicit, scoped, and justified.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned target
**Task:** Pursue foothold and privesc or document the blocker precisely; do not chase weak branches once the evidence turns against them.
**Tools:** linpeas or winpeas, bash
**Output:** Post-access or blocker note
**Success criteria:** The note reflects disciplined cutoff decisions.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup and report drafting
**Task:** Draft the writeup and report fragment with emphasis on reasoning and branch selection.
**Tools:** Obsidian
**Output:** Week 17 writeup and report fragment
**Success criteria:** A reader can see not just what you did, but why you did it.

### Outputs
- Enumeration section draft
- Exploit attempt note
- Post-access or blocker note
- Week 17 writeup and report fragment

### Session success criteria
- The note shows controlled judgment, not just commands.
- The note makes netcat usage explicit, scoped, and justified.
- The note reflects disciplined cutoff decisions.
- A reader can see not just what you did, but why you did it.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Targeted lesson review
**Task:** Review the one lesson or note most related to Wednesday's blocker or success path.
**Tools:** browser, Obsidian
**Output:** Targeted review note
**Success criteria:** The note supports one real next action.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Writeup cleanup
**Task:** Improve the explanation of rejected paths and blockers in the main writeup.
**Tools:** Obsidian
**Output:** Refined Week 17 writeup
**Success criteria:** The artifact shows good judgment, not just successful commands.

### Outputs
- Targeted review note
- Refined Week 17 writeup

### Session success criteria
- The note supports one real next action.
- The artifact shows good judgment, not just successful commands.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- ffuf or gobuster
- Burp Suite
- netcat
- linpeas or winpeas
- bash
- Obsidian

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine writeup
- 1 report fragment
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If the second target causes overload, drop it and preserve the main target's blocker documentation plus report fragment; quality under pressure matters more than extra volume.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
