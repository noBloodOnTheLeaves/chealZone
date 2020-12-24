import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.rela-inline');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const removeActive = () =>{
    temp.style.display = 'none';
    playerBtn.forEach(item=> item.classList.remove('active'));
    playerBlock.forEach((item)=>{ item.classList.remove('active')});
};

playerBtn.forEach((playerBtn,i)=>{
    playerBtn.addEventListener('click', () => {
        removeActive();
        playerBtn.classList.add('active');
        playerBlock[i].classList.add('active');
    });  
});

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();