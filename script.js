var photo = document.getElementById("photo");
var changeImageBtn = document.getElementById("changeImageBtn");
var images = [
    "https://picsum.photos/400/200?1",
    "https://picsum.photos/400/200?2",
    "https://picsum.photos/400/200?3"
];
var currentImage = 0;
changeImageBtn.onclick = function () {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    photo.src = images[currentImage];
};
var audioPlayer = document.getElementById("audioPlayer");
var playAudioBtn = document.getElementById("playAudioBtn");
var pauseAudioBtn = document.getElementById("pauseAudioBtn");
playAudioBtn.onclick = function () {
    audioPlayer.play();
};
pauseAudioBtn.onclick = function () {
    audioPlayer.pause();
};
var videoPlayer = document.getElementById("videoPlayer");
var playVideoBtn = document.getElementById("playVideoBtn");
var stopVideoBtn = document.getElementById("stopVideoBtn");
var videoTime = document.getElementById("videoTime");
playVideoBtn.onclick = function () {
    videoPlayer.play();
};
stopVideoBtn.onclick = function () {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
};
videoPlayer.ontimeupdate = function () {
    videoTime.textContent =
        "Время: " + Math.floor(videoPlayer.currentTime);
};
