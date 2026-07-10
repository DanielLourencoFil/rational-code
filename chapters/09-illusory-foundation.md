# 9 — The illusory foundation: a green gate is only as strong as what it checks

> Principle → failure mode in agentic coding → mechanism → receipt.

## The principle

A conclusion inherits the strength of its weakest premise. That is the whole,
unglamorous engine of demonstrative rigor: you may only advance on ground that
holds, and the next step is exactly as strong as the foundation it stands on. The
corollary cuts deeper than it looks: **checking the argument is not enough — the
checker is a premise too.** A proof reviewed by an incompetent referee is not a
proof plus a formality; it is testimony about a proof. Whoever verifies the
verifier, and how, is part of the argument's foundation, all the way down until
something touches ground.

Foundations fail in two ways. Loudly, when a premise is visibly false. And
silently — the dangerous way — when the *verification* of a premise turns out to
have never occurred, while everyone proceeded as if it had.

## The failure mode in agentic coding

The green checkmark is a conclusion: "this code satisfies the checks." Teams treat
it as ground truth and build on it — merge, deploy, forget. But the checkmark's
strength is exactly the strength of what was checked, and *that* premise is almost
never itself examined. Green from a weak gate is worse than no gate at all: it
carries the **feeling** of verification without the substance, and feelings of
verification are what turn off human vigilance.

This project supplied two empirical demonstrations within one week of each other,
neither hypothetical:

1. **The paper template** (2026-07-09). A quality-gate template claimed "verify
   green on an empty scaffold" — and had never once been executed against that
   claim. All three steps failed. Everything that would have been built on it was
   one `git clone` away from standing on nothing.
2. **The wired-but-blind rule** (2026-07-10). An import-cycle rule was added:
   configuration loaded, `--print-config` showed it active, every happy-path check
   passed. A deliberate A↔B cycle then produced **zero errors** — the plugin's
   dependency graph parsed only `.js`, so in a TypeScript project the rule was
   awake, on duty, and blind. The gate itself was making an unverified claim.

Note what both cases share: nothing was broken *in* the code being gated. The
illusion lived one level up, in the gate — precisely where nobody was looking,
because gates are where looking is supposed to stop.

## The mechanism

Collect the gate's own claims the way you collect everyone else's — with tests
that would fail if the claim were false:

- **Negative tests of the gate itself.** The template's selftest (Claim 4) plants
  code that violates four validity rules at once — an explicit `any`, a coerced
  `==`, a non-exhaustive `switch`, an import cycle — and **fails unless lint
  rejects every one, by rule id**. A gate that silently goes blind now turns the
  CI red the moment it does.
- **The gate's happy path is tested too** (Claims 1–3: green on empty scaffold,
  commit #1 passes the hook, the deletion guard blocks) — so both false positives
  and false negatives of the foundation are watched.
- **The working rule this reifies:** *a wired rule is not a live rule until it has
  been seen rejecting a violation.* Installation is testimony; rejection is
  evidence.

The same principle scales one level further — how strong is the *test suite* that
gates the code? That question has a mechanical answer too (mutation testing:
deliberately break the code and see if any test notices), and it gets its own
chapter when the mechanism ships (#4).

## The receipt

- The mechanism, live: [`scripts/selftest.sh`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/scripts/selftest.sh),
  Claim 4 — merged via
  [agentic-harness#2](https://github.com/DanielLourencoFil/agentic-harness/pull/2)
  and run by CI on every push.
- Both founding incidents, logged with their reproductions: the
  [AGENT-LOG](https://github.com/DanielLourencoFil/agentic-harness/blob/main/AGENT-LOG.md)
  entries of 2026-07-09 and 2026-07-10.
- This chapter itself was **blocked** in this book's index until that PR merged —
  the constitutional rule applied to the book's own foundation.

## The honest limit

Verification of verifiers cannot recurse forever — someone must decide where the
regress stops, and that decision is economic, not logical: test the gates that are
load-bearing, hand-write violations for the rules whose silent failure would cost
most, and accept that the outermost layer is always held by human attention. Claim 4
covers four rules with deliberate violations; it does not cover every rule, and its
own coverage is a choice a person made and a person should revisit. Foundations are
never proven safe — only inspected at the points where you'd fall furthest.
