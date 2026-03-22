# Quality Gates

Codex should treat these as hard quality gates.

## Gate 1 — Structural completeness
- All required files exist.
- All 24 week files exist.
- All 24 review stub files exist.
- Program overview, phases, resource map, tool progression, milestones, recovery protocol, assumptions, substitutions, and self-audit all exist.

## Gate 2 — Schedule integrity
- Monday, Tuesday, Thursday each show 120 active minutes and 130 elapsed minutes.
- Wednesday, Saturday, Sunday each show 240 active minutes and 270 elapsed minutes.
- Friday is rest.
- No day silently exceeds its budget.

## Gate 3 — Explicitness
No week may contain vague tasks such as:
- "study Linux"
- "do hacking practice"
- "watch videos"

Instead, tasks must specify:
- resource
- exact topic / module / lab category
- exact active duration
- expected output

## Gate 4 — Progressive realism
- Early weeks emphasize foundations and guided labs.
- Mid-phase weeks increase independence.
- Late weeks include OSCP-style progression.
- The jump in difficulty is controlled.

## Gate 5 — Hands-on density
- Weeks 1–2 include hands-on practical labs.
- From Week 3 onward, each week includes at least one exploit attempt.
- From Week 4 onward, each week includes at least one machine or target writeup.
- Every week includes a learning log and weekly review.

## Gate 6 — Tool repetition
The program must repeatedly integrate:
- nmap
- Burp Suite
- gobuster or ffuf
- netcat
- linpeas / winpeas

The candidate should not encounter these once and then forget them.

## Gate 7 — Output discipline
The plan should generate artifacts continuously:
- learning logs
- week reviews
- machine writeups
- exploit notes
- report fragments

## Gate 8 — Obsidian usability
The vault must be usable without plugin dependency.
Templates must exist.
The dashboard must help the user act today.

## Gate 9 — Safe scope
All practical work must stay inside authorized training environments.
No real-target exploitation content.

## Gate 10 — One-pass clarity
A human reviewing the generated output should immediately understand:
- what to do this week
- why this week exists
- what success looks like
- how to recover if they miss a session
