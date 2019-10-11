# rpi-touch-ui

A UI app that provides quick information and control of a Raspberry Pi with an LCD touch screen and no keyboard/mouse.

## Features
- Show IP addresses of all network interfaces

## Installing

Install Node.js and yarn on your RPI. Then run:

```bash
git clone https://github.com/mifi/rpi-touch-ui.git
cd rpi-touch-ui
yarn
npm start
```

## Autostart on boot

Can be started by `.xinitrc`:

```
(cd rpi-touch-ui && npm start)
```

## TODO

Implement WIFI control using [node-wifi](https://github.com/friedrith/node-wifi)

![](https://cdn-shop.adafruit.com/1200x900/2097-05.jpg)
