---
package: Debian
_id : debian
---

There are no official Debian packages, yet, but you can easily create your own
.deb package for Peek. First install the build dependencies:

    sudo apt install cmake valac libgtk-3-dev libkeybinder-3.0-dev libxml2-utils gettext txt2man

Then build Peek and package it:

    git clone https://github.com/phw/peek.git
    mkdir peek/build
    cd peek/build
    cmake -DCMAKE_INSTALL_PREFIX=/usr -DGSETTINGS_COMPILE=OFF ..
    make package

This will create the package `peek-1.0.3-Linux.deb`. You can install it with
dpkg:

    sudo dpkg -i peek-1.0.3-Linux.deb
