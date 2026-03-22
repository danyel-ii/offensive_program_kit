---
week: 7
phase: "Phase 1 - Offensive Entry"
active_minutes: 1080
elapsed_minutes: 1200
primary_focus:
  - push web testing deeper while keeping service enumeration active
  - introduce ffuf or reinforce gobuster as a default habit
  - produce a cleaner exploit note and a target writeup in the same week
key_tools:
  - Burp Suite
  - ffuf or gobuster
  - nmap
  - bash
  - browser
deliverables:
  - 1 learning log
  - 1 exploit attempt note
  - 1 machine or target writeup
  - 1 weekly review
  - 1 updated web testing workflow note
---

# Week 07 - Web exploitation basics with SQLi, XSS, auth logic, and directory discovery

**Phase:** Phase 1 - Offensive Entry
**Weekly totals:** 1080 active minutes / 1200 elapsed minutes
**Review note:** `generated_obsidian_vault/30_Reviews/Weekly/Week_07_Review.md`

## Weekly focus
- push web testing deeper while keeping service enumeration active
- introduce ffuf or reinforce gobuster as a default habit
- produce a cleaner exploit note and a target writeup in the same week

## Expected weekly outcomes
- candidate can move from web surface discovery to targeted testing more deliberately
- Burp and content discovery are used together on a target
- at least one machine or target writeup records a web exploit path

## Saturday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned second target or continuation target
**Task:** Run the web workflow again on a fresh or partially solved beginner target, but time-box the content discovery stage to one hour.
**Tools:** nmap, ffuf or gobuster, Burp Suite
**Output:** Timed target note
**Success criteria:** You can get to the best two attack paths faster than on Wednesday.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Exploit validation
**Task:** Test the most plausible exploit path and record both failed and successful payloads or parameter changes.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt note
**Success criteria:** The note separates useful tests from dead ends clearly.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Writeup refinement
**Task:** Refine Wednesday or Saturday's target notes into one polished writeup and link the exploit attempt note explicitly.
**Tools:** Obsidian
**Output:** Revised Week 07 writeup
**Success criteria:** The reader can jump between writeup and exploit note cleanly.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Learning log
**Task:** Write the week's main lesson about attack-path ranking in web testing.
**Tools:** Obsidian
**Output:** Learning log: `Week 07 - Ranking Web Hypotheses`
**Success criteria:** The lesson is grounded in this week's actual false leads and successful tests.

### Outputs
- Timed target note
- Exploit attempt note
- Revised Week 07 writeup
- Learning log: `Week 07 - Ranking Web Hypotheses`

### Session success criteria
- You can get to the best two attack paths faster than on Wednesday.
- The note separates useful tests from dead ends clearly.
- The reader can jump between writeup and exploit note cleanly.
- The lesson is grounded in this week's actual false leads and successful tests.

## Sunday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** TCM Practical Ethical Hacking
**Task:** Review the PEH material that matched the week's target and trim your notes to the minimum useful operator view.
**Tools:** browser, Obsidian
**Output:** Trimmed operator note
**Success criteria:** The note got shorter and more practical after editing.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Tool repetition
**Task:** Repeat the exact ffuf or gobuster and Burp commands used this week on a harmless sanctioned target surface.
**Tools:** ffuf or gobuster, Burp Suite, browser
**Output:** Repetition checklist
**Success criteria:** The commands and workflow feel more automatic than on Tuesday.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Artifact cleanup
**Task:** Ensure all screenshots, requests, and target notes are stored and linked from Week 07.
**Tools:** Obsidian, terminal
**Output:** Organized week note
**Success criteria:** The vault reflects the week as a coherent project, not scattered fragments.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Weekly review
**Task:** Complete the Week 07 review and name the gap you want Week 08 to pressure-test.
**Tools:** Obsidian
**Output:** Week 07 review note
**Success criteria:** The next step is clear and grounded in evidence.

### Outputs
- Trimmed operator note
- Repetition checklist
- Organized week note
- Week 07 review note

### Session success criteria
- The note got shorter and more practical after editing.
- The commands and workflow feel more automatic than on Tuesday.
- The vault reflects the week as a coherent project, not scattered fragments.
- The next step is clear and grounded in evidence.

## Monday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** TCM Practical Ethical Hacking
**Task:** Cover the web application enumeration and basic exploit sections relevant to auth, SQLi, and XSS.
**Tools:** browser, Obsidian
**Output:** Learning log: `Week 07 Web Testing Workflow`
**Success criteria:** The log explains how you decide between auth testing, content discovery, and input manipulation.

### Break - 10m
### Hour 2 - 60m active
**Resource:** PortSwigger Web Security Academy
**Task:** Complete one lesson plus one lab on SQL injection, XSS, or auth weaknesses at a beginner level.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt note
**Success criteria:** The note identifies the signal that told you which vuln family you were in.

### Outputs
- Learning log: `Week 07 Web Testing Workflow`
- Exploit attempt note

### Session success criteria
- The log explains how you decide between auth testing, content discovery, and input manipulation.
- The note identifies the signal that told you which vuln family you were in.

## Tuesday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** Directory discovery practice
**Task:** Use `ffuf -u http://<lab-target>/FUZZ -w /usr/share/wordlists/dirb/common.txt -mc all -fc 404` or the gobuster equivalent on a lab-only web target.
**Tools:** ffuf or gobuster, bash
**Output:** Content discovery note
**Success criteria:** The note separates useful findings from platform noise.

### Break - 10m
### Hour 2 - 60m active
**Resource:** TryHackMe web fundamentals room or closest current equivalent
**Task:** Complete a room segment that pairs web inspection with practical testing.
**Tools:** browser, Burp Suite
**Output:** Practical lab note
**Success criteria:** The note records the key requests and the successful decision point.

### Outputs
- Content discovery note
- Practical lab note

### Session success criteria
- The note separates useful findings from platform noise.
- The note records the key requests and the successful decision point.

## Wednesday - 240 active minutes / 270 elapsed minutes
### Hour 1 - 60m active
**Resource:** Sanctioned web-focused target
**Task:** Enumerate services and web content using nmap plus ffuf or gobuster, then build a ranked list of attack paths.
**Tools:** nmap, ffuf or gobuster, browser
**Output:** Enumeration section draft
**Success criteria:** The note shows ports, paths, tech clues, and ranked hypotheses.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Sanctioned web-focused target
**Task:** Use Burp to inspect auth flows, parameters, or reflected input; test only the two best hypotheses from Hour 1.
**Tools:** Burp Suite, browser
**Output:** Exploit attempt section draft
**Success criteria:** You record exactly what changed and why each test was chosen.

### Break - 10m
### Hour 3 - 60m active
**Resource:** Sanctioned web-focused target
**Task:** Pursue the most promising exploit path to the intended foothold or lab success condition.
**Tools:** Burp Suite, bash, curl
**Output:** Access results note
**Success criteria:** Either the exploit lands or the remaining blocker is clearly defined.

### Break - 10m
### Hour 4 - 60m active
**Resource:** Writeup drafting
**Task:** Convert the day's notes into a machine or target writeup with strong evidence sections and lessons learned.
**Tools:** Obsidian
**Output:** Week 07 web target writeup
**Success criteria:** The writeup can be skimmed quickly and still show the attack chain.

### Outputs
- Enumeration section draft
- Exploit attempt section draft
- Access results note
- Week 07 web target writeup

### Session success criteria
- The note shows ports, paths, tech clues, and ranked hypotheses.
- You record exactly what changed and why each test was chosen.
- Either the exploit lands or the remaining blocker is clearly defined.
- The writeup can be skimmed quickly and still show the attack chain.

## Thursday - 120 active minutes / 130 elapsed minutes
### Hour 1 - 60m active
**Resource:** PortSwigger repetition
**Task:** Solve a second lab in the same vuln family but without checking your Wednesday notes first.
**Tools:** Burp Suite, browser
**Output:** Pattern repetition note
**Success criteria:** You can explain the common pattern across both exercises.

### Break - 10m
### Hour 2 - 60m active
**Resource:** Tool note update
**Task:** Update your web testing workflow note with the ffuf or gobuster command that produced the best results and the Burp steps you keep using.
**Tools:** Obsidian
**Output:** Updated web testing workflow note
**Success criteria:** The note is concise and immediately reusable on the next target.

### Outputs
- Pattern repetition note
- Updated web testing workflow note

### Session success criteria
- You can explain the common pattern across both exercises.
- The note is concise and immediately reusable on the next target.

## Friday - Rest
No training tasks. Rest, walk, or recover; do not turn Friday into catch-up.

## Tools used this week
- Burp Suite
- ffuf or gobuster
- nmap
- bash
- browser

## Required artifacts this week
- 1 learning log
- 1 exploit attempt note
- 1 machine or target writeup
- 1 weekly review
- 1 updated web testing workflow note

## Weekly review prompt
- What practical decision saved the most time this week?
- What failed more than once, and why?
- Which tool or checklist needs direct repetition next week?
- If schedule slips, what practical core must be preserved?

## If behind schedule
- If Wednesday overruns, drop the second target volume on Saturday and spend Saturday only on finishing the strongest writeup plus one reinforcement lab.

## Lab-only scope reminder
- All practical work in this week stays inside THM, HTB, HTB Academy, PortSwigger, Proving Grounds, PEN-200 labs, or local intentionally vulnerable targets.
