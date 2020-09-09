input.onButtonPressed(Button.A, function () {
    basic.showNumber(55)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.NorthEast)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
})
