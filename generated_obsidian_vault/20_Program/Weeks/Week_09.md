---
week: 9
phase: "Phase 2 - Intermediate Exploitation"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - shift from mostly guided rooms into more independent HTB-style work
  - keep web and service enumeration unified
  - begin treating Linux privilege escalation as a repeatable checklist problem
key_tools:
  - nmap
  - ffuf or gobuster
  - Burp Suite
  - linpeas
  - bash
  - Obsidian
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine writeup
  - 1 Linux privesc checklist note
  - 1 weekly review
---

# Week 09 - HTB Academy onboarding, more independent enumeration, and first serious Linux privesc prep

**Phase:** Phase 2 - Intermediate Exploitation
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** [[30_Reviews/Weekly/Week_09_Review]]

## Weekly focus
- shift from mostly guided rooms into more independent HTB-style work
- keep web and service enumeration unified
- begin treating Linux privilege escalation as a repeatable checklist problem

## Expected weekly outcomes
- HTB Academy becomes a regular study spine for intermediate work
- one easier target is approached with less hand-holding
- Linux privesc note structure is started and tied to real findings

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Second sanctioned easy target or continuation
**Task:** Run a first-pass enumeration with the same structure you used on Wednesday, aiming for faster hypothesis ranking.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Second target note
**Success criteria:** You reach plausible attack paths faster than on the first target.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Initial access work
**Task:** Pursue the two best attack paths only and record both successful and failed tests cleanly.
**Tools:** Burp Suite, bash, curl
**Output:** Exploit attempt note
**Success criteria:** The note shows discipline in path selection and evidence capture.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Linux privesc repetition
**Task:** If you gain a shell, work through the privesc checklist manually for at least 30 minutes before checking tool output.
**Tools:** bash, linpeas
**Output:** Privesc repetition note
**Success criteria:** The checklist use feels more deliberate and less mysterious than in Week 08.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Learning log
**Task:** Write down what changed when hints became scarcer and targets became less guided.
**Tools:** Obsidian
**Output:** Learning log: `Week 09 Independence Shift`
**Success criteria:** The log identifies where your reasoning is now stronger and where it still depends on structure.

### Outputs
- Second target note
- Exploit attempt note
- Privesc repetition note
- Learning log: `Week 09 Independence Shift`

### Session success criteria
- You reach plausible attack paths faster than on the first target.
- The note shows discipline in path selection and evidence capture.
- The checklist use feels more deliberate and less mysterious than in Week 08.
- The log identifies where your reasoning is now stronger and where it still depends on structure.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Writeup refinement
**Task:** Polish the strongest target from the week into a cleaner report with linked evidence and privesc notes.
**Tools:** Obsidian
**Output:** Revised Week 09 writeup
**Success criteria:** The writeup is ready to serve as a study reference later.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Command maintenance
**Task:** Refresh your nmap, ffuf or gobuster, and linpeas quick-reference notes from this week's real usage.
**Tools:** Obsidian
**Output:** Updated tool references
**Success criteria:** The notes reflect current actual practice.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Artifact cleanup
**Task:** Ensure all HTB Academy notes, machine notes, and privesc findings are linked from Week 09.
**Tools:** Obsidian, terminal
**Output:** Week 09 linked artifact set
**Success criteria:** The week note is complete and navigable.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 09 review and name the Linux privesc step that still needs the most repetition.
**Tools:** Obsidian
**Output:** Week 09 review note
**Success criteria:** The next privesc focus is clearly defined.

### Outputs
- Revised Week 09 writeup
- Updated tool references
- Week 09 linked artifact set
- Week 09 review note

### Session success criteria
- The writeup is ready to serve as a study reference later.
- The notes reflect current actual practice.
- The week note is complete and navigable.
- The next privesc focus is clearly defined.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** HTB Academy beginner or early-intermediate pentesting module
**Task:** Work through the opening methodology or enumeration material and compare it to your existing workflow.
**Tools:** browser, Obsidian
**Output:** Learning log: `HTB Enumeration Adjustments`
**Success criteria:** The log captures what HTB expects that THM did not force you to do consistently.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Linux privilege escalation prep
**Task:** Create a Linux privesc checklist note covering user context, sudo rights, SUID, cron, writable paths, credentials, and kernel or service clues.
**Tools:** Obsidian
**Output:** Linux privesc checklist note
**Success criteria:** The checklist is short, ordered, and usable during a shell session.

### Outputs
- Learning log: `HTB Enumeration Adjustments`
- Linux privesc checklist note

### Session success criteria
- The log captures what HTB expects that THM did not force you to do consistently.
- The checklist is short, ordered, and usable during a shell session.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** HTB Academy service enumeration module
**Task:** Cover service fingerprinting, banner interpretation, or related beginner enumeration content.
**Tools:** browser, Obsidian
**Output:** Service interpretation note
**Success criteria:** The note improves how you turn scan results into next actions.

### Break - 10m
### Hour 2 - 60m active
**Resource:** PortSwigger reinforcement
**Task:** Solve one lab to keep web testing active while HTB becomes the main platform.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt note
**Success criteria:** You maintain Burp rhythm instead of letting web skills cool off.

### Outputs
- Service interpretation note
- Exploit attempt note

### Session success criteria
- The note improves how you turn scan results into next actions.
- You maintain Burp rhythm instead of letting web skills cool off.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Easy sanctioned HTB or equivalent target
**Task:** Perform full enumeration with `nmap -sC -sV`, manual service inspection, and content discovery where relevant.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Enumeration section draft
**Success criteria:** The note is methodical and shows ranked attack hypotheses.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Easy sanctioned HTB or equivalent target
**Task:** Validate the strongest attack path and pursue initial access without looking up a writeup unless fully blocked.
**Tools:** Burp Suite, bash, curl
**Output:** Exploit attempt note
**Success criteria:** The note records your own reasoning before any hint usage.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Linux privesc on the same target if a shell is available
**Task:** Run manual checks first, then use `linpeas.sh` in the authorized lab target to look for common escalation clues.
**Tools:** bash, linpeas
**Output:** Privesc findings note
**Success criteria:** The note distinguishes manual findings from tool output and records which clues are worth pursuing.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Draft the machine writeup while keeping the privesc path or blocker explicit.
**Tools:** Obsidian
**Output:** Week 09 machine writeup
**Success criteria:** The writeup captures enumeration, access, and privesc logic in order.

### Outputs
- Enumeration section draft
- Exploit attempt note
- Privesc findings note
- Week 09 machine writeup

### Session success criteria
- The note is methodical and shows ranked attack hypotheses.
- The note records your own reasoning before any hint usage.
- The note distinguishes manual findings from tool output and records which clues are worth pursuing.
- The writeup captures enumeration, access, and privesc logic in order.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** HTB Academy follow-up
**Task:** Review only the module sections that map to the block that slowed you down on Wednesday.
**Tools:** browser, Obsidian
**Output:** Targeted correction note
**Success criteria:** The note closes one concrete gap from live target work.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Tool note update
**Task:** Update the Linux privesc checklist with real findings from Wednesday instead of generic tips.
**Tools:** Obsidian
**Output:** Updated Linux privesc checklist
**Success criteria:** The checklist is more practical after one real use.

### Outputs
- Targeted correction note
- Updated Linux privesc checklist

### Session success criteria
- The note closes one concrete gap from live target work.
- The checklist is more practical after one real use.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- ffuf or gobuster
- Burp Suite
- linpeas
- bash
- Obsidian

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine writeup
- 1 Linux privesc checklist note
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If Wednesday is missed, keep Saturday's first target intact, reuse Monday's new privesc checklist there, and defer the writeup polish into Sunday.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
