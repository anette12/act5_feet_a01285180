input.onButtonPressed(Button.A, function () {
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    yards = feet / 3
    basic.showNumber(yards)
    basic.showString("Yards")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(feet)
    basic.showString("feet")
    basic.showString("=")
    centimeters = feet * 30.48
    basic.showNumber(centimeters)
    basic.showString("centimeters")
})
input.onButtonPressed(Button.B, function () {
    let inches = 0
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    yards = feet * 12
    basic.showNumber(inches)
    basic.showString("Inches")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(feet)
    basic.showString("feet")
    basic.showString("=")
    centimeters = feet * 30.48
    meters = centimeters / 100
    basic.showNumber(meters)
    basic.showString("meters")
})
let meters = 0
let centimeters = 0
let yards = 0
let feet = 0
feet = randint(1, 100)
basic.forever(function () {
	
})
