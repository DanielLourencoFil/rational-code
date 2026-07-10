# 1 — Equivocation: one name, shifting meanings

> Principle → failure mode in agentic coding → mechanism → receipt.
> (Every chapter follows this shape; it is the book's constitutional rule.)

## The principle

Equivocation is the oldest trick in the catalogue: use one term with two meanings and
let the argument's surface carry you across the gap.

> Feathers are light. Light is the opposite of darkness. Therefore feathers are the
> opposite of darkness.

Nothing in the *shape* of that argument is wrong — that is what makes equivocation
dangerous. Validity depends on every term keeping one meaning for the whole argument
(univocity), and univocity fails silently: the words look identical, the reasoning
looks fine, and the conclusion is garbage.

## The failure mode in agentic coding

A variable is a term. A data flow is an argument. And TypeScript's `any` is a switch
that turns univocity off: the same name may carry a string here, an object there, and
the "argument" — the flow from input to output — still *looks* valid to everyone
reading it, compiler included.

This matters more with an AI author, for a structural reason: a language model
produces the most statistically comfortable continuation, and `any` (or an untyped
boundary, or a coerced comparison) is always the path of least resistance — it makes
the immediate error disappear without resolving the ambiguity that caused it. The
model is not being lazy; it is doing exactly what fluent production does when
verification is someone else's job. Fluency has no stake in univocity.

JavaScript ships a second equivocation engine: `==`, which declares values of
different types equal by silently converting one into the other. `"1" == 1` is true
the way "light" equals "light" in the syllogism above — by ignoring that the two sides
mean different things.

Left unchecked, both failures compound quietly: the type that meant one thing at the
boundary means another three modules deep, and the bug report, weeks later, reads
like the feathers conclusion — absurd, with no visible broken step.

## The mechanism

Univocity is exactly the kind of norm that should never live in a style guide, because
it can be physically enforced:

- **`@typescript-eslint/no-explicit-any` as an error** — the univocity switch cannot
  be turned off. Where genuine uncertainty exists, `unknown` forces the ambiguity to
  be *resolved* (narrowed) before use, instead of ignored.
- **`eqeqeq` as an error** — no coerced equality; different types are never silently
  declared the same.
- **Type-checked lint (`strictTypeChecked`) + strict tsconfig** — the compiler
  verifies, on every commit and again in CI, that every term kept its meaning along
  every flow. A type checker is, quite literally, a univocity prover that runs in
  seconds.

The point is not that these rules are exotic — they are well known. The point is the
*classification*: they are not style. They are validity rules, and validity rules are
non-negotiable in a way formatting never is. Knowing **why** a rule exists tells you
what may never be traded away.

## The receipt

- The rules, live: [`eslint.config.mjs`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/eslint.config.mjs)
  in agentic-harness (`no-explicit-any`, `eqeqeq`, `strictTypeChecked`).
- The rule taxonomy these belong to: [`docs/RATIONALE.md`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/docs/RATIONALE.md).
- Before shipping, each rule was shown **rejecting** a deliberate violation — a rule
  that has never said "no" is decoration. That practice has its own chapter (#9); the
  incident that motivated it is logged in the project's
  [AGENT-LOG](https://github.com/DanielLourencoFil/agentic-harness/blob/main/AGENT-LOG.md).

## The honest limit

The gate enforces univocity of **types**, not of **concepts**. If `user` means "account
holder" in one module and "person being booked" in another, the type system is
perfectly happy and the equivocation is alive and well — in the naming, where no
machine can see it. That failure is caught by human review with domain knowledge, or
not at all. Form is enforceable; meaning is a judgment. Pretending otherwise is how
tools get oversold, and overselling is a defect this book tries hard not to have.
