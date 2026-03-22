---
week: 10
phase: "Phase 2 - Intermediate Exploitation"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - make Linux privesc feel procedural instead of improvised
  - keep enumeration quality high while shifting more time into shell post-exploitation
  - record privesc findings as reusable heuristics
key_tools:
  - nmap
  - ffuf or gobuster
  - linpeas
  - bash
  - ssh
  - Obsidian
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine writeup
  - 1 privesc note update
  - 1 weekly review
---

# Week 10 - Linux privilege escalation repetition with easier independent targets

**Phase:** Phase 2 - Intermediate Exploitation
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** `generated_obsidian_vault/30_Reviews/Weekly/Week_10_Review.md`

## Weekly focus
- make Linux privesc feel procedural instead of improvised
- keep enumeration quality high while shifting more time into shell post-exploitation
- record privesc findings as reusable heuristics

## Expected weekly outcomes
- candidate follows a Linux privesc checklist reliably after gaining a shell
- one target writeup includes meaningful privesc analysis
- linpeas output is interpreted rather than blindly trusted

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Second sanctioned Linux target or continuation
**Task:** Perform a faster first-pass enumeration with emphasis on getting to a foothold efficiently.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Second target note
**Success criteria:** You move through reconnaissance faster than on Wednesday.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Initial access
**Task:** Validate the best exploit path and secure a shell or document the final blocker precisely.
**Tools:** bash, Burp Suite, curl
**Output:** Exploit attempt note
**Success criteria:** The note records why the chosen path was stronger than the alternatives.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Privesc drill
**Task:** Run the manual checklist again under the shell and capture one short privesc decision tree for future use.
**Tools:** bash, linpeas
**Output:** Privesc decision-tree note
**Success criteria:** The decision tree is concise and tied to actual evidence.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Learning log
**Task:** Write the week's main lesson about distinguishing 'enumeration complete' from 'enumeration still too shallow.'
**Tools:** Obsidian
**Output:** Learning log: `Week 10 - Privesc Readiness`
**Success criteria:** The note draws the line between good recon and lucky recon.

### Outputs
- Second target note
- Exploit attempt note
- Privesc decision-tree note
- Learning log: `Week 10 - Privesc Readiness`

### Session success criteria
- You move through reconnaissance faster than on Wednesday.
- The note records why the chosen path was stronger than the alternatives.
- The decision tree is concise and tied to actual evidence.
- The note draws the line between good recon and lucky recon.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Writeup refinement
**Task:** Polish the strongest target's writeup and make the privesc section easier to skim.
**Tools:** Obsidian
**Output:** Refined Week 10 writeup
**Success criteria:** The report highlights the useful checks and deprioritizes noise.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Command review
**Task:** Refresh the commands and manual checks you now consider first-response Linux privesc habits.
**Tools:** Obsidian
**Output:** Updated Linux privesc quick-reference note
**Success criteria:** The note is shorter and better prioritized.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Artifact cleanup
**Task:** Link the week's target notes, learning log, and privesc checklist from Week 10.
**Tools:** Obsidian, terminal
**Output:** Linked week artifacts
**Success criteria:** Week 10 is easy to navigate from the vault.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 10 review with explicit attention to how you triage shell findings.
**Tools:** Obsidian
**Output:** Week 10 review note
**Success criteria:** The next privesc correction is specific and practical.

### Outputs
- Refined Week 10 writeup
- Updated Linux privesc quick-reference note
- Linked week artifacts
- Week 10 review note

### Session success criteria
- The report highlights the useful checks and deprioritizes noise.
- The note is shorter and better prioritized.
- Week 10 is easy to navigate from the vault.
- The next privesc correction is specific and practical.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** HTB Academy Linux privilege escalation module or closest stable equivalent
**Task:** Work through the overview content on user context, sudo, SUID, cron, PATH abuse, and readable credentials.
**Tools:** browser, Obsidian
**Output:** Learning log: `Linux Privesc Patterns`
**Success criteria:** The log lists the main categories and why each matters.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Checklist tuning
**Task:** Turn the module content into a one-page field checklist ordered by what you check first after landing a shell.
**Tools:** Obsidian
**Output:** Updated Linux privesc checklist
**Success criteria:** The checklist is actionable during a shell and avoids long theory paragraphs.

### Outputs
- Learning log: `Linux Privesc Patterns`
- Updated Linux privesc checklist

### Session success criteria
- The log lists the main categories and why each matters.
- The checklist is actionable during a shell and avoids long theory paragraphs.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Short lab shell practice
**Task:** Practice post-exploitation shell basics in a local vulnerable VM or previously completed training box: `id`, `sudo -l`, `uname -a`, `find` for SUID, cron inspection, and config file review.
**Tools:** bash
**Output:** Post-exploitation command note
**Success criteria:** You can run the first 8-10 privesc checks from memory.

### Break - 10m
### Hour 2 - 60m active
**Resource:** PortSwigger or HTB Academy web reinforcement
**Task:** Do one short web-focused exercise so Burp does not drop out of your weekly rhythm.
**Tools:** Burp Suite, browser
**Output:** Short exploit note
**Success criteria:** Web testing remains active even during a privesc-heavy week.

### Outputs
- Post-exploitation command note
- Short exploit note

### Session success criteria
- You can run the first 8-10 privesc checks from memory.
- Web testing remains active even during a privesc-heavy week.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned easy Linux target
**Task:** Enumerate the target fully and identify the most plausible initial access paths.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Enumeration section draft
**Success criteria:** The target note shows methodical recon and ranked hypotheses.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned easy Linux target
**Task:** Achieve or work toward initial access using the strongest path with disciplined notes.
**Tools:** bash, Burp Suite, curl
**Output:** Exploit attempt note
**Success criteria:** The note documents evidence, not just success or failure.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned easy Linux target
**Task:** Run your manual Linux privesc checklist, then use `linpeas.sh` to confirm or extend findings inside the authorized lab target.
**Tools:** bash, linpeas
**Output:** Privesc findings note
**Success criteria:** The note separates high-signal clues from noisy output.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Draft the machine writeup with an explicit privesc section and lessons learned.
**Tools:** Obsidian
**Output:** Week 10 machine writeup
**Success criteria:** The privesc logic is clear enough to repeat on a future box.

### Outputs
- Enumeration section draft
- Exploit attempt note
- Privesc findings note
- Week 10 machine writeup

### Session success criteria
- The target note shows methodical recon and ranked hypotheses.
- The note documents evidence, not just success or failure.
- The note separates high-signal clues from noisy output.
- The privesc logic is clear enough to repeat on a future box.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** HTB Academy follow-up
**Task:** Review the Linux privesc subtopic that matched the week's real finding or blocker.
**Tools:** browser, Obsidian
**Output:** Targeted privesc correction note
**Success criteria:** The note closes a real gap from Wednesday's shell work.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Tool note maintenance
**Task:** Update the `linpeas` or `Linux privesc checklist` notes with what proved most valuable this week.
**Tools:** Obsidian
**Output:** Refined privesc reference
**Success criteria:** The note becomes more selective and field-usable.

### Outputs
- Targeted privesc correction note
- Refined privesc reference

### Session success criteria
- The note closes a real gap from Wednesday's shell work.
- The note becomes more selective and field-usable.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- ffuf or gobuster
- linpeas
- bash
- ssh
- Obsidian

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine writeup
- 1 privesc note update
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If a 2-hour day is lost, preserve the shell and privesc drill blocks first; drop passive module review before dropping hands-on shell time.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
