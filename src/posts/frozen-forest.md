---
title: frozen forest preview
date: 2024-03-20
tags: [ "posts" ]
---

frozen forest is a game being developed by some classmates of mine. It's programmed in rust using the bevy game engine.

link: https://github.com/Toffuh/frozen-forest

Be aware that there aren't any releases yet, so you have to clone the repo and compile it yourself. First time
compilation is brutal, it took my laptop 55 minutes to compile the necessary libraries. After this it was near
instantaneous.

The game is super early in development, with temp sprites and all, but you can almost see what it will look like in the
future.

The gameplay so far is just fighting these little green blobs, which never respawn. You only have one attack, a red
rectangle which destroys the blobs very quickly.

![frozen forest gameplay]({{"../../assets/gameplay.gif" | url }})

One feature that I find very cool is the lazy rendering of the environment. Right now you have to click on a tile to
render it, but once this is automatic it should be a cool feature.

One issue I have with this build is that sprites that collide with the player aren't very noticeable, which makes player
movement awkward.