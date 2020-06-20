input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.ForeverInBackground)
    basic.showString("my best friend")
    basic.showIcon(IconNames.Heart)
})
