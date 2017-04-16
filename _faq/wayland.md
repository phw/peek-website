---
title: Why no native Wayland support?
_id: native-wayland
order: 8
nav_title: Wayland support
---

<p>
Wayland has two restrictions that make it hard for Peek to support Wayland natively:
</p>
<ul>
    <li>The Wayland protocol does not define a standard way for applications to obtain a screenshot. That is intentional, as taking an arbitrary screenshot essentially means any application can read the contents of the whole display, and Wayland strives to offer improved security by isolating applications. It is up to the compositors to provide screenshot capability, and most do. GNOME Shell also provides a public interface for applications to use which Peek does support.</li>
    <li>The Wayland protocol does not provide absolute screen coordinates to the applications. There is not even a coordinate system for windows at all. Again this is intentional, as they are not needed in many cases and you do not need to follow restrictions imposed by the traditional assumption that the screen is a rectangular area (e.g. you can have circular screens or lay out windows in 3D space).</li>
</ul>
<p>Unfortunately the whole concept of the Peek UI is that the window position itself is used to obtain the recording coordinates. That means for now there cannot be any fully native Wayland support without special support for this use case by the compositor.
<br><br>
It is however possible to use Peek in a GNOME Shell Wayland session using XWayland by launching Peek with the X11 backend:
</p>
<pre>
GDK_BACKEND=x11 peek
</pre>
<p>
Support for compositors other than GNOME Shell can be added if a suitable screencasting interface is provided.
</p>