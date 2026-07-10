# 7 — Burden of proof: "it's done" is a claim, not a fact

> Principle → failure mode in agentic coding → mechanism → receipt.

## The principle

*Onus probandi incumbit ei qui dicit* — the burden of proof lies on the one who
asserts. Shifting that burden is one of the classic illegitimate moves: "prove me
wrong" converts the claimant's obligation into the audience's labor, and wins by
making verification someone else's expensive problem.

Discourse stays honest only while the asymmetry points the right way: making a claim
must cost the claimant evidence, not cost the listener an investigation.

## The failure mode in agentic coding

Every AI work session ends with an assertion: *done, implemented, tests pass, it
works now.* Untreated, each of those is a burden-shift — asserting costs the agent a
sentence, and the human either investigates (expensive) or accepts (dangerous). Multiply by
dozens of assertions per day and the economics take over the whole collaboration:
cheap claims, dear checks, and a slowly growing inventory of things everyone
believes and no one verified.

The failure has a documented worst case in this very project: a template that claimed
for weeks to produce a working scaffold ("verify green on an empty project") had
never once been run against that claim. Every step of its consumption path failed.
The claim wasn't a lie — it was an assertion whose burden nobody had ever collected.

## The mechanism

Make the evidence a physical precondition of the claim:

- **The evidence gate.** "Done" is only pronounceable with command output attached —
  a green `verify` run shown, not summarized. The playbook's phrasing: *"compiles" ≠
  "works"; never ship unverified claims.* An implementation without shown evidence
  carries the explicit status **"IMPLEMENTED — NOT VERIFIED"**, with the exact command
  the human can run — the claim is labeled as an open obligation, not a fact.
- **The commit gate collects the burden automatically**: `verify` runs on pre-commit
  and again in CI, so the assertions "it typechecks, it lints, it passes tests"
  literally cannot be uttered as a commit without being true at that moment.
- **Claims about the system itself carry the same burden**: the template's own
  promises are collected by a selftest on every push — the claim "this scaffold
  works" is re-proven mechanically each time anyone touches it.

## The receipt

- The routine: [PLAYBOOK — feature loop, evidence gate](https://github.com/DanielLourencoFil/agentic-harness/blob/main/PLAYBOOK.md)
  and the conventions in [`AGENTS.md`](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/AGENTS.md).
- The worst case and its structural fix, logged: the
  [AGENT-LOG entry of 2026-07-09](https://github.com/DanielLourencoFil/agentic-harness/blob/main/AGENT-LOG.md)
  — the audited "paper" template, and the selftest that now collects its claims on
  every push.

## The honest limit

Evidence gates verify claims that have an executable form. "The code is well
designed", "this is the right feature", "users will understand this" — assertions
without a command that could vouch for them — still travel on ordinary human credit.
The gate's real contribution there is indirect: by mechanically settling every claim
that *can* be settled, it leaves the human's finite skepticism free to spend on the
claims that can't.
