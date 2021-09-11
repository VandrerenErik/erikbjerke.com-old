var myAudio = document.getElementById("audio");
var toggle_audio = document.getElementById("toggle_audio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  toggle_audio.innerHTML = "Pause Music"
};
myAudio.onpause = function() {
  isPlaying = false;
  toggle_audio.innerHTML = "Play Music"
};
