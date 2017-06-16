---
title: How can I capture mouse clicks and/or key strokes?
_id: mouse
order: 1
nav_title: Mouse clicks
---

Peek does not support this natively. But you could install an external tool like <a href="https://github.com/critiqjo/key-mon">key-mon</a> which is usually included in most distributions, so you can easily install with your package manager. Then start key-mon with <code>key-mon --visible_click</code>. The <code>--visible_click</code> option is for drawing small circles around mouse clicks.