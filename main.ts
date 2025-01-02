let tilt = 0
led.plot(0, 0)
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(63)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -100) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        tilt = 1
    } else if (input.acceleration(Dimension.X) > 100) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        tilt = -1
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        tilt = 0
    }
})
loops.everyInterval(100, function () {
    if (tilt != 0) {
        strip.rotate(tilt)
        strip.show()
    }
})
