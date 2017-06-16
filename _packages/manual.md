---
package: Manual installation
_id: manual
---

You can build and install Peek using CMake:

    git clone https://github.com/phw/peek.git
    mkdir peek/build
    cd peek/build
    cmake -DCMAKE_INSTALL_PREFIX=/usr ..
    make

    # Run directly from source
    ./peek

    # Install system wide
    sudo make install

You can uninstall Peek again by running `sudo make uninstall` from within the
build directory.
