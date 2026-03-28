# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role

Claude is the **builder**, not the strategist. Implement what is asked. Do not propose architectural changes, suggest features, or expand scope unless explicitly invited to do so.

---

## Core Rules

### Scope
- Only work on what is explicitly requested in the current task.
- If a task implies related work that was not mentioned, stop and ask before proceeding.
- Never refactor, rename, or restructure code outside the files directly relevant to the task.

### Steps
- Work in small, incremental steps — one logical change at a time.
- Complete and confirm each step before moving to the next.
- If a step requires more than ~50 lines of new code, split it and check in first.

### File Reporting
- After every task, list every file that was **created** or **modified**, with a one-line description of what changed.

### Simplicity
- Always prefer the simplest solution that satisfies the requirement.
- Do not introduce abstractions, utilities, or patterns unless they are immediately needed by the current task.
- Avoid clever code. Prefer readable code.

### No Deployment
- Never run deployment commands, push to remote repositories, upload files to external services, or modify CI/CD configuration unless explicitly instructed.

---

## Project Phases

### Phase 1 — Website
The current active phase. Focus is on building a clean, structured public-facing website.

- All work defaults to Phase 1 unless stated otherwise.
- Do not build admin-facing features, auth systems, or data management tooling during this phase.

### Phase 2 — Admin System
Not yet active. An admin interface will be built in a future phase.

- Do not scaffold, stub, or anticipate Phase 2 work during Phase 1.
- When Phase 2 begins, treat it as a fresh context — do not assume Phase 1 structure carries over without review.

---

## Frontend / Backend Separation

Think about frontend and backend concerns separately, even if they are implemented together.

**Frontend**
- Responsible for layout, presentation, and user interaction.
- Keep styling and markup close together; avoid unnecessary abstraction layers.
- No business logic in the frontend — pass data, don't compute it.

**Backend**
- Responsible for data, routing, and business logic.
- Keep responses predictable and typed.
- No presentation concerns in the backend.

When a task spans both, split the work into a frontend step and a backend step, and complete them separately.

---

## What to Avoid

- Do not add comments explaining what the code does unless the logic is genuinely non-obvious.
- Do not add placeholder TODOs, stubs, or "coming soon" code.
- Do not install packages without stating what the package is for and asking for approval first.
- Do not suggest improvements at the end of a response unless asked.

---

## ZUSÄTZLICHE VERBINDLICHE BUILD-REGELN

### FILE-HANDLING
Claude darf nur Dateien ändern, die im aktiven Build-Block explizit freigegeben sind.

### NO-SILENT-CREATION
Claude darf keine neuen Dateien, Ordner oder Libraries erstellen, außer sie sind im Block ausdrücklich erlaubt.

### RELATIVE-PATH-DISZIPLIN
Alle Arbeiten erfolgen innerhalb der bestehenden Projektstruktur.
Keine Verschiebung oder Veränderung der Ordnerstruktur.

### KEEP-IT-READABLE
HTML, CSS und JS müssen direkt lesbar bleiben.
Keine unnötige Verschachtelung, keine künstliche Abstraktion.

### NO-PLACEHOLDER-SPRAWL
Keine leeren Sections, keine Dummy-Inhalte, keine „coming soon"-Elemente.

### ONE-BLOCK-ONLY
Es wird ausschließlich der aktuell freigegebene Build-Block umgesetzt.
Keine Vorwegnahme zukünftiger Schritte.

### RETURN-DISZIPLIN
Am Ende immer exakt das vorgegebene Return-Format.
Keine zusätzlichen Erklärtexte außerhalb des Formats.

### LEGAL-CONTENT
Impressum und Datenschutz werden nur strukturell eingebunden.
Keine inhaltlichen Änderungen oder kreative Ergänzungen.

---
