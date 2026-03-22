# nmap

## Purpose
- First-pass service discovery on authorized lab targets.

## Typical workflow
- `nmap -sC -sV -oA scans/<target> <lab-ip>`
- Review services, versions, and obvious next actions.

## Common mistakes
- Scanning outside authorized lab targets.
- Saving raw output without a short interpretation note.
