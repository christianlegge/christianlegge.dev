---
title: "pmr-tracker"
image: "images/pmr-tracker.png"
tags: ["Vue", "Tailwind", "TypeScript", "API"]
url: "https://pmr-tracker.christianlegge.dev"
sortOrder: 11
---

In a similar vein to Cojiro above, pmr-tracker is a project designed to work alongside a video game randomizer, this time [one for Paper Mario](https://pm64randomizer.com/). Instead of simulating full games, this is a tracker meant to be used by players to keep track of which items they have found and which locations they have checked.

A similar tracker to this one was already in use by the community when I got involved, but there were a few outstanding issues with it, and I decided to build a new one from scratch, and take the opportunity to learn a new framework (Vue) while I was at it. This version is now in use by many of the game's players.

It's written in Vue and uses a customizable drag-and-drop grid system so users can lay it out however they want. It also has a feature which connects to the randomizer's API to determine the settings of a particular game; because there are dozens of settings that might affect how the tracker works, this is a huge quality of life upgrade for users. The app is hosted on [Railway](https://railway.app).

[GitHub](https://github.com/christianlegge/pmr-tracker)
