# Output Tree

Codex must create the following exact output tree at the workspace root.

```text
generated_program/
  00_program_overview.md
  01_phase_0_foundations.md
  02_phase_1_offensive_entry.md
  03_phase_2_intermediate_exploitation.md
  04_phase_3_oscp_track.md
  05_resource_map.md
  06_tool_progression.md
  07_milestones_and_checkpoints.md
  08_missed_session_protocol.md
  97_assumptions.md
  98_resource_substitutions.md
  99_self_audit.md
  weeks/
    week_01.md
    week_02.md
    week_03.md
    week_04.md
    week_05.md
    week_06.md
    week_07.md
    week_08.md
    week_09.md
    week_10.md
    week_11.md
    week_12.md
    week_13.md
    week_14.md
    week_15.md
    week_16.md
    week_17.md
    week_18.md
    week_19.md
    week_20.md
    week_21.md
    week_22.md
    week_23.md
    week_24.md

generated_obsidian_vault/
  00_Dashboard.md
  01_Start_Here.md
  02_Program_Index.md
  03_Weekly_Review_Index.md
  04_Machines_Index.md
  05_Tools_Index.md
  06_Concepts_Index.md
  07_Resources_Index.md
  08_Reports_Index.md
  10_Templates/
    Template - Daily Session.md
    Template - Week Plan.md
    Template - Weekly Review.md
    Template - Machine Writeup.md
    Template - Learning Log.md
    Template - Exploit Attempt.md
    Template - Tool Note.md
    Template - Concept Note.md
    Template - Resource Note.md
    Template - Phase Checkpoint.md
    Template - Report Skeleton.md
  20_Program/
    00_Program_Overview.md
    01_Phase_0_Foundations.md
    02_Phase_1_Offensive_Entry.md
    03_Phase_2_Intermediate_Exploitation.md
    04_Phase_3_OSCP_Track.md
    Weeks/
      Week_01.md
      Week_02.md
      Week_03.md
      Week_04.md
      Week_05.md
      Week_06.md
      Week_07.md
      Week_08.md
      Week_09.md
      Week_10.md
      Week_11.md
      Week_12.md
      Week_13.md
      Week_14.md
      Week_15.md
      Week_16.md
      Week_17.md
      Week_18.md
      Week_19.md
      Week_20.md
      Week_21.md
      Week_22.md
      Week_23.md
      Week_24.md
  30_Reviews/
    Weekly/
      Week_01_Review.md
      Week_02_Review.md
      Week_03_Review.md
      Week_04_Review.md
      Week_05_Review.md
      Week_06_Review.md
      Week_07_Review.md
      Week_08_Review.md
      Week_09_Review.md
      Week_10_Review.md
      Week_11_Review.md
      Week_12_Review.md
      Week_13_Review.md
      Week_14_Review.md
      Week_15_Review.md
      Week_16_Review.md
      Week_17_Review.md
      Week_18_Review.md
      Week_19_Review.md
      Week_20_Review.md
      Week_21_Review.md
      Week_22_Review.md
      Week_23_Review.md
      Week_24_Review.md
  40_Machines/
  50_Learning_Logs/
  60_Tools/
  70_Concepts/
  80_Resources/
  90_Reports/
  99_Admin/
    Resource_Map.md
    Milestones_and_Checkpoints.md
    Missed_Session_Protocol.md
    Self_Audit.md
```

## Exactness rule
Codex may add extra supporting files, but it must create at least the full structure above.

## Consistency rule
The content in:
- `generated_program/`
and
- `generated_obsidian_vault/20_Program/`

must match in substance.
