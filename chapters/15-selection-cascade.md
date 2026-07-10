# 15 — The selection cascade and the coherence horizon

> Principle → failure mode in agentic coding → mechanism → receipt.
> This chapter is the architecture the other fourteen compose into.

## The principle

When candidates are cheap and judgment is dear, knowledge does not grow by producing
truth directly — it grows by producing candidates and **eliminating error
efficiently**. That is Popper's conjectures-and-refutations rendered as an
engineering problem, and engineering solved it long ago under other names
(branch-and-bound, filter cascades): evaluate nothing one-by-one at full cost;
instead, order the filters cheap-to-expensive and let each stage kill most of what
reaches it, so the expensive stage — a competent human — receives only survivors.
Confidence in what survives has a technical name, *corroboration*: not proof, but
the accumulated severity of the selection endured.

Two design laws fall out immediately:

1. **Early filters may only kill what is provably dead.** In a cascade, a bad
   candidate that slips through is cheap (the next stage catches it); a good
   candidate killed early is gone forever. So the cheap gates enforce objective
   proxies only — type errors, cycles, ignored cases — and matters of judgment are
   *deferred*, not delegated. What looks like the tooling's modesty is the cascade's
   arithmetic.
2. **Selection must be interleaved with generation, not appended after it.** This is
   the deeper law, and it needs the second half of the chapter.

## The failure mode: locally flawless, globally incoherent

Picture a model writing novels. Every sentence is fluent; every paragraph, coherent.
Generate a million books and ask: how many hold together from first page to last —
how many keep the protagonist the same person, rather than starting with João and,
twenty pages in, quietly making him a stone? Local fluency does not compose into
global coherence, because the generator has a **coherence horizon**: a window within
which it honors the commitments it made. Past that horizon, the generator producing
page twenty is no longer, in any operative sense, the one that made promises on
page one.

Software built with agents fails exactly like the novel. Every session produces
correct-looking code; the *product* spans sessions — and drifts. The plan each party
understood differently, discovered weeks later as two divergent implementations; the
feature that quietly contradicts a decision made a month before; the module that
re-defines a term the rest of the system depends on. Reviewing the finished book is
strategy one — evaluate each combination at full cost, impracticable. The answer is
strategy two: **composition rules, enforced while writing.**

## The mechanism — three pieces, one machine

**1. The ordered cascade (the spatial dimension).** `verify` runs typecheck → lint →
test, cheapest first, failing fast; CI repeats it; scoped audits sit above CI; human
review sits above audits, receiving only what survived everything below. Seconds of
machine filter for minutes of machine, which filter for hours of human.

**2. Checkpoints inside the horizon (the temporal dimension).** The gate runs at
**every commit**, and the conventions force commits to stay small — minimal diff,
one concern. That pairing is usually justified as reviewability (chapter 5), but it
implements something stronger: *the interval between selection checkpoints stays
shorter than the generator's coherence horizon.* No artifact is ever generated far
past the point where drift could begin before selection touches it; route
correction happens at the paragraph, never at the book.

**3. Composition rules and the story bible.** Some global commitments can be checked
mechanically — these are gold, because they are the rare filters that see the whole
work at once. The type system is the canonical one: extend a union and every
consumer that ignored the new case turns red, everywhere (chapter 2); a term keeps
one meaning across every flow (chapter 1); modules cannot justify each other in a
circle (chapter 3). The commitments that resist mechanization go into the **story
bible** — SPEC, dated decision records, the conventions file — whose admission
criterion is precisely anti-drift: *would a fresh session need this to avoid a wrong
move?* The generator's memory does not survive extension; the bible is memory that
does, re-anchored into context at every checkpoint.

Upstream of all this sits the model's own training — earlier cascade stages that
already selected hard, but for *plausibility to humans*, not for correctness. The
blind spot of the upstream filter defines the job of the downstream ones: ours must
be immune to plausibility, because plausibility is the one thing every surviving
candidate is guaranteed to have.

## The receipt

- The order, live: `verify` in
  [`package.snippet.json`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/package.snippet.json)
  (typecheck → lint → test) and the
  [pre-commit hook](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/.husky/pre-commit);
  cheap→expensive, fail-fast as explicit pipeline law in the
  [PLAYBOOK](https://github.com/DanielLourencoFil/agentic-harness/blob/main/PLAYBOOK.md).
- The checkpoint conventions: minimal diff, one concern per commit, tests in the
  same commit —
  [`AGENTS.md`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/AGENTS.md).
- The story bible, with its anti-drift admission criterion in its first line:
  [OrgLab's DECISIONS.md](https://github.com/DanielLourencoFil/orglab/blob/main/docs/DECISIONS.md)
  ("a fresh AI session would need it to avoid a wrong move").
- The mechanical composition rule in action: chapter 2's union-change scenario —
  one type edit turning every incomplete case analysis red across the codebase.

## The honest limit

The supreme global property — *does the whole tell one story worth telling?* — has
no mechanical checker at any checkpoint interval. There the human is not a reviewer
in the cascade; the human is the **author**. The bible is the author's instrument,
and the gates protect the manuscript from destroying itself between the author's
readings — they do not, and cannot, write the book.
