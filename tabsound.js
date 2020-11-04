/* old method
var audio = $("#tabsound")[0];
$("#tab").mouseenter(function () {
    audio.play();
}); 

//Defining variable based on unique ID

var audio = document.getElementById("tabaudio");

//Example of an HTML Audio/Video Method

function playAudio() {
    audio.play;
} */

function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play()
}