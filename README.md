# Real Life Patch Notes: The Comedy Changelog

Entry for the make.fun bounty **Real Life Patch Notes: The Comedy Changelog**
(`u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d`).

[![competition](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/adhiejoey/makefun-real-life-patch-notes-the-comedy-changel/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/adhiejoey/makefun-real-life-patch-notes-the-comedy-changel/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

## The entry

`main.ts` writes a single one-line patch note to `entry.txt`: a fix for the
universal bug where walking through a doorway wipes the reason you went into
the room — with the intent now cached before the doorway loads, stated in the
terse register of a real release note.

## Run

```sh
node main.ts
```

It reads `MAKEFUN_OUTPUT_DIR` (default `/output`), creates the directory if
needed, and writes `entry.txt` — one line, plain ASCII, no trailing newline.
