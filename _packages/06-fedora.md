---
package: Fedora
_id: fedora
---

Fedora 25 users can use this repository:

    sudo dnf config-manager --add-repo http://download.opensuse.org/repositories/home:/Bajoja/Fedora_25/home:Bajoja.repo
    sudo dnf install peek

To install the required `ffmpeg` package you can use the RPM Fusion free
repository, see the
[setup instructions for RPM Fusion](https://rpmfusion.org/Configuration).
Once the repository is enabled install FFmpeg with:

    sudo dnf install ffmpeg

For MP4 recording on GNOME Shell you also need the `gstreamer1-plugins-ugly`
package also available from RPM Fusion free:

    sudo dnf install gstreamer1-plugins-ugly
