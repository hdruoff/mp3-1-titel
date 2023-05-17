input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Ordner += 1
})
mpr121.onTouchSensorTouched(TouchSensor.T1, function () {
    serialmp3.runMp3Command(Mp3Command.PLAY_NEXT_TRACK)
})
serialmp3.onMp3TrackStarted(function () {
    basic.showString("" + (serialmp3.mp3Track()))
})
mpr121.onTouchSensorTouched(TouchSensor.T0, function () {
    serialmp3.playMp3TrackFromFolder(1, Ordner, Mp3Repeat.No)
})
let Ordner = 0
serialmp3.connectSerialMp3(DigitalPin.C17, DigitalPin.C16)
serialmp3.setMp3Volume(30)
Ordner = 1
let Titel = 1
basic.showIcon(IconNames.EigthNote)
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
strip.rotate(1)
strip.show()
basic.pause(50)
basic.forever(function () {
	
})
