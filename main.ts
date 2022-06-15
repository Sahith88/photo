let top_left = pins.digitalReadPin(DigitalPin.P0)
let bottom_left = pins.digitalReadPin(DigitalPin.P1)
let bottom_right = pins.digitalReadPin(DigitalPin.P2)
let top_right = pins.digitalReadPin(DigitalPin.P3)
let degree2 = 0
let degree = 0
basic.forever(function () {
    if ((top_right && bottom_right) < 800) {
        while ((top_right && bottom_right) < 800) {
            ServoBit.moveServo(0, degree, 60)
            degree += -1
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    if ((top_left && bottom_left) < 800) {
        while ((top_right && top_left) < 800) {
            ServoBit.moveServo(0, degree, 60)
            degree += 1
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    if ((bottom_right && bottom_left) < 800) {
        while ((bottom_right && bottom_left) < 800) {
            ServoBit.moveServo(1, degree2, 60)
            degree2 += 1
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        if ((top_left && top_right) < 800) {
            while ((top_left && top_right) < 800) {
                ServoBit.moveServo(1, degree2, 60)
                degree2 += -1
                basic.pause(100)
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    . . . . .
                    `)
            }
        }
    }
    if ((top_left && top_right && (bottom_right && bottom_left)) > 800) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
