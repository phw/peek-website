---
title: My recorded GIFs flicker, what is wrong?
_id: gif-flicker
order: 3
nav_title: GIFs flicker
---
Some users have experienced recorded windows flicker or other strange visual artifacts only visible in the recorded GIF. This is most likely a video driver issue. If you are using Intel video drivers switching between the SNA and UXA acceleration methods can help. For NVIDIA drivers changing the "Allow Flipping" setting in the NVIDIA control panel <a href="https://github.com/phw/peek/issues/86">was reported to help</a>.