let numberOfButtons = document.querySelectorAll(".drum").length;

for(let i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        animateButton(this.innerHTML);
    })
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animateButton(event.key);
});

function makeSound(choice){
    switch(choice){
        case "w": new Audio("sounds/tom-1.mp3").play();
            break;
        case "a": new Audio("sounds/tom-2.mp3").play();
            break;
        case "s": new Audio("sounds/tom-3.mp3").play();
            break;
        case "d": new Audio("sounds/tom-4.mp3").play();
            break;
        case "j": new Audio("sounds/snare.mp3").play();
            break;
        case "k": new Audio("sounds/crash.mp3").play();
            break;
        case "l": new Audio("sounds/kick-bass.mp3").play();
            break;
    }
}

function animateButton(key) {
    let button = document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    },100);
}
// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();
