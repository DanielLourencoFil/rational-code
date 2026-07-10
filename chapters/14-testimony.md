# 14 — Testimony: the fluent, unreliable witness

> Principle → failure mode in agentic coding → mechanism → receipt.

## The principle

Most of what anyone knows arrives as testimony — someone said so. Epistemology has
argued for centuries about when that's enough. The generous position: testimony is
default-trustworthy, absent specific reasons for doubt (this is how human cooperation
scales at all). The austere, Humean position: accept testimony only insofar as you
have *independent* grounds for the witness's reliability — trust is earned per
witness, per domain, never granted by eloquence.

Between humans, the generous default mostly wins, because human testimony has skin in
the game: reputation, memory, embarrassment, the ability to say "I don't know".

## The failure mode in agentic coding

An AI collaborator is a witness with a very specific deposition profile: encyclopedic
range, perfect composure, native fluency — and no skin in the game, no reliable "I
don't know", and a demonstrated tendency to confabulate precisely when uncertain,
with confidence unchanged. Every property that earns a human witness default trust is
either absent or actively misleading here (chapter 6 covered the misreading; this
chapter is about the policy).

Grant such a witness the human default and your codebase fills with accepted
testimony: the API that "exists" (in the training data, three versions ago), the
"passing" tests, the library behavior asserted from vibes. Each item is individually
plausible; the inventory is unaudited hearsay wearing the syntax of knowledge.

## The mechanism

Adopt the Humean policy, wholesale, and make it structural — the harness *is* a
testimony policy:

- **Zero testimonial credit.** Nothing the agent asserts is accepted as knowledge on
  its say-so. Claims with executable form are collected mechanically (typecheck,
  lint, tests, CI — chapter 7); claims about findings need reproductions (chapter 8);
  claims about the system itself are re-proven by selftest on every push.
- **Reliability is measured per witness, not presumed** — the audit log's found-real
  vs confabulated counts are, in the strict Humean sense, the accumulated track
  record that alone justifies (bounded, domain-specific) trust.
- **The witness is boxed where it cannot testify falsely to any effect**: read-blocks
  on secrets, denied force-pushes and `--no-verify`, a server-side ruleset that no
  local assertion can talk its way past. Where testimony can't be verified, the
  design ensures it can't be *load-bearing* either.

None of this is hostility toward the tool. It is the correct trust policy for a
witness of this profile — and, once wired, it is *cheaper* than trust: no one spends
attention deciding whether today's fluent assertion is one of the true ones.

## The receipt

- The policy, wired end to end: the
  [agentic-harness](https://github.com/DanielLourencoFil/agentic-harness) repository
  is this chapter's receipt in full — gates
  ([ts-base](https://github.com/DanielLourencoFil/agentic-harness/tree/main/templates/ts-base)),
  claim-collection ([selftest](https://github.com/DanielLourencoFil/agentic-harness/blob/main/scripts/selftest.sh)),
  track record ([AGENT-LOG](https://github.com/DanielLourencoFil/agentic-harness/blob/main/AGENT-LOG.md)),
  and the boxed witness
  ([.claude/settings.json baseline](https://github.com/DanielLourencoFil/agentic-harness/blob/main/templates/ts-base/.claude/settings.json)).

## The honest limit

The Humean policy is only as wide as the verification surface. Where no independent
check exists — architectural judgment, domain claims, "this is what the user meant"
— the agent's testimony is simply *inadmissible*, and the human must know it: those
questions are decided by humans on human evidence, with the AI as a drafting aid, not
a witness. The failure mode of forgetting this has a name in the harness's
constitution: never ship what the human doesn't understand.
