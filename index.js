
function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

document.getElementsByClassName("w drum")[0].addEventListener("click", function() {
    playAudio("sounds/tom-1.mp3")
});
document.getElementsByClassName("a drum")[0].addEventListener("click", function() {
    playAudio("sounds/tom-2.mp3")
});
document.getElementsByClassName("s drum")[0].addEventListener("click", function() {
    playAudio("sounds/tom-3.mp3")
});
document.getElementsByClassName("d drum")[0].addEventListener("click", function() {
    playAudio("sounds/tom-4.mp3")
});
document.getElementsByClassName("k drum")[0].addEventListener("click", function() {
    playAudio("sounds/crash.mp3")
});
document.getElementsByClassName("l drum")[0].addEventListener("click", function() {
    playAudio("sounds/kick-bass.mp3")
});
document.getElementsByClassName("j drum")[0].addEventListener("click", function() {
    playAudio("sounds/snare.mp3")
});