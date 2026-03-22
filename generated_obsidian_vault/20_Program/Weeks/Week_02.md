---
week: 2
phase: "Phase 0 - Foundations"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - turn basic networking terms into usable mental models
  - repeat Linux file and user management until it feels routine
  - run more than one lab-safe scan and compare results
key_tools:
  - nmap
  - bash
  - Obsidian
  - browser
  - Burp Suite
deliverables:
  - 2 learning logs
  - 1 practical lab note
  - 1 nmap comparison note
  - 1 weekly review
---

# Week 02 - Subnetting, host communication, Linux users, and first repeatable scanning workflow

**Phase:** Phase 0 - Foundations
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** [[30_Reviews/Weekly/Week_02_Review]]

## Weekly focus
- turn basic networking terms into usable mental models
- repeat Linux file and user management until it feels routine
- run more than one lab-safe scan and compare results

## Expected weekly outcomes
- subnet, gateway, DNS, and routing concepts are usable during enumeration
- basic Linux user, process, and networking commands are familiar
- a repeatable note format exists for scans and beginner lab observations
- at least one more hands-on lab note is complete

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** TryHackMe foundational room
**Task:** Finish one room that mixes Linux, networking, and basic service inspection.
**Tools:** browser, bash, nmap
**Output:** Practical lab note with task completion markers
**Success criteria:** The room is completed and the note explains what each main step accomplished.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned target service analysis
**Task:** Take one allowed target from THM or a local vulnerable VM and map service, version, and probable next-step hypotheses from your nmap results.
**Tools:** nmap, Obsidian
**Output:** Attack-surface hypothesis note
**Success criteria:** You list at least three realistic next steps and rank them.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Linux shell repetition
**Task:** Repeat user, process, and package commands without looking at prior notes for 30 minutes, then check accuracy against your notes.
**Tools:** bash
**Output:** Repetition checklist
**Success criteria:** The repeated commands are mostly correct and gaps are explicitly logged.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly artifact merge
**Task:** Consolidate all notes, copy final screenshots into the week folder, and write one paragraph on what still feels mechanical instead of natural.
**Tools:** Obsidian, terminal
**Output:** Week 02 summary section
**Success criteria:** The week note clearly shows what was learned, practiced, and still weak.

### Outputs
- Practical lab note with task completion markers
- Attack-surface hypothesis note
- Repetition checklist
- Week 02 summary section

### Session success criteria
- The room is completed and the note explains what each main step accomplished.
- You list at least three realistic next steps and rank them.
- The repeated commands are mostly correct and gaps are explicitly logged.
- The week note clearly shows what was learned, practiced, and still weak.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Complete one more beginner lab on authentication or request tampering and explain why the payload works.
**Tools:** Burp Suite, browser
**Output:** Short web lab note
**Success criteria:** The note describes the changed request and why the lab accepted it.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Jason Dion Network+ review block
**Task:** Review the week's hardest networking concept and rebuild it from memory in your notes before checking the course material.
**Tools:** browser, Obsidian
**Output:** Memory recall note
**Success criteria:** The corrected note makes it obvious what you forgot and what you now understand.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Learning log consolidation
**Task:** Write a concise log of the week's commands, concepts, and scan heuristics worth carrying forward.
**Tools:** Obsidian
**Output:** Learning log: `Week 02 Consolidated Lessons`
**Success criteria:** The note contains commands, interpretation logic, and next-week prep.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 02 review and identify the first exploit-oriented activity you want to execute in Week 03.
**Tools:** Obsidian
**Output:** Week 02 review note
**Success criteria:** The review names one concept to stop re-reading and one practical area to start pushing harder.

### Outputs
- Short web lab note
- Memory recall note
- Learning log: `Week 02 Consolidated Lessons`
- Week 02 review note

### Session success criteria
- The note describes the changed request and why the lab accepted it.
- The corrected note makes it obvious what you forgot and what you now understand.
- The note contains commands, interpretation logic, and next-week prep.
- The review names one concept to stop re-reading and one practical area to start pushing harder.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Network+
**Task:** Cover subnetting, DHCP, DNS, and default gateway behavior; write three offensive questions each concept would prompt during enumeration.
**Tools:** browser, Obsidian
**Output:** Learning log: `Week 02 - Subnetting and Naming`
**Success criteria:** The note explains why DNS, DHCP, and gateways matter when you are trying to understand a target environment.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Local networking practice
**Task:** Run `ip a`, `ip route`, `ss -tuln`, `nslookup`, and `ping` in the local lab environment; record what each command tells you and when you would use it.
**Tools:** bash
**Output:** Command reference note with local outputs
**Success criteria:** Each command has an example output and one offensive use case written in your own words.

### Outputs
- Learning log: `Week 02 - Subnetting and Naming`
- Command reference note with local outputs

### Session success criteria
- The note explains why DNS, DHCP, and gateways matter when you are trying to understand a target environment.
- Each command has an example output and one offensive use case written in your own words.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Linux Basics for Hackers
**Task:** Read and practice the chapters on users, groups, processes, and package management.
**Tools:** bash, Obsidian
**Output:** Learning log: `Linux Users and Processes`
**Success criteria:** You can create a user, inspect running processes, and explain why those actions matter for privesc later.

### Break - 10m
### Hour 2 - 60m active
**Resource:** TryHackMe networking room or closest current equivalent
**Task:** Complete a beginner task set on DNS, HTTP, or host communication and capture the commands that worked.
**Tools:** browser, bash
**Output:** Practical lab note with screenshots or copied commands
**Success criteria:** The note records one completed task, one wrong turn, and one concept that still needs review.

### Outputs
- Learning log: `Linux Users and Processes`
- Practical lab note with screenshots or copied commands

### Session success criteria
- You can create a user, inspect running processes, and explain why those actions matter for privesc later.
- The note records one completed task, one wrong turn, and one concept that still needs review.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Complete request/response handling and cookies basics; in Burp, replay one request with a cookie or header changed.
**Tools:** Burp Suite, browser
**Output:** HTTP state management note
**Success criteria:** The note explains what changed in the response when the cookie or header changed.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Nmap focused repetition
**Task:** Run `nmap -sn`, `-sV`, and `-A` against one authorized lab target and compare what each scan adds; do not scan anything outside the training environment.
**Tools:** nmap, bash
**Output:** Nmap comparison note
**Success criteria:** You can explain tradeoffs between quick host discovery, version detection, and more aggressive scripts.

### Break - 10m
### Hour 3 - 60m active
**Resource:** TryHackMe introductory nmap content or closest current equivalent
**Task:** Work through the platform's nmap teaching material and mirror each safe example in your own lab notes.
**Tools:** browser, nmap
**Output:** Lab note: `Week 02 - Nmap Primer`
**Success criteria:** You finish the selected material and document at least five nmap flags worth reusing later.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Obsidian cleanup and flash review
**Task:** Link the week's networking, Linux, HTTP, and nmap notes; create a short 'commands I keep forgetting' list.
**Tools:** Obsidian
**Output:** Commands-to-repeat note
**Success criteria:** The note contains at least eight commands and links back to the week file.

### Outputs
- HTTP state management note
- Nmap comparison note
- Lab note: `Week 02 - Nmap Primer`
- Commands-to-repeat note

### Session success criteria
- The note explains what changed in the response when the cookie or header changed.
- You can explain tradeoffs between quick host discovery, version detection, and more aggressive scripts.
- You finish the selected material and document at least five nmap flags worth reusing later.
- The note contains at least eight commands and links back to the week file.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Jason Dion Security+
**Task:** Cover secure protocols, common services, and segmentation concepts; map them to likely enumeration findings.
**Tools:** browser, Obsidian
**Output:** Service interpretation note
**Success criteria:** The note connects SSH, SMB, RDP, HTTP, HTTPS, and DNS to attack-surface thinking.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Local lab HTTP practice
**Task:** Use browser dev tools and Burp to inspect a login form or basic web page in a sanctioned training app; note the method, parameters, and cookies.
**Tools:** Burp Suite, browser
**Output:** Request anatomy note
**Success criteria:** You can point to every field in the request and say whether it is user-controlled or server-generated.

### Outputs
- Service interpretation note
- Request anatomy note

### Session success criteria
- The note connects SSH, SMB, RDP, HTTP, HTTPS, and DNS to attack-surface thinking.
- You can point to every field in the request and say whether it is user-controlled or server-generated.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- bash
- Obsidian
- browser
- Burp Suite

## Required artifacts this week
- 2 learning logs
- 1 practical lab note
- 1 nmap comparison note
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If a 2-hour day is missed, move only the concept summary into Thursday or next Tuesday and keep the Saturday hands-on target analysis untouched.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
