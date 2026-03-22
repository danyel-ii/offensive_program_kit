# Missed-Session Protocol Specification

The generated program must include a realistic recovery protocol.

## Goal
The protocol should help the candidate recover from missed sessions without:
- destroying the next week,
- doubling load unsafely,
- or turning the plan into a guilt spiral.

## Rules the protocol must follow
1. Do not assume unlimited catch-up time.
2. Do not move an entire missed 4h block into a 2h day.
3. Prefer:
   - triage,
   - defer,
   - compress by removing low-value passive review,
   - repeat only the highest-yield practical tasks.
4. Friday remains rest.

## Required recovery principles
The generated protocol should clearly state:
- what to do if a 2h day is missed
- what to do if a 4h day is missed
- what to do if an entire week goes off track
- when to drop low-priority material instead of cramming
- how to preserve the practical core (labs, exploit attempts, writeups, weekly review)

## Good recovery logic
Examples:
- If a Monday theory-heavy block is missed, carry the concept summary into Thursday or the next Tuesday, but do not sacrifice the week's practical lab.
- If a Saturday 4h machine session is missed, reschedule one key machine task into Sunday and defer the second machine to the following consolidation window.
- If the week becomes overloaded, preserve:
  1. one practical lab
  2. one output artifact
  3. one weekly review

## What Codex must generate
Create:
- `generated_program/08_missed_session_protocol.md`
- `generated_obsidian_vault/99_Admin/Missed_Session_Protocol.md`

The protocol must be clear enough that the user knows what to do immediately after missing a session.
