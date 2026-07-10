# 6 — The principle of charity, inverted

> Principle → failure mode in agentic coding → mechanism → receipt.

## The principle

The principle of charity is a cornerstone of honest debate: interpret your
interlocutor's argument in its strongest form before criticizing it. Between humans
this is both fair and truth-conducive — people argue worse than they think, and
attacking the weak phrasing instead of the strong thought is how discussions produce
heat instead of light.

The principle has a hidden premise: that behind the imperfect words there *is* a
thought whose strength deserves reconstruction. Drop that premise and charity stops
being a virtue.

## The failure mode in agentic coding

Applied to AI output, charity inverts into a hazard. A language model's prose is
already maximally fluent — there is no stronger version hiding behind clumsy
phrasing, no benefit of the doubt to extend. Yet the human reviewer's instincts were
trained on people, where fluency correlates with competence. The result is
**automation bias with a rhetorical accelerant**: polished code, confident summaries,
tidy commit messages — each earns unearned trust, and the reviewer's charity fills
every gap in the AI's favor.

The empirical shape of the failure is familiar to anyone who has worked with agents:
the confident "all tests pass" that no test run backs; the plausible explanation for
a bug that dissolves on inspection; the beautifully structured module that does
subtly the wrong thing. Fluency is the model's *baseline*, so fluency carries **zero
evidence** — and a reviewer calibrated on humans systematically misreads it as
carrying a lot.

## The mechanism

You cannot debias a reviewer by telling them to try harder; you route the judgment
around the bias:

- **Gates are eloquence-blind by construction.** The type checker, the linter, the
  test suite, and CI evaluate form with zero access to how confident or well-written
  the artifact is. The most persuasive `any` fails exactly like the clumsiest one.
- **Claims are stripped of their prose before evaluation** — "done" is not accepted
  as prose but as command output (chapter 7), and an audit finding is not accepted as
  narrative but as a reproduction (chapter 8).
- **The uncharitable default is written into the system's constitution**: the
  harness README states *fluency ≠ correctness* as a design premise — AI output is
  "the statistical center of its training data", to be mechanically rejected when
  wrong, never trusted for sounding right.

Charity remains the right stance toward your human colleagues. Toward a fluent
generator, the calibrated stance is symmetric suspicion: judge the artifact by what
survives the gates, never by how it reads.

## The receipt

- The premise, stated as the system's thesis: the
  [agentic-harness README](https://github.com/DanielLourencoFil/agentic-harness/blob/main/README.md)
  ("you cannot prompt quality into an AI... mechanically reject bad output").
- The eloquence-blind gates themselves: the
  [ts-base template](https://github.com/DanielLourencoFil/agentic-harness/tree/main/templates/ts-base)
  — every rule in it evaluates form, none of it reads the sales pitch.

## The honest limit

Gates filter what they can see; the residue — design quality, requirement fit — still
reaches the human, and the bias operates there in full force. The countermeasure at
that layer is procedural, not architectural: reproductions, checklists, evidence
demands (chapters 7–8) — and knowing the bias by name, which helps less than one
hopes but more than nothing.
