# Make the Judge Laugh in One Line

[![Make the Judge Laugh in One Line](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/toirant/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/rank.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/toirant/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/reward.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

Entry for the [make.fun bounty "Make the Judge Laugh in One Line"](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21) ($2, two places paid $1 each).

## The line

> My AI assistant wrote me a joke, then invoiced me for the laugh — the punchline was itemised, the applause is a monthly subscription.

133 characters, one line. The judge is a comedy club booker who has heard
every joke twice and only laughs at what catches them off guard, so the
line is built on a double twist: an AI that writes the joke, then bills
you for laughing at it — and the applause itself is a subscription.

## How it works

`main.ts` (Node 22.18+, run as `node main.ts`) validates the line — 1 to
200 characters, a single line, not only whitespace — then writes it to
`/output/entry.txt` and reads it back to confirm the file holds exactly
that line, with no trailing newline. It creates `/output` if it is
missing and never deletes it, since the grader mounts that directory.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
