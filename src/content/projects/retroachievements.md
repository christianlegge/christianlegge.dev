---
title: "RetroAchievements development"
image: "images/sm64.jpg"
tags:
  [
    "Reverse engineering",
    "Romhacking",
    "Game development",
    "Game design",
    "React",
    "Laravel",
  ]
url: "https://retroachievements.org/user/scatter"
sortOrder: 10.5
---

[RetroAchievements](https://retroachievements.org) is a website dedicated to giving retro games a new life via sets of achievements, offering new tasks and challenges to players. Users of the site can track their overall progress, compete for leaderboard spots, and participate in themed events. The achievement sets are all user-created, and since mid-2024 I've been developing them myself.

Coding the achievements presents unique challenges—the developer has to understand how a game's memory works in order to hook into it and detect game state, using various reverse engineering and memory inspection techniques. It's also a creative task to design the set, making sure to present challenges that are fun, varied and not too tedious or grindy. It's very rewarding to enable these new experiences for players and to hear from them about how much fun they had playing your set. Since November I volunteer as a code reviewer on the site as well, helping new developers onboard to the program and learn how to create achievement sets on their own.

[The source code of the website itself is also open source](https://github.com/retroachievements), and I've contributed to it on a few occasions.

[RAScript GitHub (the domain specific language used to write code for achievement logic)](https://github.com/christianlegge/rascripts)
