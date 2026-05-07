# Compliance Workflow Hub

> **React + TypeScript portfolio project** demonstrating audit queue operations, policy exception workflow design, SLA-aware approvals, and operator-grade compliance tooling.

**Recruiter takeaway:** *"This person understands that compliance is an operational system with ownership pressure, escalation logic, and execution risk — not just a control spreadsheet."*

---

## Project Overview

| Attribute | Detail |
|---|---|
| **Frontend Stack** | React 19 + Vite + TypeScript |
| **Domain** | Compliance operations, approvals, exceptions, audit workflow |
| **Audience** | Compliance, security, audit, governance, platform leadership |
| **Signal Areas** | SLA posture · remediation tracking · queue pressure · exception routing |
| **Portfolio Role** | Governance-focused internal tool with premium control-plane UX |
| **Validation** | Vitest + Testing Library |

---

## Executive Summary

Compliance Workflow Hub is a recruiter-ready internal-tool concept built to show how audit, governance, and exception management can be productized into a high-trust operational interface. Instead of spreading ownership across tickets, approvals, spreadsheets, and static reports, it centralizes workflow posture in one operator-facing surface.

This repo is designed to feel like a real compliance operations product used by audit, IAM, security, and policy teams during active review cycles.

---

## Business Problem

Compliance programs often suffer from the same problems as other internal operations:

- review ownership is fragmented
- exception handling lacks clear prioritization
- SLA pressure is hard to visualize
- remediation work gets buried behind status reporting
- leadership only sees the problem after escalation already happened

That produces unnecessary audit friction and weakens trust in control execution.

---

## Solution

Compliance Workflow Hub turns governance into an operational workspace for:

- open workflow visibility
- reviewer and queue pressure
- policy exception prioritization
- remediation progress tracking
- executive posture and escalation awareness

---

## Architecture

```text
Compliance and audit datasets
    |
    v
Static TypeScript workflow model
    |
    v
React control-plane shell
    |
    +--> queue metrics
    +--> throughput and remediation charts
    +--> exception review panel
    +--> SLA and escalation views
```

### Workflow Map

```mermaid
flowchart LR
  A["Evidence Intake"] --> B["Control Mapping"]
  B --> C["Reviewer Assignment"]
  C --> D["Approval or Exception"]
  D --> E["Remediation Tracking"]
  E --> F["Audit Closeout"]
  D -. escalated .-> G["Leadership Review"]
  C -. sla risk .-> H["Queue Intervention"]
```

---

## Screenshots

### Hero Capture

![Compliance Workflow Hub hero](screenshots/01-hero.png)

### Throughput and SLA View

![Throughput and SLA view](screenshots/02-throughput.png)

### Queue and Exceptions View

![Queue and exceptions](screenshots/03-queue-exceptions.png)

### Validation Proof

![Validation proof](screenshots/04-proof.png)

---

## Tech Stack

[![React](https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-4C1D95?style=for-the-badge&logo=vite&logoColor=FACC15&labelColor=111827)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-2563EB?style=for-the-badge&logo=typescript&logoColor=white&labelColor=111827)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-Control%20Plane%20UI-60A5FA?style=for-the-badge&logo=css&logoColor=white&labelColor=111827)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-A855F7?style=for-the-badge&logo=vitest&logoColor=white&labelColor=111827)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-84CC16?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=111827)](https://opensource.org/license/mit)

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **Operator-first framing** | Makes compliance feel like a live internal system rather than a static governance document |
| **SLA and queue emphasis** | Shows workflow risk and intervention timing clearly |
| **Exception pressure as first-class signal** | Reflects how real governance teams prioritize remediation |
| **Distinct compliance palette** | Gives the project a separate visual identity from revenue and AI control-plane work |
| **Mermaid workflow mapping** | Keeps escalation and approval logic visible directly in GitHub |

---

## Local Setup

```bash
npm install
npm run dev
```

---

## Validation

```bash
npm test
npm run build
```

---

## What This Demonstrates

- internal tool UX for governance-heavy workflows
- queue and ownership design for compliance operations
- risk-aware exception handling
- SLA and remediation pressure visibility
- frontend product judgment beyond generic dashboard templates

---

## Future Enhancements

- evidence artifact detail drawers
- reviewer assignment simulation
- exception aging filters and ownership drilldowns
- automated escalation policy editor
- case-study pages linked from badge targets on `mizcausevic.com`

---

## Portfolio Links

- [Kinetic Gain](https://kineticgain.com/)
- [Skills / Portfolio](https://mizcausevic.com/skills/)
- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)
