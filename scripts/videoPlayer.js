export const videoPlayerInit = () => {
    //video-player
    //video-button__play
    //video-button__stop
    //video-time__passed
    //video-progress
    //video-time__total
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoTimeTotal = document.querySelector('.video-time__total');
    const videoVolume = document.querySelector('.video-volume');
    const videoVolumeMute = document.querySelector('.fa-volume-down');
    const videoFullScreen = document.querySelector('.video-fullscreen');

    
    const toggleIcon = () => {
        if(videoPlayer.paused){
           videoButtonPlay.classList.remove('fa-pause');
           videoButtonPlay.classList.add('fa-play');
        }else{
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
            
            
        }
    }

    const togglePlay = () => {
            
            if(videoPlayer.paused){
                videoPlayer.play();
            }else{
                videoPlayer.pause();
            }
            toggleIcon();
    }

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
    const changeValue = () =>{
        const valueVolume = videoVolume.value;
        videoPlayer.volume = valueVolume / 100;
    }
    const addZero = n => n < 10 ? '0' + n : n;
    
    
    videoPlayer.addEventListener('click', togglePlay); // == videoPlayer.addEventListener('play', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay); // == videoButtonPlay.addEventListener('pause', togglePlay);
    videoButtonStop.addEventListener('click', stopPlay);
    videoPlayer.addEventListener('timeupdate', () =>{
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secodPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secodTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secodPassed); // `${addZero(minutePassed)}:addZero(secodPassed)}`
        videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secodTotal);
    });

    videoProgress.addEventListener('input', () =>{
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    });
    videoVolume.addEventListener('input', changeValue);
    videoVolumeMute.addEventListener('click', () =>{
        if(videoPlayer.volume !== 0){
            localStorage.setItem('volumeLast', videoVolume.value);
            videoVolumeMute.classList.remove('fa-volume-down');
            videoVolumeMute.classList.add('fa-volume-off');
            videoPlayer.volume = 0;
        }else{
            videoPlayer.volume = localStorage.getItem('volumeLast') / 100;
            videoVolumeMute.classList.remove('fa-volume-off');
            videoVolumeMute.classList.add('fa-volume-down');
            
        }
        
    });
    videoFullScreen.addEventListener('click', () => {
        videoPlayer.requestFullscreen();
    });
    videoPlayer.addEventListener('fullscreenchange',()=>{
        if(document.fullscreen){
            videoPlayer.controls = true;
        }else{
            videoPlayer.controls = false;
        }
        if(document.fullscreenElement){
            videoPlayer.removeEventListener('click', togglePlay);
            videoPlayer.removeEventListener('click', togglePlay);
        }else{
            videoPlayer.addEventListener('click', togglePlay);
            videoButtonPlay.addEventListener('click', togglePlay);  
        }
    })
    videoPlayer.addEventListener('volumechange', () =>{ 
        videoVolume.value = Math.round(videoPlayer.volume * 100);
    })
    videoPlayerInit.stop = () =>{
        videoPlayer.pause();
        toggleIcon();
    }

}