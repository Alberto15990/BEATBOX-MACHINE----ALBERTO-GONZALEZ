let beats = {
    "a": {
        beat: "./sounds/a.wav",
        color: "#FFFFFF"
    },
    "s": {
        beat: "./sounds/s.wav",
        color: "#FFFFFF"
    },
    "d": {
        beat: "./sounds/d.wav",
        color: "#FFFFFF"
    },
    "f": {
        beat: "./sounds/f.wav",
        color: "#FFFFFF"
    },
    "g": {
        beat: "./sounds/g.wav",
        color: "#FFFFFF"
    },
    "h": {
        beat: "./sounds/l.mp3",
        color: "#FFFFFF"
    },
    "j": {
        beat: "./sounds/j.mp3",
        color: "#FFFFFF"
    },
    "k": {
        beat: "./sounds/k.mp3",
        color: "#FFFFFF"
    },
    "l": {
        beat: "./sounds/l.mp3",
        color: "#FFFFFF"
    }
}


const playBeat = (buttonKey) => {
    let audioSource = beats[buttonKey].beat
    let audio = new Audio(audioSource)
    audio.currentTime = 0
    audio.play()

}


document.addEventListener("keydown", (event) => {
    playBeat(event.key)
    onButtonPress(event.key)
})

const onButtonPress = (buttonKey) => {
    let element = document.getElementById(buttonKey);
    element.style.backgroundColor = beats[buttonKey].color;
    element.style.boxShadow = `0px 0px 17px 0px ${beats[buttonKey].color}`;
    element.addEventListener("transitionend", () => {
        element.style.backgroundColor = "";
        element.style.boxShadow = "none";
    })
}



