# Writing constitution — binds every session that generates text for this book

These rules constrain **generation**; `scripts/check-book.mjs` (run by CI on every
push) mechanically enforces the checkable subset. A chapter that violates them is
not "to be improved later" — it is not committed.

## Claim discipline

- **No absolute economic or capability claims.** "Zero cost", "costs nothing",
  "unlimited", "guarantees", "always/never" applied to tools — banned. Claims are
  **comparative and bounded** ("marginal cost far below the cost of review").
- **Every empirical, historical, or numerical claim carries its ground**: a source
  link, a receipt link, or an explicit hedge naming the uncertainty. A claim the
  argument does not need is deleted, not defended.
- **Idealizations must be declared as such**, and the conclusion must survive
  relaxing them.

## Structure (the constitutional rule, mechanized)

- Every chapter has exactly the five sections, in order: **The principle → The
  failure mode → The mechanism → The receipt → The honest limit.**
- The receipt section contains at least one link to a wired mechanism, commit, or
  logged incident in a working repository.
- The index lists every published chapter and every blocked chapter names its gate.

## Voice

- One voice — the author's. The book **never narrates its own drafting process**:
  no "the author corrected", no "in review we found", no diary of revisions.
  Engineering incidents enter only as receipts (AGENT-LOG links). Git history is
  the only revision record, and commit messages state the change, not the saga.
- No name-dropping that does not carry load: a philosopher or a law is cited only
  where removing the citation would weaken the argument.

## Drafting protocol (thesis, intros, any argumentative text)

- **No prose before an approved skeleton.** The argument is written first as bare,
  numbered claims — no rhetoric, no metaphors — and the author marks each line
  right/wrong/missing. Prose is generated only from an approved skeleton, and adds
  **zero concepts** to it.
- **The author owns concepts; the machine owns mechanics** (translation, grammar,
  tightening, running the checker). A session that invents a framing the author did
  not state has exceeded its role — that is how plausible sentences compose into
  nonsense.
- One metaphor system per text. An aphorism must earn its place by carrying an
  argument step, not decorating one.

## Rite

- Before committing prose: run `node scripts/check-book.mjs` locally; fix, don't
  suppress. The checker verifies form only — the content bar (is the argument
  sound? is the philosophy right?) remains the author's reading, which these rules
  exist to make **rare and high-level**, not frequent and janitorial.
