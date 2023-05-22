input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (items.length > 0) {
        randomIndex = randint(0, items.length - 1)
        item = items[randomIndex]
        items[randomIndex] = items[items.length - 1]
        items.pop()
        basic.showNumber(item)
    } else {
        basic.showString("Done")
    }
    if (item == 1) {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    } else if (item == 2) {
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    } else if (item == 3) {
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    } else if (item == 4) {
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    } else if (item == 5) {
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    } else if (item == 6) {
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    } else {
        strip.clear()
    }
})
let item = 0
let randomIndex = 0
let strip: neopixel.Strip = null
let items: number[] = []
// Liste mit Zahlen
items = [
1,
2,
3,
4,
5,
6
]
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB_RGB)
strip.setBrightness(100)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(7, neopixel.colors(NeoPixelColors.White))
strip.show()
basic.showString("Starten")
basic.pause(1000)
strip.clear()
basic.forever(function () {
	
})
