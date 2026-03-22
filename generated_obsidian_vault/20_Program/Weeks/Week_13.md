---
week: 13
phase: "Phase 2 - Intermediate Exploitation"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - use PortSwigger and HTB-style targets to improve attack-path chaining
  - treat web enumeration, auth testing, and privesc as parts of one chain where relevant
  - avoid noisy over-testing by ranking hypotheses better
key_tools:
  - Burp Suite
  - ffuf or gobuster
  - nmap
  - linpeas or winpeas
  - bash
  - Obsidian
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine or target writeup
  - 1 attack-path summary note
  - 1 weekly review
---

# Week 13 - Intermediate web testing, better attack chaining, and tighter hypothesis control

**Phase:** Phase 2 - Intermediate Exploitation
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** [[30_Reviews/Weekly/Week_13_Review]]

## Weekly focus
- use PortSwigger and HTB-style targets to improve attack-path chaining
- treat web enumeration, auth testing, and privesc as parts of one chain where relevant
- avoid noisy over-testing by ranking hypotheses better

## Expected weekly outcomes
- candidate produces a stronger multi-step attack-path summary
- web-focused target work looks more deliberate and less exploratory
- Burp, content discovery, and privesc notes are linked into the same workflow

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Second sanctioned target or continuation
**Task:** Repeat the workflow on another target and time-box enumeration to prioritize better hypothesis ranking.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Second target note
**Success criteria:** Hypothesis ranking is faster and more confident than on Wednesday.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Exploit validation
**Task:** Pursue the strongest attack path only and keep the evidence chain tidy.
**Tools:** Burp Suite, bash, browser
**Output:** Exploit attempt note
**Success criteria:** The note clearly supports why that path was chosen.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Writeup refinement
**Task:** Refine the best target's writeup and tighten the attack-path summary for later OSCP-style use.
**Tools:** Obsidian
**Output:** Refined Week 13 writeup
**Success criteria:** The output looks closer to a report than a lab diary.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Learning log
**Task:** Write down the week's biggest lesson about hypothesis control and avoiding rabbit holes.
**Tools:** Obsidian
**Output:** Learning log: `Week 13 - Avoiding Rabbit Holes`
**Success criteria:** The note cites one rabbit hole you cut off earlier than you would have in Week 07.

### Outputs
- Second target note
- Exploit attempt note
- Refined Week 13 writeup
- Learning log: `Week 13 - Avoiding Rabbit Holes`

### Session success criteria
- Hypothesis ranking is faster and more confident than on Wednesday.
- The note clearly supports why that path was chosen.
- The output looks closer to a report than a lab diary.
- The note cites one rabbit hole you cut off earlier than you would have in Week 07.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Course or note review
**Task:** Review the week's strongest and weakest reasoning decisions, not just the commands.
**Tools:** Obsidian
**Output:** Reasoning review note
**Success criteria:** The note improves judgment rather than only memory.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Artifact cleanup
**Task:** Ensure the attack-path summary, exploit attempt note, and machine writeup are linked from Week 13.
**Tools:** Obsidian, terminal
**Output:** Linked Week 13 artifacts
**Success criteria:** The week is easy to review later.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Quick-reference maintenance
**Task:** Refresh the shortest useful version of your Burp and directory-discovery notes.
**Tools:** Obsidian
**Output:** Updated quick-reference notes
**Success criteria:** The references remain compact and high-signal.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 13 review and note what must improve for the end-of-phase push next week.
**Tools:** Obsidian
**Output:** Week 13 review note
**Success criteria:** The final intermediate week has a clear tactical focus.

### Outputs
- Reasoning review note
- Linked Week 13 artifacts
- Updated quick-reference notes
- Week 13 review note

### Session success criteria
- The note improves judgment rather than only memory.
- The week is easy to review later.
- The references remain compact and high-signal.
- The final intermediate week has a clear tactical focus.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger Web Security Academy intermediate lab set
**Task:** Work one intermediate lesson and one lab on authentication, access control, SQLi, or file handling based on your weakest web area.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt note
**Success criteria:** The note explains both the vulnerability pattern and the recognition signals.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Attack-chain planning
**Task:** Write a short note on how web footholds can transition into shell access and then into privesc on lab targets.
**Tools:** Obsidian
**Output:** Attack-chain planning note
**Success criteria:** The note shows a plausible chain instead of isolated tricks.

### Outputs
- Exploit attempt note
- Attack-chain planning note

### Session success criteria
- The note explains both the vulnerability pattern and the recognition signals.
- The note shows a plausible chain instead of isolated tricks.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** HTB Academy or equivalent module
**Task:** Study web enumeration or service chaining material that supports multi-step attack paths.
**Tools:** browser, Obsidian
**Output:** Learning log: `Intermediate Attack Chaining`
**Success criteria:** The log captures how you decide what to test first and what to defer.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Directory discovery repetition
**Task:** Run ffuf or gobuster on a sanctioned target and explicitly compare findings to what the homepage or service banners already implied.
**Tools:** ffuf or gobuster, bash
**Output:** Discovery comparison note
**Success criteria:** The note shows that you are using context instead of wordlist brute force alone.

### Outputs
- Learning log: `Intermediate Attack Chaining`
- Discovery comparison note

### Session success criteria
- The log captures how you decide what to test first and what to defer.
- The note shows that you are using context instead of wordlist brute force alone.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned intermediate target
**Task:** Enumerate the target thoroughly and produce a ranked hypothesis list that includes both web and service avenues if present.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Enumeration section draft
**Success criteria:** The note lists hypotheses in order and defends that order.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned intermediate target
**Task:** Validate the top one or two paths using Burp or service-specific testing, rejecting weaker branches explicitly in notes.
**Tools:** Burp Suite, bash, browser
**Output:** Exploit attempt note
**Success criteria:** Your path selection is disciplined and visible.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned intermediate target
**Task:** If a shell is gained, run the relevant privesc checklist and capture only the findings most likely to matter.
**Tools:** linpeas or winpeas, bash
**Output:** Post-access findings note
**Success criteria:** The note distinguishes likely signal from low-value noise.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Draft the target writeup plus a one-page attack-path summary that could fit into later OSCP-style reporting.
**Tools:** Obsidian
**Output:** Week 13 writeup and attack-path summary
**Success criteria:** A reader can follow the chain quickly from recon to escalation or blocker.

### Outputs
- Enumeration section draft
- Exploit attempt note
- Post-access findings note
- Week 13 writeup and attack-path summary

### Session success criteria
- The note lists hypotheses in order and defends that order.
- Your path selection is disciplined and visible.
- The note distinguishes likely signal from low-value noise.
- A reader can follow the chain quickly from recon to escalation or blocker.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger reinforcement
**Task:** Solve another lab in the same vulnerability family and compare your solve path to Monday's approach.
**Tools:** Burp Suite, browser
**Output:** Pattern comparison note
**Success criteria:** The note identifies what stayed the same across both labs.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Workflow maintenance
**Task:** Update the web testing and attack-chain notes with this week's strongest decision rules.
**Tools:** Obsidian
**Output:** Updated workflow notes
**Success criteria:** The notes become more compact and more predictive.

### Outputs
- Pattern comparison note
- Updated workflow notes

### Session success criteria
- The note identifies what stayed the same across both labs.
- The notes become more compact and more predictive.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- Burp Suite
- ffuf or gobuster
- nmap
- linpeas or winpeas
- bash
- Obsidian

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine or target writeup
- 1 attack-path summary note
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If Tuesday is missed, preserve the directory-discovery repetition and fold the concept summary into Sunday's reasoning review instead of weakening the practical core.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
