//THIS IS A COMMENT

//GLOBAL SCOPE DO NOT TOUCH!!!

const blue = new Audio();
blue.src = "./Blue.mp3";

const karenAudio = new Audio();
karenAudio.src = "./Mom.mp3";

//END OF GLOBAL SCOPE

function downloadFile() {

 const url = "./ChangeingSeasons.mp3";
  const filename = "ChangeingSeasons.mp3";
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
}

function blueUI() {
  document.body.style.backgroundImage = "url('')";
  const change = document.getElementById("modPic");
  change.src = "./art_greg.jpg";
  blue.play();
  var body = document.body;
  body.style.backgroundColor = "black";
  const elements = document.querySelectorAll('*');
for (let i = 0; i < elements.length; i++) {
elements[i].style.color = "blue";
}
}

function greenUI() {
  document.body.style.backgroundImage = "url('')";
  var change = document.getElementById("modPic");
  change.src = "./backyardigans.gif";
  var body = document.body;
  body.style.backgroundColor = "black";
  const elements = document.querySelectorAll('*');
for (let i = 0; i < elements.length; i++) {
elements[i].style.color = "lime";
}
}

function karenUI() {
  document.body.style.backgroundImage = "url('karen.jpg')";
  karenAudio.play();
    const elements = document.querySelectorAll('*');
for (let i = 0; i < elements.length; i++) {
elements[i].style.color = "hotpink";
}
}

function redReboot () {
  blue.pause();
  karenAudio.pause();
  const elements = document.querySelectorAll('*');
  document.body.style.backgroundImage = "url('')";
  var change = document.getElementById("modPic");
  change.src = "./beep.jfif";
  var body = document.body;
  body.style.backgroundColor = "black";
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
    }
    red_reboot();

}
    
let i = -1;


    function red_reboot() {
        if (i != -1)
            i = -1;
        else i = 0;
   
        let c;
        requestAnimationFrame(c = () => {
            if (i == -1) {
                document.body.style.backgroundColor = ""
                return;
            }
   
            i++;
            document.body.style.backgroundColor = (i & 1) ? "#f00" : ""
   
            requestAnimationFrame(c);
        });

}

function deboot () {
  blue.pause();
  karenAudio.pause();
}