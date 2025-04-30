console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songs=[
    {songName:'Let me Love you', filePath:"1.mp3", coverPath:"1.png"},
    {songName:'Let me Love you', filePath:"1.mp3", coverPath:"1.png"},
    {songName:'Let me Love you', filePath:"songs/1.mp3", coverPath:"1.png"},
    {songName:'Let me Love you', filePath:"songs/1.mp3", coverPath:"1.png"},
    {songName:'Let me Love you', filePath:"songs/1.mp3", coverPath:"1.png"},
    {songName:'Let me Love you', filePath:"songs/1.mp3", coverPath:"1.png"},
    {songName:'Let me Love you', filePath:"songs/1.mp3", coverPath:"1.png"},
    {songName:'Let me Love you', filePath:"songs/1.mp3", coverPath:"1.png"}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeUpdate');
})

console.log("Script loaded");
console.log(masterPlay);