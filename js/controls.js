export default function Controls({
    botaoPlay,
    botaoPause,
    botaoStop,
    botaoSet
}){

    function play(){
        botaoPlay.classList.add("hide")
        botaoPause.classList.remove("hide")
        botaoSet.classList.add("hide")
        botaoStop.classList.remove("hide")
    }

    function pause(){
        botaoPause.classList.add('hide')
        botaoPlay.classList.remove('hide')
    }

    function reset(){
        botaoPlay.classList.remove('hide')
        botaoStop.classList.add('hide')
        botaoPause.classList.add('hide')
        botaoSet.classList.remove('hide')
    }

    function getMinutes(){
        let newMinutes = prompt('quantos minutos?')
        if(!newMinutes){
            return false
        }

        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}


