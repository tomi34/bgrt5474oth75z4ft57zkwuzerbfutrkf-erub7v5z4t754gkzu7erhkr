input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    for (let _5ttw = 0; _5ttw <= 4; _5ttw++) {
        for (let indexte45te = 0; indexte45te <= 4; indexte45te++) {
            led.toggle(indexte45te, _5ttw)
            basic.pause(100)
        }
    }
})
