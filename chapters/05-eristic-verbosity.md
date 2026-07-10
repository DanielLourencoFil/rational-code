# 5 — Eristic verbosity: winning by volume

> Principle → failure mode in agentic coding → mechanism → receipt.

## The principle

Not every way of losing an argument is a bad inference. The eristic playbook —
catalogued since antiquity, perfected by every filibuster since — includes a move
that commits no logical error at all: **bury the question**. Speak long enough,
densely enough, across enough fronts at once, and no interlocutor can check the
claims faster than you produce them. The modern names are *argumentum verbosium* and
the Gish gallop; the modern economics is Brandolini's law — refutation costs an order
of magnitude more than production.

Verbosity does not make an argument invalid. It makes it **unexaminable**, which is
worse: an invalid argument can be refuted, an unexaminable one just wins.

## The failure mode in agentic coding

This is the book's thesis at its purest, because an AI is an involuntary Gish
galloper: it produces fluent volume at zero marginal cost, with no stake in whether
anyone can review it. Left ungoverned, the artifacts drift toward the unexaminable —
the 3,000-line component mixing every responsibility, the 1,400-line diff that gets
a tired "LGTM", the refactor that silently deletes a feature somewhere in its bulk.

None of these contain a visible error. That is the point: past a size threshold,
*visibility itself* is what has been destroyed. Code-review research puts the
threshold depressingly low — defect detection collapses beyond a few hundred lines
per review session. Every line past that boundary is effectively unreviewed, whatever
the approval button says.

## The mechanism

Cap the size of every unit of examination, mechanically, so no artifact can outgrow
the region where human refutation works:

- **`max-lines: 300`** per file and **`max-lines-per-function: 60`** — the
  Frankenstein component is rejected at commit, not lamented at post-mortem.
- **`complexity: 10`** — branching, the other axis along which a unit outgrows a
  reviewer's working memory.
- **One concern per commit, minimal diffs** — the reviewable unit stays reviewable.
- **The deletion guard** — a >80-line deletion is blocked without an explicit flag,
  because a large *removal* is exactly as unexaminable as a large addition, and twice
  as quiet.

Classify these correctly: they are not style, and they are not ergonomic niceties.
They are **examinability rules** — they don't prevent fallacies, they preserve the
conditions under which fallacies can still be caught.

## The receipt

- The caps, live: [`eslint.config.mjs`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/eslint.config.mjs);
  the guard: [`deletion-guard.mjs`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/scripts/deletion-guard.mjs),
  proven blocking in the template's selftest (Claim 3) on every push.
- The taxonomy that names the category: [`docs/RATIONALE.md`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/docs/RATIONALE.md).

## The honest limit

Caps bound size, not clarity — a 50-line function can still be opaque, and fifty
well-sized files can hide their tangle in the dependency structure between them
(chapter 3 patrols part of that; the rest is design review). Size limits keep the
door to examination open; they do not walk through it for you.
