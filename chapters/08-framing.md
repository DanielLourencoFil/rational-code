# 8 — The framing effect: "find bugs" manufactures bugs

> Principle → failure mode in agentic coding → mechanism → receipt.

## The principle

A question is never neutral by accident. Ask a witness "how fast was the car going
when it *smashed* into the truck?" and you get higher speed estimates — and more
broken glass remembered — than with "when it *contacted*". The question smuggles in
its expected answer; the honest inquiry disciplines its own phrasing. Experimental
science institutionalized this centuries after rhetoric weaponized it: leading
questions, demand characteristics, and the researcher who finds what the grant
proposal needed found.

The rule that falls out: **an investigation whose framing presupposes the result
cannot produce evidence for it.**

## The failure mode in agentic coding

A language model is the perfect eager witness: it aims to satisfy the question as
asked. Tell it "review this module and find the bugs" and it *will* find bugs —
whether or not any exist — because the prompt presupposes their existence, and
producing them is the fluent completion. The result is confabulated findings:
plausible defect reports for correct code, each costing an expensive human
investigation to dismiss (Brandolini again, in audit form).

The same contamination works from inside: a session that wrote the code cannot audit
it, for the same reason an author cannot proofread their own paragraph — the
generator's assumptions ride along in the reviewer, invisibly. Asking the authoring
session "is your code correct?" frames the question to the one system guaranteed to
rationalize a yes.

## The mechanism

Discipline the framing structurally, the way a well-designed experiment does:

- **The neutral audit prompt.** Reviews are commissioned with a fixed template:
  *"Review <scope> for: correctness bugs, implementation problems, architecture
  concerns, dead code. For each category, if nothing qualifies, write 'none'."* The
  explicit permission to find nothing removes the presupposition; "none found" is a
  first-class, expected answer.
- **Fresh context, always.** Audits run in a new session or subagent — the session
  that wrote the code is recused, like any conflicted judge.
- **Findings are hypotheses, not results.** Every claimed finding must include a
  concrete reproduction (exact input/state → wrong output) and is then reified into a
  test: turns red → real, fix it; passes on current code → confabulated, discard.
  The reproduction requirement is the backstop that catches whatever framing
  discipline misses.
- **The error rate is recorded** — found-real vs confabulated counts per audit — so
  the process's own reliability becomes a measured number rather than a feeling
  (that number's story is chapter 11).

## The receipt

- The routine, verbatim: [PLAYBOOK — audit routine](https://github.com/DanielLourencoFil/agentic-harness/blob/main/PLAYBOOK.md)
  (neutral template, fresh context, triage-by-reification).
- A full run with its score: the audit of 2026-07-09, logged in the
  [AGENT-LOG](https://github.com/DanielLourencoFil/agentic-harness/blob/main/AGENT-LOG.md)
  — commissioned neutrally, category by category, with "none" allowed: **5 findings,
  5 real, 0 confabulated**, every one carrying a reproduction. The audited artifact's
  repairs are in the same repository's history.

## The honest limit

Neutral framing lowers the confabulation rate; it does not zero it, and it cannot
force *completeness* — an audit can be perfectly disciplined and still miss what it
wasn't looking at. Scope choices are a framing too, made by humans, carrying human
blind spots. The reproduction gate catches false positives; against false negatives
the defenses are plural scopes, recurring audits, and humility about what a clean
report proves.
