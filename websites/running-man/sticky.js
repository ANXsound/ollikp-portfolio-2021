const video = document.getElementById('myvideo')

document.addEventListener("mousewheel", MouseWheelHandler, false);

// Start in the middle
video.currentTime = 0;

var scheduledAnimationFrame;
var delta;

let currentTime = 0;
let oldDelta = 0;
function readAndUpdatePage(d){
  currentTime =  Math.max(0, currentTime + delta * 0.1);
   video.currentTime = currentTime;
  
  scheduledAnimationFrame = false;
}

function MouseWheelHandler(e) {
  var e = window.event || e;
  delta = e.wheelDelta/-50;//Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
   if (scheduledAnimationFrame){
    return;
  }
  
  scheduledAnimationFrame = true;
  
  // Can't use RAF - 60 FPS is too fast.
  setTimeout(readAndUpdatePage,1000/30);
  return false;
}