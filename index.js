const distroName = require('child_process').execSync('lsb_release -si').toString().trim();

const distros = {
  Ubuntu: "apt",
  Debian: "apt",
  Fedora: "dnf",
  CentOS: "yum",
  "Red Hat Enterprise Linux": "yum",
  "OpenSUSE Leap": "zypper",
  openSUSE: "zypper",
  "Arch Linux": "pacman",
  Gentoo: "emerge",
  FreeBSD: "pkg",
  NetBSD: "pkgsrc",
  OpenBSD: "pkg_add",
};

/**
 * This function returns the package manager for the current distro
 * @returns {string} The package manager for the current distro
 * @example
 * const packageManager = getPackageManager();
 */
function getPackageManager() {
  return distros[distroName];
}

module.exports = getPackageManager;