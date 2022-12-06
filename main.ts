input.onPinPressed(TouchPin.P2, function () {
    music.setVolume(music.volume() + 50)
    if (music.volume() >= 200) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (music.volume() >= 150) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (music.volume() >= 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (music.volume() >= 50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    music.setVolume(music.volume() - 50)
    if (music.volume() >= 200) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (music.volume() >= 150) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (music.volume() >= 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (music.volume() >= 50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
music.setVolume(100)
basic.showIcon(IconNames.Heart)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
