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
})
let item = 0
let randomIndex = 0
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
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB_RGB)
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
let Anzahl_Klicks = 0
basic.forever(function () {
	
})
