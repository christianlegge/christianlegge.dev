---
title: HappyBoy
image: images/happyboy.png
tags: [C++, Hardware emulation, ASM, SDL2]
sortOrder: 20
---

HappyBoy is a Game Boy emulator. I wrote it using C++ as speed is an important factor when emulating hardware. I chose not to look at any other emulator's source code (of which many are available), because part of the fun was figuring it out on my own. There are a lot of data sheets and fan-made compendiums of how the Game Boy works electronically, which I made extensive use of when writing the emulator.

It's written to be as cycle-accurate as possible and I don't take shortcuts when processing ROM code. It runs one CPU cycle at a time using a fetch-decode-execute loop that emulates the real LR35902 CPU of the Game Boy. The emulator has working graphics, sound, and controls. Currently it only supports a few of the ROM mapping modes, which limits the games it can play.

[GitHub](https://github.com/christianlegge/happyboy)
