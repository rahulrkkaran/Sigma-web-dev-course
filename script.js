console.log('lets write javascript')
let currentSong = new Audio(); 


function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    return formattedMinutes + ':' + formattedSeconds;
}

// Example usage:
console.log(convertSecondsToMinutes(12)); // Output: "00:12"
console.log(convertSecondsToMinutes(125)); // Output: "02:05"

async function getSongs(){
    let a= await fetch("http://127.0.0.1:3000/songs/")
let response = await a.text();
let div = document.createElement("div")
div.innerHTML= response;
let as = div.getElementsByTagName("a")
let songs = []
for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endswith(".mp3")) {
        songs.push(element.href.split("/songs/")[1])
    }
         }
         return songs
}
const playMusic = (track,pause=false) =>{
// let audio = new Audio("/songs/"+track)
currentSong.currentSrc="/songs/"+track
if(!pause){
    currentSong.play()
}
currentSong.play()
 play.src = "pause.svg"
 document.querySelector(".songinfo").innerHTML = decodeURI(track)
 document.querySelector(".songtime").innerHTML  = "00:00 / 00:00"
}
async function main() {    
    let songs = await getSongs()
    playMusic(songs[0],true)
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + '<li><img class="invert" width="34" src="music.svg" alt="">
        <div class="info">
            <div> ${song.replaceall("%20%"," ")}</div>
            <div>Harry</div>
             </div>
             <div class="playnow">
                <span>Play Now</span>
                <img class="invert" src="Play.svg" alt="">
             </div> </li>'; 
    }
Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click", element=>{
       console.log(e.querySelector(".info").firstElementChild.innerHTML)  
      playMusic(e.querySelector("info").firstElementChild.innerHTML.trim())  
    })
})
play.addEventListener("click", ()=> {
    if(currentSong.paused){
        currentSong.play()
        play.src = "pause.svg"
    }
    else{
        currentSong.pause()        
        play.src= "play.svg"
    }
})

currentSong.addEventListener("timeupdate", ()=>{
console.log(currentSong.currentTime,currentSong.duration);
document.querySelector(".songtime").innerHTML = '${secondsTominutesSeconds(currentSong.currentTime)}/${secondsTominutesSeconds(currentSong.duration)}'
document.querySelector("circle").style.left= (currentSong.currentTime/currentSong.duration)*100+"%";
})

document.querySelector(".seekbar").addEventListener("click",e=>{
    let percent =(e.offsetX/e.target.getBoundingClientRect().width)*100;
 document.querySelector(".circle").style.left=percent+"%";
currentSong.currentTime=((currentSong.duration)*percent)/100

})






}
  main()
   