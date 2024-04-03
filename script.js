const video = document.querySelector("video");
const forBack= document.querySelectorAll(".forBack>i");
const playPause = document.querySelectorAll(".playPause>i");
const insidebar = document.querySelector(".insidebar");
const bar = document.querySelector(".bar");
let width = getComputedStyle(bar).width;
width=Number(width.slice(0,width.length-2));
// video.volume=0;
forBack[0].addEventListener("click",()=>{
    if(video.currentTime>0){
        video.currentTime-=2;
    }
})
forBack[1].addEventListener("click",()=>{
    if(video.currentTime<video.duration){
        video.currentTime+=2;
        if(video.currentTime>=Math.floor(video.duration)){
            playPause[0].classList.toggle("fa-play");
            playPause[0].classList.toggle("fa-pause");
        }
    }
})
function playPaused(){
    if(video.paused===true){
        playPause[0].classList.toggle("fa-play");
        playPause[0].classList.toggle("fa-pause");
        video.play();
    }
    else{
        playPause[0].classList.toggle("fa-play");
        playPause[0].classList.toggle("fa-pause");
        video.pause();
    }
}
playPause[0].addEventListener("click",()=>{
    playPaused();
})
video.addEventListener("timeupdate",()=>{
    if(video.currentTime===video.duration){
        playPause[0].classList.toggle("fa-play");
        playPause[0].classList.toggle("fa-pause");
    }
    insidebar.style.width=`${parseInt(video.currentTime*100/video.duration)}%`;
})
function muteUnmute(){
    if (video.muted===false){
        playPause[1].classList.toggle("fa-volume-high");
        playPause[1].classList.toggle("fa-volume-xmark");
        video.muted=true;
    }
    else{
        playPause[1].classList.toggle("fa-volume-high");
        playPause[1].classList.toggle("fa-volume-xmark");
        video.muted=false;
    }
}
playPause[1].addEventListener("click",()=>{
    muteUnmute();
})
video.addEventListener("click",()=>{
    playPaused();
});
bar.addEventListener("click",(e)=>{
    let value = (((e.layerX+3)*100)/width);
    let result = (video.duration*(value/100));
    video.currentTime=result;
});
function mousemove(e){
    if(e.layerX<=width){
        let value = (e.offsetX*100/width);
        let result = (video.duration*(value/100));
        video.currentTime=result; 
    }
}
function mouseup(){
    document.removeEventListener("mousemove",mousemove);
}
bar.addEventListener("mousedown",(e)=>{
    document.addEventListener("mousemove",mousemove);

})
document.addEventListener("mouseup",mouseup);
// video.addEventListener("mouseenter",(e)=>{
//     console.log(e.target)
// })
// video.addEventListener("mouseleave",(e)=>{
//     console.log(e.target);
// })
// video.addEventListener("mouseover",(e)=>{
//     console.log(e.targe,"mouse over")
// })
// video.addEventListener("mouseout",(e)=>{
//     console.log(e)
// })