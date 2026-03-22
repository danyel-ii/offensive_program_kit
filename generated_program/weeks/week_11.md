---
week: 11
phase: "Phase 2 - Intermediate Exploitation"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - introduce Windows enumeration and common privilege escalation paths
  - treat SMB, WinRM, services, tasks, and local groups as normal investigation surfaces
  - keep Linux and web skills warm while Windows becomes the weekly emphasis
key_tools:
  - nmap
  - winpeas
  - bash
  - RDP or WinRM client if available in lab
  - Obsidian
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine writeup
  - 1 Windows privesc checklist note
  - 1 weekly review
---

# Week 11 - Windows basics for offensive work and first Windows privesc repetition

**Phase:** Phase 2 - Intermediate Exploitation
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** `generated_obsidian_vault/30_Reviews/Weekly/Week_11_Review.md`

## Weekly focus
- introduce Windows enumeration and common privilege escalation paths
- treat SMB, WinRM, services, tasks, and local groups as normal investigation surfaces
- keep Linux and web skills warm while Windows becomes the weekly emphasis

## Expected weekly outcomes
- candidate has a usable Windows privesc checklist
- one target or training path includes meaningful Windows service analysis
- winpeas is used as a confirmation tool rather than a substitute for reasoning

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Second sanctioned Windows target or continuation
**Task:** Repeat the Windows enumeration process and look for faster service triage.
**Tools:** nmap, browser, bash
**Output:** Second Windows target note
**Success criteria:** You can get to the best two hypotheses more efficiently than on Wednesday.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Access work
**Task:** Pursue the strongest access path and record decisive evidence for success or failure.
**Tools:** bash, browser
**Output:** Exploit attempt note
**Success criteria:** The note is concise, evidence-driven, and clear about branch selection.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Windows privesc repetition
**Task:** Run the checklist again if you gain access, or simulate it on an existing lab shell if the fresh target does not yield access.
**Tools:** winpeas, bash or remote shell client
**Output:** Privesc repetition note
**Success criteria:** The checklist use is faster and more structured than on Wednesday.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Learning log
**Task:** Write down the main differences between your Linux and Windows post-access habits so far.
**Tools:** Obsidian
**Output:** Learning log: `Week 11 - Windows vs Linux Post-Access`
**Success criteria:** The log names practical differences, not just operating system trivia.

### Outputs
- Second Windows target note
- Exploit attempt note
- Privesc repetition note
- Learning log: `Week 11 - Windows vs Linux Post-Access`

### Session success criteria
- You can get to the best two hypotheses more efficiently than on Wednesday.
- The note is concise, evidence-driven, and clear about branch selection.
- The checklist use is faster and more structured than on Wednesday.
- The log names practical differences, not just operating system trivia.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Writeup refinement
**Task:** Polish the strongest Windows target note into a report-quality writeup.
**Tools:** Obsidian
**Output:** Refined Week 11 writeup
**Success criteria:** The writeup communicates Windows-specific logic cleanly.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Command and checklist review
**Task:** Refresh the Windows privesc quick-reference note and compare it to the Linux one.
**Tools:** Obsidian
**Output:** Updated Windows quick-reference note
**Success criteria:** The note is practical, short, and worth reusing.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Artifact cleanup
**Task:** Ensure all target notes, screenshots, and checklists link back to Week 11.
**Tools:** Obsidian, terminal
**Output:** Week 11 artifact set
**Success criteria:** The week note is navigable and complete.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 11 review and identify whether Linux or Windows currently feels weaker.
**Tools:** Obsidian
**Output:** Week 11 review note
**Success criteria:** The weaker operating system is explicitly named for Week 12 consolidation.

### Outputs
- Refined Week 11 writeup
- Updated Windows quick-reference note
- Week 11 artifact set
- Week 11 review note

### Session success criteria
- The writeup communicates Windows-specific logic cleanly.
- The note is practical, short, and worth reusing.
- The week note is navigable and complete.
- The weaker operating system is explicitly named for Week 12 consolidation.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** HTB Academy Windows privilege escalation module or closest stable equivalent
**Task:** Study user rights, services, scheduled tasks, registry clues, local groups, passwords in files, and patch or config issues.
**Tools:** browser, Obsidian
**Output:** Learning log: `Windows Privesc Patterns`
**Success criteria:** The log turns the module into a short set of checks you can run after getting access.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Windows privesc checklist drafting
**Task:** Create a one-page Windows privesc checklist ordered by likely signal: user context, groups, privileges, services, tasks, registry, stored creds.
**Tools:** Obsidian
**Output:** Windows privesc checklist note
**Success criteria:** The checklist is compact enough to consult during a live target session.

### Outputs
- Learning log: `Windows Privesc Patterns`
- Windows privesc checklist note

### Session success criteria
- The log turns the module into a short set of checks you can run after getting access.
- The checklist is compact enough to consult during a live target session.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Service and share enumeration practice
**Task:** Review how to interpret SMB, RDP, WinRM, and HTTP findings from nmap on training targets.
**Tools:** browser, Obsidian
**Output:** Windows service interpretation note
**Success criteria:** The note maps services to concrete next checks.

### Break - 10m
### Hour 2 - 60m active
**Resource:** PortSwigger or short web reinforcement
**Task:** Solve one short web lab so Burp and request analysis stay active this week.
**Tools:** Burp Suite, browser
**Output:** Short exploit note
**Success criteria:** Web testing continuity is preserved.

### Outputs
- Windows service interpretation note
- Short exploit note

### Session success criteria
- The note maps services to concrete next checks.
- Web testing continuity is preserved.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned easy Windows target
**Task:** Enumerate services, shares, web surfaces, and likely access vectors with `nmap -sC -sV -oA scans/week11_target <lab-ip>` and manual inspection.
**Tools:** nmap, browser, bash
**Output:** Enumeration section draft
**Success criteria:** The note turns scan findings into ranked hypotheses for a Windows target.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned easy Windows target
**Task:** Pursue the best access path and document every credential, clue, or failed branch carefully.
**Tools:** bash, browser
**Output:** Exploit attempt note
**Success criteria:** The note makes the reasoning visible even if initial access is not completed.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned easy Windows target
**Task:** If you gain access, run the manual Windows privesc checklist first, then use `winPEAS` or the closest allowed equivalent to confirm findings.
**Tools:** winpeas, bash or remote shell client
**Output:** Windows privesc findings note
**Success criteria:** The note distinguishes between strong signals and background noise.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Draft the machine writeup with Windows-specific notes and lessons learned.
**Tools:** Obsidian
**Output:** Week 11 machine writeup
**Success criteria:** A future you can use the writeup as a Windows workflow reference.

### Outputs
- Enumeration section draft
- Exploit attempt note
- Windows privesc findings note
- Week 11 machine writeup

### Session success criteria
- The note turns scan findings into ranked hypotheses for a Windows target.
- The note makes the reasoning visible even if initial access is not completed.
- The note distinguishes between strong signals and background noise.
- A future you can use the writeup as a Windows workflow reference.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** HTB Academy follow-up
**Task:** Review the Windows privesc topic that matched your findings or blocker most closely.
**Tools:** browser, Obsidian
**Output:** Targeted Windows correction note
**Success criteria:** The correction note maps directly to the live target's evidence.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Checklist refinement
**Task:** Update the Windows privesc checklist using the real findings from Wednesday.
**Tools:** Obsidian
**Output:** Refined Windows privesc checklist
**Success criteria:** The checklist is now better prioritized and more practical.

### Outputs
- Targeted Windows correction note
- Refined Windows privesc checklist

### Session success criteria
- The correction note maps directly to the live target's evidence.
- The checklist is now better prioritized and more practical.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- winpeas
- bash
- RDP or WinRM client if available in lab
- Obsidian

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine writeup
- 1 Windows privesc checklist note
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If the fresh Windows target does not yield a shell, preserve the writeup and checklist update anyway; the week still succeeds if the reasoning and blocker documentation are strong.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
