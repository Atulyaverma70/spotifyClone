console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItems'))

let songs=[
    {songName:'Let me Love you', filePath:"songs/1.mp3", coverPath:"1.png"},
    {songName:'Trap Cartel', filePath:"songs/2.mp3", coverPath:"2.png"},
    {songName:'They mad', filePath:"songs/3.mp3", coverPath:"3.png"},
    {songName:'Rick the kid', filePath:"songs/4.mp3", coverPath:"4.png"},
    {songName:'Farji song', filePath:"songs/5.mp3", coverPath:"5.png"},
    {songName:'Back it up', filePath:"songs/6.mp3", coverPath:"6.png"},
    {songName:'aise he song', filePath:"songs/7.mp3", coverPath:"7.png"},
    {songName:'True Love Intesteller', filePath:"songs/9.mp3", coverPath:"9.png"},
    {songName:'True Love Intesteller', filePath:"songs/10.mp3", coverPath:"10.png"}
];

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;

    }else{ 
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
})  
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
    })
})