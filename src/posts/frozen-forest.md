---
title: frozen forest
date: 2024-02-24
tags: [ "posts" ]
templateEngineOverride: md
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

{{TODO: insert gameplay gif here}}

One feature that I find very cool is the lazy rendering of the environment. Right now you have to click on a tile to
render it, but once this is automatic it should be a cool feature.

{{TODO: insert tile rendering gif here}}

One issue I have with this build is that collidable objects such as trees are very small and don't clearly look
important, which makes player movement awkward.