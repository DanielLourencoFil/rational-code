# Rational Code

**How the classical discipline of rational discourse maps onto AI-assisted software
development — and how to turn each principle into something a machine enforces.**

## The thesis

Brandolini's law observes that refuting nonsense costs an order of magnitude more than
producing it. Language models did not invent that asymmetry, and they did not make
production free — tokens cost money, and useful output costs prompting, context, and
human feedback. What changed is narrower, and more consequential: **the marginal cost
of producing a *plausible* artifact collapsed relative to the cost of verifying it —
and plausibility stopped being evidence.**

Fluency used to be an expensive signal. A well-structured module, confident technical
prose — these *cost* hours of someone competent, and because they were costly they
were evidence of competence. A model decouples the signal from the trait: its best and
its worst outputs arrive equally eloquent, in whatever volume is requested. Much of
that output is genuinely good — which is precisely the problem: good and bad come in
identical wrapping. A signal that becomes cheap stops discriminating, and a signal
that doesn't discriminate carries no evidential weight. Every judgment that used to
lean on it must now lean on independent verification instead.

Two consequences organize this book. First, **verification — competent attention plus
wired checks — is the scarce resource**, so that is where the discipline must live:
persona prompts fail because they try to improve production, which was never the
bottleneck; gates work because they police verification. Second, every technique here
answers the same question — *how do you keep a discourse honest when one participant
can produce plausible artifacts faster than anyone can check them, and eloquence no
longer tells you which ones to trust?*

The toolkit for that question is old: the discipline of rational discourse — univocal
terms, complete case analysis, burden of proof on the claimant, falsifiable claims,
calibrated trust. What is new is that in software, unlike in conversation, **most of
these norms can be physically enforced.** The secret is knowing the principles and
discovering how to wire them.

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
| 2 | **Incomplete enumeration** — the ignored case → non-exhaustive `switch` over a union → exhaustiveness as an error | ✅ [published](chapters/02-incomplete-enumeration.md) |
| 3 | **Circular justification** — A because B because A → import cycles → cycle ban (and the day the rule was wired but blind) | ✅ [published](chapters/03-circular-justification.md) |
| 4 | **Begging the question** — a test derived from the implementation's own output proves nothing → tests before code + mutation testing | ⛔ blocked on mutation testing landing in a real project |

### Part II — Examinability (can the claim even be checked?)

| # | Chapter | Status |
| --- | --- | --- |
| 5 | **Eristic verbosity** — winning by volume → the unreviewable diff → size and complexity caps as epistemic, not stylistic | ✅ [published](chapters/05-eristic-verbosity.md) |
| 6 | **The principle of charity, inverted** — automation bias, the fluent LGTM → suspicion proportional to fluency; gates blind to eloquence | ✅ [published](chapters/06-charity-inverted.md) |

### Part III — Procedure (is the investigation honest?)

| # | Chapter | Status |
| --- | --- | --- |
| 7 | **Burden of proof** — "it's done" is a claim, not a fact → the evidence gate; "compiles" ≠ "works" | ✅ [published](chapters/07-burden-of-proof.md) |
| 8 | **The framing effect** — "find bugs" manufactures bugs → neutral audit prompts that allow "none found" | ✅ [published](chapters/08-framing.md) |
| 9 | **The illusory foundation** — a green gate is only as strong as what it checks → negative tests for the gates themselves | ✅ [published](chapters/09-illusory-foundation.md) |
| 10 | **Pre-registration** — kill criteria written before the bet, so failure cannot be renegotiated | planned |
| 11 | **Calibration** — trust as a measured number: real vs confabulated findings per audit | ⛔ blocked on enough audit data |
| 12 | **The mechanized elenchus** — four questions no feature may skip → planning gated on testable answers | ⛔ blocked on the /plan-feature skill shipping |
| 13 | **Reductio ad absurdum, automated** — state the invariant, let the machine hunt the counterexample → property-based testing | ⛔ blocked on property tests landing in a real project |
| 14 | **Testimony** — AI output as the deposition of a fluent, unreliable witness → the Humean policy: verify everything | ✅ [published](chapters/14-testimony.md) |

### Part IV — Composition (how the answers assemble into a machine)

| # | Chapter | Status |
| --- | --- | --- |
| 15 | **The selection cascade and the coherence horizon** — cheap filters first, killing only the provably dead; checkpoints spaced shorter than the generator's coherence horizon; mechanical composition rules + the story bible against drift | ✅ [published](chapters/15-selection-cascade.md) |

## What this book is not

- Tools cannot deliver good design, correct requirements, or truth — and this book
  never claims they can. Tools verify **form**; content — the right scenarios, the
  right definitions, the right problem — remains human judgment. Any stronger claim
  is treated here as a defect.
- It is not an argument that philosophical training substitutes for engineering
  competence. The engineering has its own receipts, in its own repositories; this book
  is about the protocol that disciplines both.
- It is not a framework. The frameworks exist (Spec Kit, BMAD, and company); this is
  the layer they are missing — what must be *impossible*, and how to make it so.
