# 2 — Incomplete enumeration: the case you didn't consider

> Principle → failure mode in agentic coding → mechanism → receipt.

## The principle

A conclusion drawn from a division of cases is only as good as the division. "It is
either A or B; not A; therefore B" is valid **only if** A and B exhaust the
possibilities — otherwise it is the false-dilemma pattern: the argument quietly
assumes away the very case that matters. Sound case analysis has an obligation of
completeness, and the obligation is easy to violate invisibly, because the missing
case leaves no trace in the argument's text. What is absent cannot be seen by
rereading.

## The failure mode in agentic coding

Code reasons by cases constantly: a `switch` over a status, a chain of `if`/`else`
over a variant type. The failure arrives in two steps, and the second is the one that
kills:

1. Today, someone writes a `switch` over `"draft" | "published"`. Two cases, both
   handled. Complete.
2. Weeks later, someone — very often an AI session with no memory of step 1 — adds
   `"archived"` to the type. The type change is correct, local, and reviewed. But the
   old `switch`, three modules away, still handles two cases. It doesn't crash; it
   falls through to whatever the code after it does. The missing case leaves no trace.

This is a failure mode agents *amplify*: a model edits where it is looking, and the
enumeration obligations live exactly where it is not looking. The classic human
mitigations — "remember to grep for every switch" — are memory-based, and the whole
premise of harness engineering is that memory-based rules do not survive contact with
either humans or models.

A smaller cousin of the same fallacy: concluding presence from a lookup.
`array[i]` and `map[key]` are conclusions with an unstated premise ("this exists"),
and the premise is precisely what an incomplete enumeration of states forgot.

## The mechanism

Make the compiler carry the enumeration obligation to every conclusion:

- **`@typescript-eslint/switch-exhaustiveness-check` as an error** — a `switch` over a
  union must handle every member. The payoff is in step 2 above: the day `"archived"`
  is added to the type, **every non-exhaustive `switch` in the codebase turns red at
  once**. The type system becomes a registry of enumeration obligations, and the gate
  refuses the change until every case analysis is completed again.
- **`noFallthroughCasesInSwitch`** — a case cannot silently bleed into the next.
- **`noUncheckedIndexedAccess`** — a lookup returns `T | undefined`: the "it exists"
  premise must be discharged explicitly before use.

Note the shape of the win: no discipline, no memory, no convention. The cost of an
incomplete enumeration moved from *runtime, weeks later, somewhere else* to
*compile-time, now, at the exact line*.

## The receipt

- The rules, live: [`eslint.config.mjs`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/eslint.config.mjs)
  and [`tsconfig.base.json`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/tsconfig.base.json)
  in agentic-harness.
- The rule was shown rejecting a deliberately non-exhaustive `switch` before shipping;
  that negative-proof practice is chapter 9's subject, and it runs in the template's
  selftest on every push.

## The honest limit

Exhaustiveness is proved over the **declared** alternatives. If the union itself is
wrong — the domain has a case your type model never named — every checker in the
world reports green while the enumeration stays incomplete where it matters, in the
model of reality. Discovering the missing *real* case is domain analysis: interviews,
data, negative scenarios owned by a human. The machine guarantees you handled
everything you named; naming everything is still your job.
