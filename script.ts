const photo =
    document.getElementById("photo") as HTMLImageElement;

const changeImageBtn =
    document.getElementById("changeImageBtn") as HTMLButtonElement;

const images: string[] = [
    "https://picsum.photos/400/200?1",
    "https://picsum.photos/400/200?2",
    "https://picsum.photos/400/200?3"
];

let currentImage: number = 0;

changeImageBtn.onclick = () => {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    photo.src = images[currentImage]!;
};

const audioPlayer =
    document.getElementById("audioPlayer") as HTMLAudioElement;

const playAudioBtn =
    document.getElementById("playAudioBtn") as HTMLButtonElement;

const pauseAudioBtn =
    document.getElementById("pauseAudioBtn") as HTMLButtonElement;

playAudioBtn.onclick = () => {
    audioPlayer.play();
};

pauseAudioBtn.onclick = () => {
    audioPlayer.pause();
};

const videoPlayer =
    document.getElementById("videoPlayer") as HTMLVideoElement;

const playVideoBtn =
    document.getElementById("playVideoBtn") as HTMLButtonElement;

const stopVideoBtn =
    document.getElementById("stopVideoBtn") as HTMLButtonElement;

const videoTime =
    document.getElementById("videoTime") as HTMLParagraphElement;

playVideoBtn.onclick = () => {
    videoPlayer.play();
};

stopVideoBtn.onclick = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
};

videoPlayer.ontimeupdate = () => {
    videoTime.textContent =
        "Время: " + Math.floor(videoPlayer.currentTime);
};