import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"

const {
    botaoPlay,
    botaoPause,
    botaoStop,
    botaoSet,
    botaoSoundOn,
    botaoSoundOff,
    minutesDisplay,
    secondsDisplay
} = elements

const controls = Controls({
    botaoPause,
    botaoPlay,
    botaoSet,
    botaoStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

botaoPlay.addEventListener('click', function(){
    sound.pressButton()
    controls.play()
    timer.countdown()
})

botaoPause.addEventListener('click', () =>{
    controls.pause()
    timer.hold()
    sound.pressButton()
    
})

botaoStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
    
})

botaoSoundOn.addEventListener('click', () => {
    botaoSoundOn.classList.add('hide')
    botaoSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
})

botaoSoundOff.addEventListener('click', () => {
    botaoSoundOn.classList.remove('hide')
    botaoSoundOff.classList.add('hide')
    sound.bgAudio.play()
})

botaoSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()
    
    if(!newMinutes){
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})