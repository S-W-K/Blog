---
title: 'How to simulate macOS HiDPI on a non-retina display'
date: 2020-11-14
categories: OS
tags: [macOS]
---

Many of you may have the problem that Mac Devices have a terrible display with blurry fonts when connected to an external monitor. To improve the display, we need to simulate the macOS HiDPI on a non-retina display. This article will show you how to do that.

{% note warning %}

It seems Big Sur has tighten up files permissions. The old way of disabling SIP can't modify system files anymore. But in fact, you can change HiDPI without SIP, [mlch911](https://github.com/mlch911) has modified the script to make it work.  

{% endnote %}

> Change **Run the script**'s command  `bash -c "$(curl -fsSL https://raw.githubusercontent.com/xzhih/one-key-hidpi/master/hidpi.sh)"` to `bash -c "$(curl -fsSL https://raw.githubusercontent.com/mlch911/one-key-hidpi/master/hidpi.sh)" `.  Due to the policy of Big Sur, we no longer have access right to `/System/Library`, [mlch911](https://github.com/mlch911) just modified the  the path in the original script to `/Library` . 

## ~~Disable SIP(System Integrity Protection) in OS X~~

<!-- more -->

1. Turn off your Mac (Apple > Shut Down).
2. Hold down Command-R and press the Power button. Keep holding Command-R until the Apple logo appears.
3. Wait for OS X to boot into the OS X Utilities window.
4. Choose Utilities > Terminal.
5. Enter `csrutil disable`.
6. Enter reboot.

By the way, restoring the setting is the same procedure, just change 5's command to `csrutil enable`

## Run the script

Thanks to [xzhih](https://github.com/xzhih) for providing such a handy script! All we need to do is to run the script like this:

```shell
bash -c "$(curl -fsSL https://raw.githubusercontent.com/xzhih/one-key-hidpi/master/hidpi.sh)"
```

<img src="https://raw.githubusercontent.com/xzhih/one-key-hidpi/master/img/run.jpg" style="zoom: 50%;" />

## Install RDM

[RDM](https://github.com/avibrazil/RDM) is a tool that lets you use MacBook Pro Retina's highest and unsupported resolutions. Download link is [here](http://avi.alkalay.net/software/RDM/).

<img src="https://cloud.githubusercontent.com/assets/3484242/7100316/255a7d74-dff0-11e4-9bf9-16e726336e29.png" style="zoom:80%;" />

You should prefer resolutions marked with ⚡️ (lightning), which indicates the resolution is HiDPI or 2× or more dense in pixels.

## The end 

This is all. Enjoy your high resolution.

