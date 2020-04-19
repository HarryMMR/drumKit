  var audio = new Audio();

function drumClick(event) {
  var file;
  console.log(this.innerHTML);
  console.log(event.key);
  var key = this.innerHTML || event.key
  addAnimation(key);
  switch (key) {
    case 'w':
      file = 'sounds/crash.mp3';
      break;
    case 'a':
      file = 'sounds/kick-bass.mp3';
      break;
    case 's':
      file = 'sounds/snare.mp3';
      break;
    case 'd':
      file = 'sounds/tom-1.mp3';
      break;
    case 'j':
      file = 'sounds/tom-2.mp3';
      break;
    case 'k':
      file = 'sounds/tom-3.mp3';
      break;
    case 'l':
      file = 'sounds/tom-4.mp3';
      break;
  }

  audio.src = file;
  audio.play();
}

function addAnimation(currentKey) {
  var activeButton = document.querySelector("."  + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

var allButtons = document.querySelectorAll(".drum");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", drumClick);
}

document.addEventListener("keydown", function(event) {
  drumClick(event);
})
