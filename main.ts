let speed = 0
let tilt = 0
led.plot(0, 0)
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(63)
strip.showRainbow(1, 360)
loops.everyInterval(50, function () {
    if (tilt != 0) {
        strip.rotate(tilt * speed)
        strip.show()
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -100) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . #
            . # . . .
            . . # . .
            `)
        tilt = 1
    } else if (input.acceleration(Dimension.X) > 100) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # . . . #
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
    speed = Math.round(Math.sqrt(Math.constrain(Math.abs(input.acceleration(Dimension.X)), 100, 900) / 100))
    if (speed == 2) {
        led.plot(1, 2)
        led.plot(3, 2)
    } else if (speed == 1) {
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
    }
})
