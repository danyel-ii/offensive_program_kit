---
week: 1
phase: "Phase 0 - Foundations"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - build the lab workspace and Obsidian execution flow
  - start Jason Dion Network+ and Security+ in parallel with hands-on basics
  - make Linux CLI and HTTP concrete immediately
key_tools:
  - nmap
  - Burp Suite
  - bash
  - Obsidian
  - browser dev tools
deliverables:
  - 2 learning logs
  - 1 practical lab note
  - 1 weekly review
  - 1 setup checklist note
---

# Week 01 - Environment setup, networking baseline, first lab notes

**Phase:** Phase 0 - Foundations
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** `generated_obsidian_vault/30_Reviews/Weekly/Week_01_Review.md`

## Weekly focus
- build the lab workspace and Obsidian execution flow
- start Jason Dion Network+ and Security+ in parallel with hands-on basics
- make Linux CLI and HTTP concrete immediately

## Expected weekly outcomes
- working Kali, VM, WSL, or equivalent Linux environment verified
- Obsidian vault workflow and artifact folders are usable
- first hands-on note exists from THM or a local intentionally vulnerable target
- nmap, Burp Suite, browser proxying, and shell access are verified in a lab-only context

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** TryHackMe Linux fundamentals room or closest current equivalent
**Task:** Complete a beginner Linux room segment focused on navigation, users, and permissions.
**Tools:** browser, bash
**Output:** Lab note for Linux fundamentals
**Success criteria:** You finish the segment and record at least three commands worth reusing.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned lab target enumeration
**Task:** Run a basic scan such as `nmap -sC -sV -oA scans/week01_target <lab-ip>` against the allowed THM/local target and note the default scripts that return useful context.
**Tools:** nmap, bash
**Output:** Nmap scan summary note
**Success criteria:** You save the scan output and summarize open ports plus likely next steps.

### Break - 10m
### Hour 3 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Complete one beginner lab on request handling or basic authentication logic.
**Tools:** Burp Suite, browser
**Output:** Short lab completion note
**Success criteria:** The note states what was changed in the request and why the lab passed.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Artifact consolidation
**Task:** Organize screenshots, scan output, and notes into the week folder; add tags and links in Obsidian.
**Tools:** Obsidian, terminal
**Output:** Cleaned Week 01 note with linked artifacts
**Success criteria:** All artifacts are stored in predictable places and linked from the week note.

### Outputs
- Lab note for Linux fundamentals
- Nmap scan summary note
- Short lab completion note
- Cleaned Week 01 note with linked artifacts

### Session success criteria
- You finish the segment and record at least three commands worth reusing.
- You save the scan output and summarize open ports plus likely next steps.
- The note states what was changed in the request and why the lab passed.
- All artifacts are stored in predictable places and linked from the week note.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Security+
**Task:** Finish the week's assigned defensive fundamentals and translate three ideas into offensive relevance, such as exposed services, weak config, or poor segmentation.
**Tools:** browser, Obsidian
**Output:** Concept bridge note
**Success criteria:** The note turns security theory into offensive reconnaissance questions.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Local shell and HTTP repetition
**Task:** Repeat the Linux and HTTP commands that felt slow: re-run the shell drill and use Burp Repeater on the same sanctioned target without notes for 20 minutes.
**Tools:** bash, Burp Suite
**Output:** Repetition checklist
**Success criteria:** You can repeat the workflow faster and identify what still requires a cheat sheet.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Learning log consolidation
**Task:** Write a single summary note of the week's most useful concepts, commands, and mistakes.
**Tools:** Obsidian
**Output:** Learning log: `Week 01 Consolidated Lessons`
**Success criteria:** The note is short, specific, and linked to Week 01.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 01 review note and set the first priority for Week 02.
**Tools:** Obsidian
**Output:** Week 01 review note
**Success criteria:** The review names one strong area, one weak area, and one concrete correction for next week.

### Outputs
- Concept bridge note
- Repetition checklist
- Learning log: `Week 01 Consolidated Lessons`
- Week 01 review note

### Session success criteria
- The note turns security theory into offensive reconnaissance questions.
- You can repeat the workflow faster and identify what still requires a cheat sheet.
- The note is short, specific, and linked to Week 01.
- The review names one strong area, one weak area, and one concrete correction for next week.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Network+
**Task:** Watch the opening networking modules on OSI, TCP vs UDP, IP addresses, and ports; write a 12-line summary in your own words.
**Tools:** browser, Obsidian
**Output:** Learning log: `Week 01 - Network Baseline`
**Success criteria:** You can explain OSI layers, ports, and TCP vs UDP without copying the course wording.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Local lab setup
**Task:** Create the working directories `labs/`, `scans/`, `reports/`, and `loot/`; verify `nmap --version`, start Burp, and confirm shell access in the authorized local lab environment.
**Tools:** terminal, nmap, Burp Suite
**Output:** Setup checklist note with screenshots or command results
**Success criteria:** All core tools launch and the note records where scans, screenshots, and writeups will live.

### Outputs
- Learning log: `Week 01 - Network Baseline`
- Setup checklist note with screenshots or command results

### Session success criteria
- You can explain OSI layers, ports, and TCP vs UDP without copying the course wording.
- All core tools launch and the note records where scans, screenshots, and writeups will live.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Security+
**Task:** Cover threat, vulnerability, and attack surface basics; map five terms from the course to offensive lab work you expect to do later.
**Tools:** browser, Obsidian
**Output:** Learning log: `Week 01 - Security Vocabulary`
**Success criteria:** The note links each term to a concrete lab example such as exposed service, weak auth, or vulnerable web input.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Linux Basics for Hackers + local shell
**Task:** Practice `pwd`, `ls`, `cd`, `mkdir`, `cp`, `mv`, `cat`, `less`, `grep`, and file permissions on sample files in the lab workspace.
**Tools:** bash
**Output:** Command transcript note with 10 commands and one sentence for each
**Success criteria:** You can navigate, create files, and change permissions without checking a cheat sheet every command.

### Outputs
- Learning log: `Week 01 - Security Vocabulary`
- Command transcript note with 10 commands and one sentence for each

### Session success criteria
- The note links each term to a concrete lab example such as exposed service, weak auth, or vulnerable web input.
- You can navigate, create files, and change permissions without checking a cheat sheet every command.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Linux Basics for Hackers
**Task:** Read the opening Linux and filesystem chapters, then mirror the examples in the local shell for 20 minutes.
**Tools:** bash, Obsidian
**Output:** Learning log: `Linux Filesystem and Permissions`
**Success criteria:** The log explains absolute vs relative paths, ownership, and why permissions matter offensively.

### Break - 10m
### Hour 2 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Complete the HTTP basics lessons and manually inspect one request and one response in Burp Repeater.
**Tools:** Burp Suite, browser
**Output:** HTTP note with one annotated raw request and one annotated raw response
**Success criteria:** The annotations correctly identify method, path, headers, cookies, and body behavior.

### Break - 10m
### Hour 3 - 60m active
**Resource:** TryHackMe foundational networking room or closest current equivalent
**Task:** Finish one beginner lab on ports, services, and host discovery inside the platform's sanctioned target.
**Tools:** browser, terminal, nmap
**Output:** Practical lab note with service findings
**Success criteria:** The note records at least one scan, one service observed, and one question to revisit later.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Obsidian workflow
**Task:** Create the first linked notes for the week, connect the learning logs to the week note, and record weak areas.
**Tools:** Obsidian
**Output:** Linked week note section updates
**Success criteria:** Week 01 links cleanly to its logs and the weak-area list is populated.

### Outputs
- Learning log: `Linux Filesystem and Permissions`
- HTTP note with one annotated raw request and one annotated raw response
- Practical lab note with service findings
- Linked week note section updates

### Session success criteria
- The log explains absolute vs relative paths, ownership, and why permissions matter offensively.
- The annotations correctly identify method, path, headers, cookies, and body behavior.
- The note records at least one scan, one service observed, and one question to revisit later.
- Week 01 links cleanly to its logs and the weak-area list is populated.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Network+
**Task:** Cover switching, routing, subnet basics, and common service ports; build a compact port-to-service table for 10 core ports.
**Tools:** browser, Obsidian
**Output:** Port/service reference note
**Success criteria:** You can identify why 22, 53, 80, 139, 443, and 445 matter during enumeration.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Burp Suite setup in a lab-only target
**Task:** Configure the browser proxy, intercept a request to a sanctioned training target, send it to Repeater, and change one harmless parameter.
**Tools:** Burp Suite, browser
**Output:** Burp setup note with one screenshot and one modified request
**Success criteria:** Burp interception works and the request/response pair is saved in notes.

### Outputs
- Port/service reference note
- Burp setup note with one screenshot and one modified request

### Session success criteria
- You can identify why 22, 53, 80, 139, 443, and 445 matter during enumeration.
- Burp interception works and the request/response pair is saved in notes.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- Burp Suite
- bash
- Obsidian
- browser dev tools

## Required artifacts this week
- 2 learning logs
- 1 practical lab note
- 1 weekly review
- 1 setup checklist note

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If Wednesday is missed, keep Saturday's first sanctioned scan intact and move only the Obsidian cleanup block into Sunday.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
