let drumlength=$(".drum").length;

for (let i = 0; i < drumlength; i++) {
    $(".drum")[i].addEventListener("click", function(){
        let btn=this.innerHTML;
        call(btn);
        buttonAnimation(btn);
    });    
}

$(document).keydown(function(e){
    call(e.key);
    buttonAnimation(e.key);
});

function call(key) {      
        switch (key) {
            case 'w':
                var audio= new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            
            case 'a':
                var audio= new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
        
            case 's':
                var audio= new Audio("./sounds/snare.mp3");
                audio.play();
                break;
        
            case 'd':
                var audio= new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
        
            case 'j':
                var audio= new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
        
            case 'k':
                var audio= new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;

            case 'l':
                var audio= new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;          
            default:         
        }
    }

function buttonAnimation(key){
    let activebtn=document.querySelector("."+key);
    activebtn.classList.add("pressed");
    setTimeout(function() {
        activebtn.classList.remove("pressed");
    },100);
}