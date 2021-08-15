var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
// gamePattern.push("red");
// gamePattern.push("blue");
var userClickedPattern = [];
var level = 0;
var started = 0;
var j ;
//----Calling next Sequence only when some key is pressed
$(document).keypress(function(event){
    if(started == 0)
    {
        j = 0;
        nextSequnece();
        console.log(event.key);
        level++;
        $("h1").text("Level " + level);
        started = 1;
    }
});

//------About showing what will be the pattern to the user
var randomNumber;
function nextSequnece(){
    
    randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColours[randomNumber]);
    animate(buttonColours[randomNumber]);
}

// function chaloAnimation()
// {
//     for(var i=0; i<gamePattern.length; i++){
//         animate(i);
//     }
// }

function animate(color){   //this animate is for showing the sequence
        var audio = new Audio("sounds/" + color + ".mp3");
        audio.play();
        $("#" + color).fadeOut(100).fadeIn(100);
}

 //--------------About user clicks
$(document).click(function(event){
    if(event.target.id != "")
    {
        var color = event.target.id;
        userClickedPattern.push(color);
        animatePress(color);
        var audio = new Audio("sounds/" + color + ".mp3");
        audio.play();

        //--- this is the function call to check if the correct color button is pressed.
        checkAnswer(color);
    }
});

function animatePress(color){  //this animate is for showing the button which is pressed
    console.log("#" + color)
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    }, 100);
};

//---the function to check if the correct color button is pressed.
function checkAnswer(color)
{
    console.log("j = " + j);
    // if(color != gamePattern[j])
    // {
    //     $("h1").text("Game over, refresh to restart");
    //     var audio = new Audio("sounds/wrong.mp3");
    //     audio.play();

    //     $("body").addClass("game-over");
    //     setTimeout(function(){
    //         $("body").removeClass("game-over");
    //     }, 100);

    //     j = 0;
    //     gamePattern = [];
    // }


    ////////// lag agye
    if(gamePattern[j] != color)
    {
        $("h1").text("Game over, refresh to restart");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 100);

        j = 0;
        gamePattern = [];
    }

    if(j+1 == gamePattern.length)
    {
        level++;
        $("h1").text("Level " + level);
        j = 0;
        setTimeout(function(){
            nextSequnece()
        }, 1000);
    }
    else
        j++;
}
// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
// audio.play();
// $("#" + randomChosenColour).fadeOut(100).fadeIn(100);