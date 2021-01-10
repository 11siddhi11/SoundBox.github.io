
var divbox = document.getElementsByClassName("mydiv")
console.log(divbox)

var letter=document.querySelectorAll("h1")
console.log(letter)


document.body.addEventListener("keydown", function (e) {
    var mykeycode = e.keyCode;
    switch (mykeycode) {
        case 65:
            var audio = new Audio('sounds/clap.wav')
            audio.play()
            divbox[0].style.boxShadow = "5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[0].style.transform = "scale(1.1)";
            letter[0].style.textShadow="2px 2px 4px black";
            letter[0].style.color="crimson";
            

            break;
        case 83:
            var audio = new Audio('sounds/hihat.wav')
            audio.play()
            divbox[1].style.boxShadow = "5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[1].style.transform = "scale(1.1)";

            letter[1].style.textShadow="2px 2px 4px black";
            letter[1].style.color="crimson";

            break;
        case 68:
            var audio = new Audio('sounds/kick.wav')
            audio.play()
            divbox[2].style.boxShadow = "5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[2].style.transform = "scale(1.1)";

            letter[2].style.textShadow="2px 2px 4px black";
            letter[2].style.color="crimson";
            break;
        case 70:
            var audio = new Audio('sounds/openhat.wav')
            audio.play()
            divbox[3].style.boxShadow = "5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[3].style.transform = "scale(1.1)";

            letter[3].style.textShadow="2px 2px 4px black";
            letter[3].style.color="crimson";
            break;

        case 71:
            var audio = new Audio('sounds/boom.wav')
            audio.play()
            divbox[4].style.boxShadow = "5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[4].style.transform = "scale(1.1)";

            letter[4].style.textShadow="2px 2px 4px black";
            letter[4].style.color="crimson";
            break;
        case 72:
            var audio = new Audio('sounds/ride.wav')
            audio.play()
            divbox[5].style.boxShadow = "5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[5].style.transform = "scale(1.1)";

            letter[5].style.textShadow="2px 2px 4px black";
            letter[5].style.color="crimson";
            break;
        case 74:
            var audio = new Audio('sounds/snare.wav')
            audio.play()
            divbox[6].style.boxShadow = "5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[6].style.transform = "scale(1.1)";

            letter[6].style.textShadow="2px 2px 4px black";
            letter[6].style.color="crimson";
            break;

        case 75:
            var audio = new Audio('sounds/tom.wav')
            audio.play()
            divbox[7].style.boxShadow = "5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[7].style.transform = "scale(1.1)";

            letter[7].style.textShadow="2px 2px 4px black";
            letter[7].style.color="crimson";
            break;
        case 76:
            var audio = new Audio('sounds/tink.wav')
            audio.play()
            divbox[8].style.boxShadow = " 5px 5px 7px black ,5px 5px 7px 5px crimson";
            divbox[8].style.transform = "scale(1.1)";

            letter[8].style.textShadow="2px 2px 4px black";
            letter[8].style.color="crimson";
            break;

        default:
            break;
    }
})

var btnkeys=[65,83,68,70,71,72,74,75,76];
document.body.addEventListener("keyup",function(e){
     
    for(i=0;i<btnkeys.length;i++){
        if(e.keyCode===btnkeys[i]){
            divbox[i].style.transform="scale(1.0)";
            divbox[i].style.boxShadow="";

            letter[i].style.textShadow="";
            letter[i].style.color="black"
        }
    }

})
