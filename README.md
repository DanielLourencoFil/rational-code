# Rational Code

**How the classical discipline of rational discourse maps onto AI-assisted software
development — and how to turn each principle into something a machine enforces.**

## The thesis

Brandolini's law says refuting nonsense costs an order of magnitude more than producing
it. Agentic AI has pushed that asymmetry to its limit: **producing fluent artifacts now
costs nothing, so all discipline must migrate to verification.** This is why persona
prompts fail (they try to improve production, which is no longer the bottleneck) and why
gates work (they police verification, which is the scarce resource). An AI writes code
the way a fluent speaker argues: with perfect confidence, at any length, right or wrong.
Every technique in this book is one answer to the same question — *how do you keep a
discourse honest when one participant produces unlimited fluent output at zero cost?*

The classical toolkit for that question is old: it is the discipline of rational
discourse — univocal terms, complete case analysis, burden of proof on the claimant,
falsifiable claims, calibrated trust. What is new is that in software, unlike in
conversation, **most of these norms can be physically enforced.** The secret is knowing
the principles and discovering how to wire them.

## The constitutional rule of this book

**No chapter without a wired, linkable mechanism.** Every chapter must contain: the
principle, its concrete failure mode in agentic coding, the enforcement mechanism, and
a receipt — a link to real configuration, a real commit, or a logged incident in a
working repository. A principle that only renames an existing practice does not get a
chapter. Chapters that lack a shipped mechanism are listed as **blocked** below, gated
on the mechanism landing first.

**This book is written at the speed of its own evidence.**

The living example is [agentic-harness](https://github.com/DanielLourencoFil/agentic-harness)
— the enforcement system these chapters point into — and the projects built with it.

## Index

### Part I — Validity (is the inference sound?)

| # | Chapter | Status |
| --- | --- | --- |
| 1 | **Equivocation** — one name, shifting meanings → `any`, coerced `==` → the type system as univocity enforcer | ✅ [published](chapters/01-equivocation.md) |
| 2 | **Incomplete enumeration** — the ignored case → non-exhaustive `switch` over a union → exhaustiveness as an error | planned |
| 3 | **Circular justification** — A because B because A → import cycles → cycle ban (and the day the rule was wired but blind) | planned |
| 4 | **Begging the question** — a test derived from the implementation's own output proves nothing → tests before code + mutation testing | ⛔ blocked on mutation testing landing in a real project |

### Part II — Examinability (can the claim even be checked?)

| # | Chapter | Status |
| --- | --- | --- |
| 5 | **Eristic verbosity** — winning by volume → the unreviewable diff → size and complexity caps as epistemic, not stylistic | planned |
| 6 | **The principle of charity, inverted** — automation bias, the fluent LGTM → suspicion proportional to fluency; gates blind to eloquence | planned |

### Part III — Procedure (is the investigation honest?)

| # | Chapter | Status |
| --- | --- | --- |
| 7 | **Burden of proof** — "it's done" is a claim, not a fact → the evidence gate; "compiles" ≠ "works" | planned |
| 8 | **The framing effect** — "find bugs" manufactures bugs → neutral audit prompts that allow "none found" | planned |
| 9 | **The illusory foundation** — a green gate is only as strong as what it checks → negative tests for the gates themselves | planned |
| 10 | **Pre-registration** — kill criteria written before the bet, so failure cannot be renegotiated | planned |
| 11 | **Calibration** — trust as a measured number: real vs confabulated findings per audit | ⛔ blocked on enough audit data |
| 12 | **The mechanized elenchus** — four questions no feature may skip → planning gated on testable answers | ⛔ blocked on the /plan-feature skill shipping |
| 13 | **Reductio ad absurdum, automated** — state the invariant, let the machine hunt the counterexample → property-based testing | ⛔ blocked on property tests landing in a real project |
| 14 | **Testimony** — AI output as the deposition of a fluent, unreliable witness → the Humean policy: verify everything | planned |

## What this book is not

- It does not claim tools can force good design, correct requirements, or truth.
  Tools verify **form**; content — the right scenarios, the right definitions, the
  right problem — remains human judgment. Any stronger claim is treated here as a
  defect.
- It is not an argument that philosophical training substitutes for engineering
  competence. The engineering has its own receipts, in its own repositories; this book
  is about the protocol that disciplines both.
- It is not a framework. The frameworks exist (Spec Kit, BMAD, and company); this is
  the layer they are missing — what must be *impossible*, and how to make it so.
