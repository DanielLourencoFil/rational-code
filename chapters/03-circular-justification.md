# 3 — Circular justification: A because B because A

> Principle → failure mode in agentic coding → mechanism → receipt.

## The principle

A justification chain must terminate. If A rests on B and B rests on A, the loop has
the *shape* of support with none of the substance — nothing in the circle touches
ground. Circular reasoning is seductive precisely because every individual step looks
fine; the defect is a property of the whole that no local inspection reveals. You
cannot see a circle by staring at one of its arcs.

## The failure mode in agentic coding

The dependency graph of a codebase is a justification structure: "module A is
understood in terms of what it imports." An import cycle — A imports B, B imports A,
possibly through six intermediaries — is circular justification made executable, and
it costs you twice:

- **Epistemically:** no module inside the cycle can be understood, tested, or replaced
  alone. The unit of comprehension silently grows from "one file" to "the whole
  circle" — which is how 300-line modules become a 3,000-line effective unit.
- **Mechanically:** at load time, one of the two modules *will* be evaluated first
  against a half-initialized other. The classic symptom is an `undefined` that only
  appears in certain entry orders — a bug that reproduces in production and not on
  your machine.

Agents accrete cycles faster than humans, for the same reason as always: a model adds
the import that resolves the immediate problem in the file it is looking at. Whether
that edge closes a loop through five other files is a whole-graph property — exactly
the kind no local, fluent step ever checks.

## The mechanism

- **`import-x/no-cycle` as an error** — the linter walks the import graph and rejects
  the edge that closes a loop, at the commit that tries to introduce it. Whole-graph
  properties are the machine's natural territory; it holds the entire circle in view
  at once, which no reader does.

## The receipt — and the day the rule was blind

This chapter's receipt is double, and the second half matters more than the first.

The rule is live in
[`eslint.config.mjs`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/eslint.config.mjs).
But when it was first wired (2026-07-10), it **detected nothing**. The configuration
loaded; `--print-config` showed the rule active; every happy-path check passed. Then
the pre-ship negative test — a deliberate A↔B cycle that *must* produce an error —
produced zero errors. Cause: by default the plugin's dependency graph only parses
`.js` files, so in a TypeScript project the rule was active and blind to every module
it existed to police. Two settings lines fixed it; the incident is logged in the
project's [AGENT-LOG](https://github.com/DanielLourencoFil/agentic-harness/blob/main/AGENT-LOG.md).

Sit with that for a moment, because it is this book's thesis in miniature: **a wired
rule is not a live rule until it has been seen rejecting a violation.** The gate
itself made a claim ("I check cycles"), and the claim needed the same treatment as
any other — a test that would falsify it. That generalization gets its own chapter
(#9); it earned it the hard way.

## The honest limit

`no-cycle` sees the *module* graph. Two modules with no import edge can still justify
each other conceptually — coupled through an event bus, a shared table, a convention
("this writes what that assumes"). The circle is real, executable, and invisible to
any import analysis. Detecting conceptual circularity requires understanding what the
modules *mean* — architecture review remains a human act, and this rule buys the
reviewer time rather than replacing them.
