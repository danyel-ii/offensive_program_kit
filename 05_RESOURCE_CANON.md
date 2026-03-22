# Resource Canon

This is the canonical resource stack for the program.

Codex should use these resources in roughly this order unless a strong instructional reason exists to shift a small amount of emphasis.

If a resource or path has changed names, choose the nearest equivalent and record it in `generated_program/98_resource_substitutions.md`.

## Design principle
Prefer:
- stable paths
- stable academies
- platform-native beginner / easy progression
- modules with durable names

Be cautious with:
- retired one-off machine names
- stale course paths
- fragile references that may disappear

---

## Phase 0 — Foundations (Weeks 1–4)

### Required
1. Jason Dion — CompTIA Network+ (Udemy)
2. Jason Dion — CompTIA Security+ (Udemy)
3. Linux Basics for Hackers — OccupyTheWeb
4. PortSwigger Web Security Academy
5. TryHackMe foundational rooms / path(s)

### Strongly recommended supplements
6. David Bombal practical networking content (or closest equivalent hands-on networking course)
7. Basic local Linux shell practice in Kali / Ubuntu / WSL

### Learning goals
- networking vocabulary becomes usable
- Linux CLI becomes comfortable
- HTTP becomes concrete
- initial account / lab environment gets set up
- first practical lab notes are produced

---

## Phase 1 — Offensive Entry (Weeks 5–8)

### Required
1. TCM Security — Practical Ethical Hacking (PEH)
2. TryHackMe:
   - Intro to Pentesting
   - Nmap
   - Burp Suite basics
   - offensive / jr pentester beginner rooms or closest equivalents
3. PortSwigger labs:
   - HTTP basics
   - authentication basics
   - SQL injection basics
   - XSS basics
4. Continued Linux practice

### Learning goals
- routine with enumeration
- initial web testing muscle memory
- first exploit attempts in lab environments
- first simple writeups

---

## Phase 2 — Intermediate Exploitation (Weeks 9–14)

### Required
1. Hack The Box Academy — beginner / early intermediate pentesting modules
2. Hack The Box / equivalent lab boxes (easy first, then slightly harder)
3. PortSwigger intermediate labs
4. Linux Privilege Escalation practice
5. Windows Privilege Escalation practice
6. Tool repetition:
   - nmap
   - Burp Suite
   - gobuster or ffuf
   - netcat
   - linpeas / winpeas

### Learning goals
- service and web enumeration become habitual
- privilege escalation becomes routine rather than mysterious
- machine volume increases
- attack chains start to form

---

## Phase 3 — OSCP Track (Weeks 15–24)

### Required
1. OffSec PEN-200
2. OffSec Proving Grounds Practice
3. TJ Null OSCP-like preparation list or closest current equivalent
4. OSCP-style report writing
5. Mock / timed simulation work in later weeks

### Learning goals
- independence
- speed
- disciplined note-taking
- full attack chains
- repeatable reporting

---

## Platform usage preferences

### TryHackMe
Use THM early for:
- foundations
- beginner offensive rooms
- room-based structured progression

### PortSwigger
Use for:
- web logic
- request/response thinking
- web vuln mechanics
- repeated deliberate practice

### HTB Academy / HTB
Use for:
- more realistic enumeration
- more independent problem-solving
- tool repetition
- intermediate growth

### Proving Grounds / PEN-200
Use for:
- exam-style progression
- late-stage hardening
- OSCP preparation

---

## Tool canon
The program must repeatedly integrate:
- nmap
- Burp Suite
- gobuster or ffuf
- netcat
- linpeas / winpeas

Nice-to-have if it helps:
- curl
- wget
- dirsearch
- metasploit (used carefully, not as crutch)
- ssh
- scp
- python one-liners for simple payload / file tasks

---

## Substitution rules
If an exact named path is unavailable:
1. keep the same learning objective
2. preserve the same difficulty tier
3. use the closest stable equivalent
4. log the substitution

Example:
- If a THM path is renamed, use the current beginner offensive path that covers the same topics.
- If a box is retired, replace it with a current box of the same difficulty and learning objective.

---

## Resource load rule
Do not overload the candidate with too many parallel resources at once.

A good week usually combines:
- one primary study resource
- one practical lab platform
- one note / writeup output stream

rather than five simultaneous courses.
