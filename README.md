# linux-package-checker
## Overview 
`linux-package-checker` is a simple Node.js module that allows you to determine the package manager being used on your current Linux distribution. 
## Installation 
`linux-package-checker` can be installed using npm: ``` npm install linux-package-checker ``` 
## Usage 
```Javascript 
// Returns the package manager for the current distribution
const getPackageManager = require('linux-package-checker');
console.log(getPackageManager()); // apt 
``` 
## Supported Distributions 
This module currently supports the following Linux distributions and corresponding package managers: 
- Ubuntu: `apt` 
- Debian: `apt` 
- Fedora: `dnf` 
- CentOS: `yum` 
- Red Hat Enterprise Linux: `yum` 
- OpenSUSE Leap: `zypper` 
- openSUSE: `zypper` 
- Arch Linux: `pacman` 
- Gentoo: `emerge` 
- FreeBSD: `pkg` 
- NetBSD: `pkgsrc` 
- OpenBSD: `pkg_add` 
## Contributing 
If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request on GitHub. 
## License 
`linux-package-checker` is licensed under the MIT License. See the LICENSE file for more details.