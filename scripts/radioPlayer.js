export const radioPlayerInit = () => {
    const play = document.querySelector('.fa-play');
    const radio = document.querySelector('.radio');
    const radioCover = document.querySelector('.radio-cover');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioSelect = document.querySelector('.player-radio');
    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    console.log(audio);



//Functions

    const changeIconPlay = () =>{
        if(audio.paused){
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-pause');
        }else{
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-pause');
        }
    }
// Events
    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });
    radioStop.addEventListener('click', ()=>{
        if(audio.paused){
            audio.play();
            changeIconPlay();
        }else{
            audio.pause();
            changeIconPlay();
        }
    })


};