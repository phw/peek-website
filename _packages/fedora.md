---
package: Fedora
_id: fedora
---

Fedora 25 users can use this repository:
```
sudo dnf config-manager --add-repo http://download.opensuse.org/repositories/home:/Bajoja/Fedora_25/home:Bajoja.repo
sudo dnf install peek -y
```
To install the required ffmpeg package you can use the RPM Fusion free
repository, see the
[setup instructions for RPM fusion](https://rpmfusion.org/Configuration).
Once the repository is enabled install ffmpeg with:
```
sudo dnf install ffmpeg
```
