---
layout: post
date: 2019-07-09 21:54:19 +0530
title: Manjaro Linux
tags:
- linux
- manjaro
categories: linux
meta:
  image: "/media/manjaro-logo.png"

---
Manjaro Linux is an [Arch-based](https://en.wikipedia.org/wiki/Category:Arch-based_Linux_distributions) Linux distribution available for free to download. It's lightweight, user-friendly distribution popular among Linux newbies. As it's Arch-based, it uses [pacman package manager](https://wiki.archlinux.org/index.php/pacman) for managing packages. It also ships with a graphical package manager called [pamac](https://wiki.manjaro.org/index.php/Pamac).

Manjaro comes with many popular [Desktop Environments](https://manjaro.org/download/) like Gnome, KDE, XFCE, Deepin, OpenBox etc. Some are official and others are community-maintained.

It comes with a lot of pre-installed apps which I don't really like. There are some applications in my system which are completely alien to me. I have no idea what they do. This maybe good for some users.

Manjaro works great with XFCE desktop environment on low-end  systems. I've run it with KDE, XFCE and and LXDE. And all of them work really well with it. Suggestion: Don't go for KDE if you're on a low-end device. It needs a lot of system-resources to run properly.

Manjaro have three software branches _viz_  _Unstable_, _Testing_, _Stable_. By default, one uses stable repository. You can change it easily:

```sh
sudo pacman-mirrors --api --set-branch {branch}
```

Then update your system using the following command:

```sh
sudo pacman-mirrors --fasttrack 5 && sudo pacman -Syyu
```

Additionally, you could take advantage of **A**rch **U**ser **R**epository(AUR) if you want. To use AUR, install an AUR helper and you are good to go! Here's the [relevant resource](https://wiki.manjaro.org/index.php/Arch_User_Repository) for the same.

You could do almost everything graphically in Manjaro! 

I've been using Manjaro for around 7 months and it's time to say Hello to [Debian](https://www.debian.org)! Yeah, `apt install` instead of `pacman -S` 😂

Honestly, I enjoyed using Manjaro. It's a fantastic distro for anyone who want to try out an Arch-based distribution! And I would definitely recommend it!