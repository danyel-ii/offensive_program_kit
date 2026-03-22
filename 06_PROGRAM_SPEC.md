# Program Specification

This file defines what the generated program must contain.

## Program length
The generated training program must cover **24 weeks**.

## Phase structure
The 24 weeks must be organized as follows:

- **Phase 0 — Foundations**: Weeks 1–4
- **Phase 1 — Offensive Entry**: Weeks 5–8
- **Phase 2 — Intermediate Exploitation**: Weeks 9–14
- **Phase 3 — OSCP Track**: Weeks 15–24

Codex may refine the internal emphasis of each phase, but the week boundaries above must remain intact.

---

## Phase intent

### Phase 0 — Foundations (Weeks 1–4)
Purpose:
- establish networking baseline
- establish Linux comfort
- make HTTP real
- create the vault and output habits
- begin lab interaction

Required characteristics:
- not passive-only
- includes environment setup in Week 1
- includes first practical labs by Week 1 or 2
- includes the first stable workflow for notes

By end of Phase 0, candidate should be able to:
- explain core TCP/IP / HTTP concepts in their own words
- use Linux CLI comfortably for beginner tasks
- run basic nmap scans inside lab-safe settings
- use PortSwigger at a basic level
- complete foundation rooms / labs with notes

### Phase 1 — Offensive Entry (Weeks 5–8)
Purpose:
- build enumeration habit
- begin exploitation logic
- practice web basics
- write first real machine / lab reports

Required characteristics:
- regular nmap use
- regular Burp exposure
- first gobuster/ffuf exposure
- first exploit attempts
- first real machine / lab writeups

By end of Phase 1, candidate should be able to:
- enumerate common services
- identify likely attack surfaces
- solve beginner web labs
- exploit simple training targets with guidance
- document process clearly

### Phase 2 — Intermediate Exploitation (Weeks 9–14)
Purpose:
- deepen practical offensive work
- introduce Linux and Windows privilege escalation seriously
- increase independence
- increase target volume
- chain attacks

Required characteristics:
- regular HTB/HTB Academy / equivalent progression
- at least some Linux and Windows privesc work
- regular tool repetition
- more independent machine work
- stronger writeups

By end of Phase 2, candidate should be able to:
- enumerate methodically
- use gobuster/ffuf and Burp more naturally
- exploit a range of easy targets
- perform common privesc techniques in labs
- produce structured machine reports without heavy prompting

### Phase 3 — OSCP Track (Weeks 15–24)
Purpose:
- shift to exam-style progression
- increase speed and independence
- improve reporting
- pressure test the workflow

Required characteristics:
- PEN-200 or equivalent structured OSCP-targeted work
- Proving Grounds / exam-style machine practice
- regular report writing
- at least one mock or timed simulation late in the phase
- one report-heavy weekend late in the phase

By end of Phase 3, candidate should be able to:
- approach unknown lab machines independently
- execute a credible attack chain
- produce OSCP-style notes and reports
- identify personal weak spots and recovery priorities

---

## Week file requirements
Each weekly file must include:

1. Title and metadata
2. Phase + week number
3. Weekly focus
4. Expected weekly outcomes
5. Daily plans for:
   - Monday
   - Tuesday
   - Wednesday
   - Thursday
   - Saturday
   - Sunday
6. Friday marked as rest
7. Tools used that week
8. Required artifacts that week
9. A weekly review block
10. A recovery note for missed sessions

### Metadata recommendation
Use frontmatter such as:
- week
- phase
- active_minutes
- elapsed_minutes
- primary_focus
- key_tools
- deliverables

---

## Daily section requirements
Each training day must include:

- active time
- elapsed time
- hour-by-hour active blocks
- explicit tasks
- platform / resource
- required tool use if applicable
- expected outputs
- success criteria

---

## Output / artifact requirements

### Minimum recurring outputs
- Every week: at least 1 learning log
- Every week: at least 1 weekly review
- Week 1–2: at least 1 hands-on practical lab note
- Starting Week 3: at least 1 exploit attempt each week
- Starting Week 4: at least 1 machine or target writeup each week

### Stronger later-phase outputs
From Phase 2 onward, many weeks should include:
- 1–2 machine writeups
- tool notes
- privesc notes
- short attack-path summaries

From Phase 3 onward, several weeks should include:
- OSCP-style report fragments
- machine summaries
- mock-sim notes

---

## Consolidation / review requirements
Include dedicated consolidation behavior around:
- Week 6
- Week 12
- Week 18

These weeks should still have explicit tasks, but should allocate visible time to:
- repeating weak areas
- finishing partial labs
- reviewing notes
- tightening tools

---

## Mock / simulation requirements
In the final phase include:
- at least one timed or semi-timed simulation
- at least one report-heavy weekend
- at least one explicit self-assessment of likely OSCP weak areas

---

## Environment setup requirements
Week 1 must include explicit setup / verification tasks for:
- lab platform accounts
- working Linux environment (Kali / VM / WSL / equivalent)
- Obsidian vault usage
- basic directory / file structure for notes
- tool verification (at least nmap, Burp, shell access)
- a place to store lab artifacts

---

## Progression rule
Difficulty should increase, but the program should not become chaotic.
Each phase should clearly grow out of the previous one.

That means:
- later work should re-use earlier tools
- later work should assume earlier note habits
- later weeks should not "reset" the workflow

---

## Recovery rule
The program must include a missed-session protocol, but must not rely on unlimited catch-up.
Recovery should be realistic and bounded.
See `13_MISSED_SESSION_PROTOCOL_SPEC.md`.

---

## Resource substitution note
If a named room / path / module is likely outdated, Codex should preserve:
- the same topic
- the same difficulty
- the same output type

and document the substitution cleanly.
