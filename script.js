function showMessage() {
    document.getElementById("hidden-message").style.display = "block";
}

function showReplyBox() {
    document.getElementById("reply-box").style.display = "block";
}

function playSound() {
    let audio = new Audio("click-sound.mp3");
    audio.play();
}