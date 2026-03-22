---
week: 3
phase: "Phase 0 - Foundations"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - keep the foundation study moving while introducing exploit logic
  - use Burp on simple web labs until request tampering is normal
  - log the first explicit exploit attempt of the program
key_tools:
  - Burp Suite
  - nmap
  - bash
  - browser
  - Obsidian
deliverables:
  - 2 learning logs
  - 1 exploit attempt note
  - 1 practical lab note
  - 1 weekly review
---

# Week 03 - Authentication, common vulnerabilities, and first exploit attempts in guided labs

**Phase:** Phase 0 - Foundations
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** [[30_Reviews/Weekly/Week_03_Review]]

## Weekly focus
- keep the foundation study moving while introducing exploit logic
- use Burp on simple web labs until request tampering is normal
- log the first explicit exploit attempt of the program

## Expected weekly outcomes
- at least one guided exploit attempt note exists
- candidate can explain request tampering, authentication bypass basics, and simple attack-path reasoning
- nmap and Burp are used in the same week with a single workflow

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** TryHackMe or sanctioned local web target
**Task:** Work a beginner web-focused target from enumeration through first exploit attempt; use only the lab target or local intentionally vulnerable app.
**Tools:** nmap, Burp Suite, bash
**Output:** Practical target note with scan, requests, and result
**Success criteria:** The note records the full mini-workflow and whether you achieved the intended foothold or lab objective.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Attack-path writing
**Task:** Turn the Saturday target notes into a short attack-path summary: discovery, validation, exploit, outcome, and next step.
**Tools:** Obsidian
**Output:** Attack-path summary note
**Success criteria:** The summary can be read in under two minutes and still makes the logic clear.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Course review and gap fill
**Task:** Review any Dion or Linux concept that blocked the exploit attempt and add only the missing details, not a full rewrite.
**Tools:** browser, Obsidian
**Output:** Gap-fill note
**Success criteria:** The note is surgical and directly tied to a real blockage from the lab.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Artifact cleanup
**Task:** Sort screenshots, scan output, and notes; make sure the exploit attempt note links back to Week 03 and the related lab platform.
**Tools:** Obsidian, terminal
**Output:** Cleaned Week 03 note
**Success criteria:** All Saturday artifacts are reachable from the week note.

### Outputs
- Practical target note with scan, requests, and result
- Attack-path summary note
- Gap-fill note
- Cleaned Week 03 note

### Session success criteria
- The note records the full mini-workflow and whether you achieved the intended foothold or lab objective.
- The summary can be read in under two minutes and still makes the logic clear.
- The note is surgical and directly tied to a real blockage from the lab.
- All Saturday artifacts are reachable from the week note.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Complete one more beginner lab in the same vulnerability family as the week's main exploit attempt.
**Tools:** Burp Suite, browser
**Output:** Short exploit attempt note
**Success criteria:** You can explain the pattern instead of only the exact lab trick.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Command retention review
**Task:** Re-run the most useful shell and nmap commands from Weeks 1-3 from memory, then correct your command sheet.
**Tools:** bash, nmap
**Output:** Updated command sheet
**Success criteria:** The corrected sheet is short, accurate, and clearly useful for Week 04.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Learning log consolidation
**Task:** Write a learning log that captures your first exploit pattern, how you recognized it, and what still feels unfamiliar.
**Tools:** Obsidian
**Output:** Learning log: `Week 03 - First Exploit Patterns`
**Success criteria:** The note names a repeatable pattern and not just a platform-specific trick.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 03 review and decide what kind of first full machine writeup you want Week 04 to produce.
**Tools:** Obsidian
**Output:** Week 03 review note
**Success criteria:** The review preserves the practical core even if the week felt messy.

### Outputs
- Short exploit attempt note
- Updated command sheet
- Learning log: `Week 03 - First Exploit Patterns`
- Week 03 review note

### Session success criteria
- You can explain the pattern instead of only the exact lab trick.
- The corrected sheet is short, accurate, and clearly useful for Week 04.
- The note names a repeatable pattern and not just a platform-specific trick.
- The review preserves the practical core even if the week felt messy.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Security+
**Task:** Cover identity, access control, and authentication concepts; translate them into offensive questions about login flows and weak controls.
**Tools:** browser, Obsidian
**Output:** Learning log: `Auth Concepts for Attackers`
**Success criteria:** The note links IAM concepts to real testing tasks such as role checks, session handling, and password policy observation.

### Break - 10m
### Hour 2 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Work through authentication basics and solve one beginner lab that requires modifying a request or parameter.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt note for the solved lab
**Success criteria:** The note records the original request, the modified request, and why the modification succeeded.

### Outputs
- Learning log: `Auth Concepts for Attackers`
- Exploit attempt note for the solved lab

### Session success criteria
- The note links IAM concepts to real testing tasks such as role checks, session handling, and password policy observation.
- The note records the original request, the modified request, and why the modification succeeded.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Network+
**Task:** Study common protocols and service uses relevant to offensive enumeration, with emphasis on HTTP, SMB, SSH, FTP, and DNS.
**Tools:** browser, Obsidian
**Output:** Service note with likely attack-surface clues
**Success criteria:** The note gives at least one enumeration idea per protocol.

### Break - 10m
### Hour 2 - 60m active
**Resource:** TryHackMe beginner web room or closest current equivalent
**Task:** Complete a beginner room focused on web requests, parameters, or login testing inside the platform's sanctioned environment.
**Tools:** browser, Burp Suite
**Output:** Practical web lab note
**Success criteria:** The note captures the tested inputs and the condition that signaled success.

### Outputs
- Service note with likely attack-surface clues
- Practical web lab note

### Session success criteria
- The note gives at least one enumeration idea per protocol.
- The note captures the tested inputs and the condition that signaled success.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Linux Basics for Hackers
**Task:** Read and practice the networking and file transfer chapters that support later offensive work.
**Tools:** bash, Obsidian
**Output:** Learning log: `Linux Networking Utilities`
**Success criteria:** The log covers `curl`, `wget`, `ssh`, and simple file movement in a lab context.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Authorized target enumeration
**Task:** Run a fresh `nmap -sC -sV -oA scans/week03_target <lab-ip>` against a sanctioned room or local VM and identify likely web attack surface.
**Tools:** nmap, bash
**Output:** Scan summary note
**Success criteria:** The note connects open services to the next web or service checks you intend to try.

### Break - 10m
### Hour 3 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Solve one beginner SQL injection or XSS lab after reading the matching concept lesson; keep the lab scope strictly inside PortSwigger.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt note with payload and rationale
**Success criteria:** The payload is recorded, the lab is solved, and the note explains the response behavior that confirmed success.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Obsidian artifact linking
**Task:** Link the exploit attempt, scan summary, and concept notes into the Week 03 note and flag the weakest part of the workflow.
**Tools:** Obsidian
**Output:** Updated week note with weak-area tracker
**Success criteria:** A reader can follow the chain from concept to scan to exploit note without missing context.

### Outputs
- Learning log: `Linux Networking Utilities`
- Scan summary note
- Exploit attempt note with payload and rationale
- Updated week note with weak-area tracker

### Session success criteria
- The log covers `curl`, `wget`, `ssh`, and simple file movement in a lab context.
- The note connects open services to the next web or service checks you intend to try.
- The payload is recorded, the lab is solved, and the note explains the response behavior that confirmed success.
- A reader can follow the chain from concept to scan to exploit note without missing context.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Security+
**Task:** Cover secure configuration and common misconfiguration concepts; list which ones you expect to meet first in beginner labs.
**Tools:** browser, Obsidian
**Output:** Misconfiguration concept note
**Success criteria:** The note contains at least five issues that could create exploitable lab findings.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Burp repetition block
**Task:** Repeat the week's solved PortSwigger lab or a similar beginner lab without consulting the previous exploit note for the first 20 minutes.
**Tools:** Burp Suite, browser
**Output:** Repetition checklist
**Success criteria:** You can reproduce the solve path faster and identify where your reasoning still stalls.

### Outputs
- Misconfiguration concept note
- Repetition checklist

### Session success criteria
- The note contains at least five issues that could create exploitable lab findings.
- You can reproduce the solve path faster and identify where your reasoning still stalls.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- Burp Suite
- nmap
- bash
- browser
- Obsidian

## Required artifacts this week
- 2 learning logs
- 1 exploit attempt note
- 1 practical lab note
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If Saturday is missed, preserve one PortSwigger exploit block on Sunday and defer the attack-path summary into the Week 04 review block rather than cramming the full target session.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
