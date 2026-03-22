---
week: 5
phase: "Phase 1 - Offensive Entry"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - start TCM Practical Ethical Hacking as the main guided offensive resource
  - standardize the scan-to-notes workflow for each target
  - use Burp and nmap every week from here forward
key_tools:
  - nmap
  - Burp Suite
  - bash
  - Obsidian
  - browser
  - curl
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine writeup
  - 1 weekly review
  - 1 enumeration checklist note
---

# Week 05 - Enumeration habit with TCM PEH and structured beginner offensive labs

**Phase:** Phase 1 - Offensive Entry
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** `generated_obsidian_vault/30_Reviews/Weekly/Week_05_Review.md`

## Weekly focus
- start TCM Practical Ethical Hacking as the main guided offensive resource
- standardize the scan-to-notes workflow for each target
- use Burp and nmap every week from here forward

## Expected weekly outcomes
- enumeration checklist exists and gets used on a real lab target
- at least one exploit attempt is documented in a machine-style workflow
- candidate can move from service discovery to first likely attack path more quickly

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** TCM Practical Ethical Hacking
**Task:** Cover additional beginner exploitation content relevant to the week's target category.
**Tools:** browser, Obsidian
**Output:** Focused concept note tied to the active target
**Success criteria:** The note is directly applicable to a current lab problem.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Second sanctioned target or continued first target
**Task:** Execute enumeration with nmap plus directory discovery, then validate one attack path.
**Tools:** nmap, gobuster or ffuf, browser, Burp Suite
**Output:** Exploit attempt note
**Success criteria:** A reader can see the jump from service discovery to exploit validation clearly.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Writeup refinement
**Task:** Improve the week's writeup(s) by tightening the enumeration narrative, adding screenshots, and removing noise.
**Tools:** Obsidian
**Output:** Revised machine writeup
**Success criteria:** The report prioritizes signal over copied terminal output.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Learning log
**Task:** Write down the three most reliable first actions on a new target and the three most common time-wasters you noticed.
**Tools:** Obsidian
**Output:** Learning log: `Week 05 Enumeration Lessons`
**Success criteria:** The list is grounded in actual target work, not generic advice.

### Outputs
- Focused concept note tied to the active target
- Exploit attempt note
- Revised machine writeup
- Learning log: `Week 05 Enumeration Lessons`

### Session success criteria
- The note is directly applicable to a current lab problem.
- A reader can see the jump from service discovery to exploit validation clearly.
- The report prioritizes signal over copied terminal output.
- The list is grounded in actual target work, not generic advice.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Solve one beginner lab in the same general family as the week's live target issue, such as auth, SQLi, or XSS.
**Tools:** Burp Suite, browser
**Output:** Short exploit note
**Success criteria:** You can articulate the vulnerability pattern independent of the exact lab steps.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Command sheet maintenance
**Task:** Update your nmap, gobuster or ffuf, and Burp quick-reference notes with only commands and steps you actually used this week.
**Tools:** Obsidian
**Output:** Updated tool reference notes
**Success criteria:** The references are shorter and more useful after editing.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Weekly wrap-up
**Task:** Link all artifacts into the week note and explicitly mark one weak area for Week 06 consolidation.
**Tools:** Obsidian
**Output:** Week note updates
**Success criteria:** The weak-area note is narrow enough to practice directly next week.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 05 review with emphasis on enumeration quality and note discipline.
**Tools:** Obsidian
**Output:** Week 05 review note
**Success criteria:** The review states what would make the next target faster.

### Outputs
- Short exploit note
- Updated tool reference notes
- Week note updates
- Week 05 review note

### Session success criteria
- You can articulate the vulnerability pattern independent of the exact lab steps.
- The references are shorter and more useful after editing.
- The weak-area note is narrow enough to practice directly next week.
- The review states what would make the next target faster.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** TCM Practical Ethical Hacking
**Task:** Cover the opening methodology and enumeration sections; extract a concrete checklist for what you do first on a fresh sanctioned target.
**Tools:** browser, Obsidian
**Output:** Enumeration checklist note
**Success criteria:** The checklist includes service discovery, web checks, credential checks, and note-capture steps.

### Break - 10m
### Hour 2 - 60m active
**Resource:** TryHackMe Nmap room or closest current equivalent
**Task:** Apply the checklist to the platform's guided nmap material and mirror the examples in your own notes.
**Tools:** nmap, browser
**Output:** Lab note: `Week 05 - Guided Nmap Routine`
**Success criteria:** The note maps course content to your personal checklist rather than duplicating the platform wording.

### Outputs
- Enumeration checklist note
- Lab note: `Week 05 - Guided Nmap Routine`

### Session success criteria
- The checklist includes service discovery, web checks, credential checks, and note-capture steps.
- The note maps course content to your personal checklist rather than duplicating the platform wording.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** TCM Practical Ethical Hacking
**Task:** Cover common web reconnaissance and directory discovery concepts.
**Tools:** browser, Obsidian
**Output:** Learning log: `Web Recon and Enumeration Logic`
**Success criteria:** The log explains when to pivot from service enumeration into content discovery.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Directory discovery in a sanctioned target
**Task:** Run `gobuster dir -u http://<lab-target> -w /usr/share/wordlists/dirb/common.txt -o gobuster_week05.txt` or the ffuf equivalent against a lab-only target.
**Tools:** gobuster or ffuf, bash
**Output:** Directory discovery note
**Success criteria:** The note records paths found, noise encountered, and which result deserves follow-up.

### Outputs
- Learning log: `Web Recon and Enumeration Logic`
- Directory discovery note

### Session success criteria
- The log explains when to pivot from service enumeration into content discovery.
- The note records paths found, noise encountered, and which result deserves follow-up.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned beginner target
**Task:** Run a full first-pass enumeration using your new checklist: `nmap -sC -sV`, manual service inspection, and basic web checks.
**Tools:** nmap, bash, browser
**Output:** Machine note enumeration section
**Success criteria:** The note shows a methodical first pass rather than ad hoc clicking.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned beginner target
**Task:** Use Burp on any web surface, capture requests, and test obvious parameters or auth behavior first.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt draft
**Success criteria:** The note shows what was changed, why it was changed, and what happened.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned beginner target
**Task:** Pursue one plausible foothold or lab objective using guided PEH logic; if the target is not web-based, test the most relevant service instead.
**Tools:** bash, Burp Suite, curl
**Output:** Initial access note
**Success criteria:** You either gain the intended foothold or define the blocker with enough evidence to revisit later.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Turn the Wednesday target work into a first Offensive Entry machine writeup.
**Tools:** Obsidian
**Output:** Week 05 machine writeup
**Success criteria:** The writeup is complete enough that you could resume the target next week without relearning the context.

### Outputs
- Machine note enumeration section
- Exploit attempt draft
- Initial access note
- Week 05 machine writeup

### Session success criteria
- The note shows a methodical first pass rather than ad hoc clicking.
- The note shows what was changed, why it was changed, and what happened.
- You either gain the intended foothold or define the blocker with enough evidence to revisit later.
- The writeup is complete enough that you could resume the target next week without relearning the context.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** TryHackMe Burp Suite basics or closest current equivalent
**Task:** Work the beginner Burp content and compare it to how you used Burp on Wednesday's target.
**Tools:** Burp Suite, browser
**Output:** Tool note update for Burp Suite
**Success criteria:** The Burp note now contains steps you actually performed, not only course ideas.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Enumeration repetition
**Task:** Re-run the Week 05 checklist against the same target or a short second target and look for what you skipped the first time.
**Tools:** nmap, gobuster or ffuf, browser
**Output:** Checklist correction note
**Success criteria:** At least one skipped step is identified and added back into your workflow.

### Outputs
- Tool note update for Burp Suite
- Checklist correction note

### Session success criteria
- The Burp note now contains steps you actually performed, not only course ideas.
- At least one skipped step is identified and added back into your workflow.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- nmap
- Burp Suite
- bash
- Obsidian
- browser
- curl

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine writeup
- 1 weekly review
- 1 enumeration checklist note

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If Tuesday is missed, keep the directory discovery block but compress the concept summary into Sunday's command-sheet maintenance instead of sacrificing a target session.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
