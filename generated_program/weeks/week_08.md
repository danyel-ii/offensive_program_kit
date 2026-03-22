---
week: 8
phase: "Phase 1 - Offensive Entry"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - close Offensive Entry with one end-to-end beginner target workflow
  - stabilize scan, exploit, and writeup habits before moving to HTB Academy
  - measure where guidance is still needed
key_tools:
  - nmap
  - Burp Suite
  - ffuf or gobuster
  - bash
  - curl
  - Obsidian
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine writeup
  - 1 Phase 1 checkpoint note
  - 1 weekly review
---

# Week 08 - Phase 1 capstone with a full beginner attack chain and cleaner reporting

**Phase:** Phase 1 - Offensive Entry
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** `generated_obsidian_vault/30_Reviews/Weekly/Week_08_Review.md`

## Weekly focus
- close Offensive Entry with one end-to-end beginner target workflow
- stabilize scan, exploit, and writeup habits before moving to HTB Academy
- measure where guidance is still needed

## Expected weekly outcomes
- one stronger machine writeup exists with better evidence and structure
- Phase 1 checkpoint names the move from guided work to more independent work
- candidate is ready for HTB Academy and more realistic targets

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Short second target or capstone reinforcement
**Task:** Spend one hour on fresh enumeration against a second sanctioned easy target to check whether the workflow transfers.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Transferability note
**Success criteria:** You can reuse the same sequence on a new target without rebuilding it from scratch.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Burp and web follow-up
**Task:** Use Burp on the fresh target or repeat the capstone's web path to reinforce request analysis.
**Tools:** Burp Suite, browser
**Output:** Burp reinforcement note
**Success criteria:** You can move through Proxy, Repeater, and note capture with less hesitation.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Learning log
**Task:** Write a log on how your approach to a new target changed across Phase 1.
**Tools:** Obsidian
**Output:** Learning log: `End of Phase 1`
**Success criteria:** The note highlights changed behavior, not just changed knowledge.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Phase 2 launch setup
**Task:** Prepare HTB Academy, HTB lab access, and privesc note skeletons inside the vault.
**Tools:** browser, Obsidian
**Output:** Week 09 launch checklist
**Success criteria:** The next phase can start with minimal setup drag.

### Outputs
- Transferability note
- Burp reinforcement note
- Learning log: `End of Phase 1`
- Week 09 launch checklist

### Session success criteria
- You can reuse the same sequence on a new target without rebuilding it from scratch.
- You can move through Proxy, Repeater, and note capture with less hesitation.
- The note highlights changed behavior, not just changed knowledge.
- The next phase can start with minimal setup drag.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Course and note review
**Task:** Read the last four weeks of notes quickly and prune anything that you would never reference again during a target.
**Tools:** Obsidian
**Output:** Pruned workflow notes
**Success criteria:** The vault is leaner and easier to use than before the review.

### Break - 10m
### Hour 2 - 60m active
**Resource:** PortSwigger reinforcement
**Task:** Solve one lab in the vuln family that still feels least reliable to you.
**Tools:** Burp Suite, browser
**Output:** Weak-area exploit note
**Success criteria:** The note names the specific uncertainty that remains.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Artifact cleanup
**Task:** Link the capstone writeup, checkpoint, and learning log from the week note and dashboard.
**Tools:** Obsidian
**Output:** Week 08 linked note set
**Success criteria:** The vault makes the phase transition obvious.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 08 review and set the first HTB Academy priority for Week 09.
**Tools:** Obsidian
**Output:** Week 08 review note
**Success criteria:** The first action of Week 09 is already decided.

### Outputs
- Pruned workflow notes
- Weak-area exploit note
- Week 08 linked note set
- Week 08 review note

### Session success criteria
- The vault is leaner and easier to use than before the review.
- The note names the specific uncertainty that remains.
- The vault makes the phase transition obvious.
- The first action of Week 09 is already decided.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** TCM Practical Ethical Hacking
**Task:** Review the end-to-end methodology sections and compare them to the checklist you have actually been using.
**Tools:** browser, Obsidian
**Output:** Methodology delta note
**Success criteria:** The note records what your workflow already matches and what it still lacks.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Phase 1 checkpoint draft
**Task:** Start the checkpoint note with explicit evidence from Weeks 5-7: what you can now do, what still requires hints, and what must change in Phase 2.
**Tools:** Obsidian
**Output:** Draft Phase 1 checkpoint
**Success criteria:** The draft uses real examples from the last month of labs.

### Outputs
- Methodology delta note
- Draft Phase 1 checkpoint

### Session success criteria
- The note records what your workflow already matches and what it still lacks.
- The draft uses real examples from the last month of labs.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Solve one lab that resembles the attack surface you expect on this week's capstone target.
**Tools:** Burp Suite, browser
**Output:** Exploit warm-up note
**Success criteria:** The note identifies the lab pattern you hope to recognize later this week.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Capstone target planning
**Task:** Pick one sanctioned beginner target and prepare the machine writeup skeleton, artifact folders, and initial checklist before scanning.
**Tools:** Obsidian, terminal
**Output:** Capstone target prep note
**Success criteria:** You can begin Wednesday immediately without setup friction.

### Outputs
- Exploit warm-up note
- Capstone target prep note

### Session success criteria
- The note identifies the lab pattern you hope to recognize later this week.
- You can begin Wednesday immediately without setup friction.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned capstone target
**Task:** Perform a full first-pass enumeration using your checklist, including service detection, web checks, and content discovery where appropriate.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Enumeration section draft
**Success criteria:** The draft is methodical, time-aware, and not overloaded with irrelevant command output.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned capstone target
**Task:** Validate the two best attack hypotheses using Burp or service-specific checks; record both the logic and the evidence.
**Tools:** Burp Suite, curl, bash
**Output:** Exploit attempt section draft
**Success criteria:** The note shows disciplined hypothesis testing instead of random payload swapping.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned capstone target
**Task:** Reach the intended foothold or lab objective if possible; if privesc is not in scope for this target, note what the next obvious step would be.
**Tools:** bash, Burp Suite, browser
**Output:** Foothold results note
**Success criteria:** The outcome is either achieved or blocked in a clearly documented way.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Draft the full capstone machine writeup immediately while the reasoning is still fresh.
**Tools:** Obsidian
**Output:** Week 08 machine writeup
**Success criteria:** The writeup reads as a coherent attack chain from recon to result.

### Outputs
- Enumeration section draft
- Exploit attempt section draft
- Foothold results note
- Week 08 machine writeup

### Session success criteria
- The draft is methodical, time-aware, and not overloaded with irrelevant command output.
- The note shows disciplined hypothesis testing instead of random payload swapping.
- The outcome is either achieved or blocked in a clearly documented way.
- The writeup reads as a coherent attack chain from recon to result.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Writeup refinement
**Task:** Improve screenshots, evidence labels, and step explanations so the writeup is cleaner than any previous target note.
**Tools:** Obsidian
**Output:** Revised Week 08 writeup
**Success criteria:** The report is concise, readable, and future-useful.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Phase 1 checkpoint finalization
**Task:** Finish the checkpoint and set rules for Phase 2 on independence, machine volume, and privesc preparation.
**Tools:** Obsidian
**Output:** Completed Phase 1 checkpoint
**Success criteria:** The checkpoint includes concrete correction rules for the next phase.

### Outputs
- Revised Week 08 writeup
- Completed Phase 1 checkpoint

### Session success criteria
- The report is concise, readable, and future-useful.
- The checkpoint includes concrete correction rules for the next phase.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- Burp Suite
- ffuf or gobuster
- bash
- curl
- Obsidian

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine writeup
- 1 Phase 1 checkpoint note
- 1 weekly review

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If the capstone target stalls, preserve the full writeup effort on the partial chain and carry only one unresolved hypothesis into Week 09 rather than restarting on a different box.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
