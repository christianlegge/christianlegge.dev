---
title: "ra-mastery-colorsort"
image: "images/colorsort.png"
tags:
  [
"Python", "fastapi", "Data processing", "React", "Vite", "Typescript"
  ]
url: "https://ra-mastery-colorsort.christianlegge.dev"
sortOrder: 31
---

This tiny project was created as a companion for RetroAchievements players. The site allows you to display a big wall of badges corresponding to all the games you've completed, and taking inspiration from [Letterboxd lists that do the same](https://letterboxd.com/ellefnning/list/for-when-you-want-to-feel-something/), I thought it would be nice to sort them by color.

Even though I'm a TypeScript zealot, the website employs a Python backend (served via fastapi), because Python excels at working with large amounts of numerical data. It grabs the images from RetroAchievements's CDN, detects their most dominant hue via k-means clustering (with k=3), and sorts on that. The reason you can't just average out the pixels in the whole image is that it turns out most images end up a muddy brown that way, and you can't effectively "unmix" those colors in the sort process. The frontend is a simple React app built with Vite.

[GitHub](https://github.com/christianlegge/ra-mastery-colorsort)
