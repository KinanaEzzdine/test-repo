document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("birthdaySong");
    const playButton = document.getElementById("playMusic");

    playButton.addEventListener("click", function() {
        audio.currentTime = 49; // Jump to 00:48
        audio.play();
        playButton.style.display = "none"; // Hide button after playing
    });
});

