export const radioPlayerInit = () => {
    const play = document.querySelector('.fa-play');
    const radio = document.querySelector('.radio');
    const radioCover = document.querySelector('.radio-cover');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioSelect = document.querySelector('.player-radio');
    const radioTitle = document.querySelector('.radio-header__big');
    const radioVolum = document.querySelector('.radio-volume');
    const radioMute = document.querySelector('.radio-mute');
    const audio = new Audio();

    let prevVolume = audio.volume;

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
    const selectItem = elem =>{
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    }
// Events
    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parrent = target.closest('.radio-item');
        const title = parrent.querySelector('.radio-name').textContent;
        radioTitle.textContent = title;
        selectItem(parrent);
        
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
    radioVolum.addEventListener('input', () =>{
        audio.volume = radioVolum.value / 100;
        audio.muted = false;
    })
    radioMute.addEventListener('click', ()=>{
        audio.muted = !audio.muted;
    })
    radioPlayerInit.stop = () =>{
        audio.pause();
        changeIconPlay();
    }
};