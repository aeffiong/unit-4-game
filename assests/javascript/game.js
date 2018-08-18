// Define variables
var numToMatch = Math.floor(Math.random() *120) +19;
var crystalNumberOne = Math.floor(Math.random() *12) +1;
var crystalNumberTwo = Math.floor(Math.random() *12) +1;
var crystalNumberThree = Math.floor(Math.random() *12) +1;
var crystalNumberFour = Math.floor(Math.random() *12) +1;
// var crystalsArray = [1, 2, 3, 4];
var wins = 0;
var losses = 0;
var score = 0;


// start game function: setting the start screen and adding event listener .ready
$(document).ready(function() {
    $("#random-number").text(numToMatch);
    score = 0;
    $("#user-score").text(score);
    
   

    // for(var i = 0; i < crystalsArray.length; i++) {
    //     crystalsArray[i] = Math.floor(Math.random() *12) +1;
    //     console.log(crystalsArray[i]);
    // }



//   function to reset the game
      function reset() {
        numToMatch = Math.floor(Math.random() *120) +19;
        $("#random-number").text(numToMatch);
        score = 0;
        $("#user-score").text(score);
        crystalNumberOne = Math.floor(Math.random() *12) +1;
        crystalNumberTwo = Math.floor(Math.random() *12) +1;
        crystalNumberThree = Math.floor(Math.random() *12) +1;
        crystalNumberFour = Math.floor(Math.random() *12) +1;
      }

    // on click, add each crystal number to score number, check to see if user score = number to match
    // determine if the user won (guess  = number to match) or lost (guess > number to match)
    $("#crystal1").on("click", function() {
        score = score + crystalNumberOne;
        $("#user-score").text(score);

        if(score === numToMatch) {
            wins++;
            alert("You win!! " + score);
            $("#wins").text("Wins: " + wins);
            reset();
        }
            
    
        else if(score > numToMatch) {
            losses++;
            alert("You lose!! " + score);
            $("#losses").text("Losses: " + losses);
            reset();
            
            
        }
    
    });
    $("#crystal2").on("click", function() {
        score = score + crystalNumberTwo;
        $("#user-score").text(score);

        if(score === numToMatch) {
            wins++;
            alert("You win!! " + score);
            $("#wins").text("Wins: " + wins);
            reset();
        }
    
        else if(score > numToMatch) {
            losses++;
            alert("You lose!! " + score);
            $("#losses").text("Losses: " + losses);
            reset();
        }
       
    });
    $("#crystal3").on("click", function() {
        score = score + crystalNumberThree;
        $("#user-score").text(score);

        if(score === numToMatch) {
            wins++;
            alert("You win!! " + score);
            $("#wins").text("Wins: " + wins);
            reset();
        }
    
        else if(score > numToMatch) {
            losses++;
            alert("You lose!! " + score);
            $("#losses").text("Losses: " + losses);
            reset();
        }
        
    });
    $("#crystal4").on("click", function() {
        score = score + crystalNumberFour;
        $("#user-score").text(score);

        if(score === numToMatch) {
            wins++;
            alert("You win!! " + score);
            $("#wins").text("Wins: " + wins);
            reset();
        }
    
        else if(score > numToMatch) {
            losses++;
            alert("You lose!! " + score);
            $("#losses").text("Losses: " + losses);
            reset();
        }
         
    });

});

