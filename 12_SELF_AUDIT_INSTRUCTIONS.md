# Self-Audit Instructions

After generating all outputs, Codex must perform a self-audit.

## Required audit files
Write the audit to:
- `generated_program/99_self_audit.md`
- `generated_obsidian_vault/99_Admin/Self_Audit.md`

The two files may contain the same content.

## Audit method
1. Read `10_ACCEPTANCE_TESTS.md`
2. Check each test
3. Mark Pass / Fail
4. Add brief notes for any non-obvious decision
5. If anything fails, revise outputs and rerun the affected checks

## Required sections in self-audit
- Summary
- Pass / Fail table
- Resource substitutions used
- Assumptions made
- Remaining weak spots (if any)

## Output discipline
Do not write a vague audit such as "looks good".
The audit must be concrete and test-based.

## Substitutions file
Always create:
- `generated_program/98_resource_substitutions.md`

If no substitutions were needed, write:
- "None"

## Assumptions file
Always create:
- `generated_program/97_assumptions.md`

Examples of assumptions to log:
- whether the candidate uses Kali, Ubuntu, or WSL
- whether a named THM path was replaced with a current equivalent
- whether HTB standalone machines were described by difficulty instead of exact names
