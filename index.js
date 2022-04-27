var btns = document.getElementsByTagName("button");

var audio = new Audio("sounds/tom-1.mp3");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var content = this.innerHTML;
    sound(content);
    buttonAnimation(content);
  });
}


document.addEventListener("keydown" , function(){
    sound(event.key);
    buttonAnimation(event.key);
});

function sound(key){
    var audio;

    switch (key) {
        case "w": audio = new Audio("sounds/crash.mp3");
                  audio.play();
          break;
        case "a": audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
          break;
        case "s": audio = new Audio("sounds/snare.mp3");
        audio.play();
          break;
        case "d": audio = new Audio("sounds/tom-1.mp3");
        audio.play();
          break;
        case "j": audio = new Audio("sounds/tom-2.mp3");
        audio.play();
          break;
        case "k": audio = new Audio("sounds/tom-3.mp3");
        audio.play();
          break;
        case "l": audio = new Audio("sounds/tom-4.mp3");
        audio.play();
          break;
      }

}

function buttonAnimation(key){

    var btn = document.querySelector("." + key);
    btn.classList.add("pressed");

    setTimeout(() => {
        btn.classList.remove("pressed");
        
    }, 100);

    
}
