var buttonsNumber = document.querySelectorAll(".drum").length;

for (i = 0; i < buttonsNumber ; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function(e) {
        var buttonInnerHTML = e.target.textContent;
        document.querySelector("." + String(buttonInnerHTML)).classList.add('hidden-class');
        setTimeout(() => {
            document.querySelector("." + String(buttonInnerHTML)).classList.remove('hidden-class');      
            }, 500)
        playSound(buttonInnerHTML)
    });
}


document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    document.querySelector("." + String(keyPressed)).classList.add('hidden-class');
    setTimeout(() => {
        document.querySelector("." + String(keyPressed)).classList.remove('hidden-class');      
        }, 500)
    playSound(keyPressed)
    });


function playSound(location) {
    switch (location){
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        default:
            break;
    }
}