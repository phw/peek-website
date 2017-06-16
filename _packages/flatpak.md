---
package: Flatpak
_id: flatpak
---

Peek can be installed on all distributions supporting [Flatpak](http://flatpak.org/).
To install, either download
[peek-stable.flatpakref](http://flatpak.uploadedlobster.com/peek-stable.flatpakref)
and open it with GNOME Software or install via command line:

    flatpak install --user http://flatpak.uploadedlobster.com/peek-stable.flatpakref

For full functionality you should also install
[xdg-desktop-portal-gtk](https://github.com/flatpak/xdg-desktop-portal-gtk).
Once installed you can run Peek via its application icon in your desktop
environment or from command line:

    flatpak run com.uploadedlobster.peek

To update to the latest version run:

    flatpak update --user com.uploadedlobster.peek

To test the latest development version you can install
[peek-master.flatpakref](http://flatpak.uploadedlobster.com/peek-master.flatpakref)
