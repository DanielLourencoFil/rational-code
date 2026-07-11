# Rational Code

**How the classical discipline of rational discourse maps onto AI-assisted software
development — and how to turn each principle into something a machine enforces.**

## The thesis

Coding is a form of rational discourse. A program asserts, defines, infers, and
justifies — and like every rational discourse it is bound by the same fundamental
rules and prey to the same fundamental vices. Equivocation, incomplete case
analysis, circular justification, verbosity that defeats scrutiny: every classical
failure of reasoning has an exact counterpart in code. This book maps them one by
one.

None of this is foreign to programming. The traditional craft already embodies the
discipline in its rites: code review is peer scrutiny, testing is experiment,
"clean code" is a catalogue of composition rules. The nomenclature differs from the
classical one; the principles — and the problems — are the same.

AI-generated code creates a new situation, for two reasons. First, whatever
discipline a model displays is **incidental**: the residue of training, not the
exercise of judgment. The model acts in accordance with the patterns without
following them, and holds no commitment to any of them. Second, the economics of
the craft inverted: generating became easy; checking stayed hard.

Hence the question this essay examines: **how do you intentionally impose the
patterns of rational discourse on a generator of rational discourse that is not
itself rational?**

The imposition comes in two families. **Self-limiting rules** — syntax and
composition, checkable by machine — can eliminate malformed code at the root, or
expose existing bad code by its form alone. **Principles of general coherence** —
semantics, the fit of parts to a whole — remain matters of judgment. Arranged as a
cascade of filters, the first family works early and often, so that the high-level
work of rational activity — judgment — is spent on material worth judging. Code
enjoys one advantage over every other discourse here: a mechanical referee is
available. In conversation the norms of rationality bind only by good will; in
software they can be physically enforced.

The aim is not to remove the human from the loop; it is to **optimize what reaches
the human** — less plausible simulacrum, more real discourse. Nothing in this is
new. It is a structured, conscious way of making the machine write clean code.

A second aim runs alongside: brakes against the destructive habits of long
generation. The longer a generative process runs, the more it tends toward
disorganization — parts each coherent in themselves do not guarantee a coherent
whole, because the generator lacks the context to honor all of its commitments at
once. And a body of code, like a body of claims, must not be allowed to
trivialize: once it admits contradictory assumptions, any change can be justified
by citing *some* precedent — the practical form of the logician's explosion, where
everything follows from everything.

## The constitutional rule of this book

**No chapter without a wired, linkable mechanism.** Every chapter must contain: the
principle, its concrete failure mode in agentic coding, the enforcement mechanism, and
a receipt — a link to real configuration, a real commit, or a logged incident in a
working repository. A principle that only renames an existing practice does not get a
chapter. Chapters that lack a shipped mechanism are listed as **blocked** below, gated
on the mechanism landing first.

**This book is written at the speed of its own evidence.**

The direction of flow is fixed: practice feeds the harness, and the harness feeds
this reflection — never the reverse. The mechanisms these chapters point into were
built and run in [agentic-harness](https://github.com/DanielLourencoFil/agentic-harness)
and the projects behind it; the essay studies the practice, it does not dictate to it.

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
