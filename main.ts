input.onButtonEvent(Button.A, ButtonEvent.Click, function () {
    serialmp3.playMp3TrackFromFolder(1, Ordner, Mp3Repeat.No)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Ordner += 1
})
input.onButtonEvent(Button.B, ButtonEvent.Click, function () {
    serialmp3.runMp3Command(Mp3Command.PLAY_NEXT_TRACK)
})
serialmp3.onMp3TrackStarted(function () {
    basic.showString("" + (serialmp3.mp3Track()))
})
let Ordner = 0
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.setMp3Volume(30)
Ordner = 1
let Titel = 1
basic.showIcon(IconNames.EigthNote)
