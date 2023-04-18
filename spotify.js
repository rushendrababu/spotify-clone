console.log("welcome to spotify");

//initialize the variables

let songIndex = 0;
let audioElement = new Audio('agartum.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "agartum", songPath: "agartum.mp3", coverPath:"montare.jpg"},
    {songName: "rataan", songPath:"rataan.mp3", coverPath:"montare.jpg"},
    {songName: "fevicolse", songPath:"fevicolse.mp3", coverPath:"montare.jpg"},
    {songName: "kajrahre", songPath: "kajrahre.mp3", coverPath:"montare.jpg"},
    {songName: "khabijo", songPath:"kabhijo.mp3", coverPath:"montare.jpg"},
    {songName: "phirbhi", songPath:"phirbhi.mp3", coverPath:"montare.jpg"},
    {songName: "aedilhai", songPath:"aedilhai.mp3", coverPath:"montare.jpg"},
    {songName: "bulleya", songPath:"bulleya.mp3", coverPath:"montare.jpg"},
    {songName: "chennameraya", songPath:"chennameraya.mp3", coverPath:"montare.jpg"},
    {songName: "kabira", songPath:"kabira.mp3", coverPath:"montare.jpg"},
    {songName: "milnehai", songPath:"milne.mp3", coverPath:"montare.jpg"}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;

})


//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timupdate');
    //update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);
    })
})

const makesongplay = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element)=>
{
    element.addEventListener('click', (e)=>{
        makesongplay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src =songs[songIndex].songPath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        console.log("hbejx");
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src =songs[songIndex].songPath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =songs[songIndex].songPath;
    masterSongName.innerText = songs[songIndex+1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

