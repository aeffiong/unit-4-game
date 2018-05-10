// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.

// Define variables
var numToMatch = Math.floor(Math.random() *120) +19;
var crystalNumberOne = Math.floor(Math.random() *12) +1;
var crystalNumberTwo = Math.floor(Math.random() *12) +1;
var crystalNumberThree = Math.floor(Math.random() *12) +1;
var crystalNumberFour = Math.floor(Math.random() *12) +1;
var wins = 0;
var losses = 0;
var score = 0;
// var crystals = $("#crystals-spot");
// console.log(crystalNumbers);
// var numberChoices = crystalNumbers[Math.floor(Math.random() *12) +1];
// console.log(numberChoices);

// var crystalAdder = crystalNumberOne + crystalNumberTwo + crystalNumberThree + crystalNumberFour;
// console.log(crystalAdder);


$(document).ready(function() {
    $("#random-number").text(numToMatch);
    score = 0;
    $("#user-score").text(score);
    
    // $(".crystal").text(crystalNumbers);
    // $("#crystal2").text(crystalNumbers);
    // $("#crystal3").text(crystalNumbers);
    // $("#crystal4").text(crystalNumbers);

    // for(var i = 0; i < crystalNumbers.length; i++) {
        // var crystalInfo = $(".crystals");
        // // crystal.addClass("crystal-image");

        // crystalInfo.attr("data-crystalvalue", crystalNumbers[i]);
        // // console.log(crystalNumbers[i]);
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

    // on click, add crystal number to score number
    $("#crystal1").on("click", function() {
        score = score + crystalNumberOne;
        $("#user-score").text(score);

        if(score === numToMatch) {
            wins++;
            alert("You win!!");
            $("#wins").text("Wins: " + wins);
            reset();
        }
            
    
        else if(score > numToMatch) {
            losses++;
            alert("You lose!!");
            $("#losses").text("Losses: " + losses);
            reset();
            
            
        }
    
    });
    $("#crystal2").on("click", function() {
        score = score + crystalNumberTwo;
        $("#user-score").text(score);

        if(score === numToMatch) {
            wins++;
            alert("You win!!");
            $("#wins").text("Wins: " + wins);
            reset();
        }
    
        else if(score > numToMatch) {
            losses++;
            alert("You lose!!");
            $("#losses").text("Losses: " + losses);
            reset();
        }
       
    });
    $("#crystal3").on("click", function() {
        score = score + crystalNumberThree;
        $("#user-score").text(score);

        if(score === numToMatch) {
            wins++;
            alert("You win!!");
            $("#wins").text("Wins: " + wins);
            reset();
        }
    
        else if(score > numToMatch) {
            losses++;
            alert("You lose!!");
            $("#losses").text("Losses: " + losses);
            reset();
        }
        
    });
    $("#crystal4").on("click", function() {
        score = score + crystalNumberFour;
        $("#user-score").text(score);

        if(score === numToMatch) {
            wins++;
            alert("You win!!");
            $("#wins").text("Wins: " + wins);
            reset();
        }
    
        else if(score > numToMatch) {
            losses++;
            alert("You lose!!");
            $("#losses").text("Losses: " + losses);
            reset();
        }
         
    });

    // add numbers together
    // function adder() {
    //     score += crystalNumberFour ++;
    //     score += crystalNumberThree;
    //     score += crystalNumberTwo;
    //     score += crystalNumberOne;
    // }

    // determines wins and losses
    if(score === numToMatch) {
        wins++;
        alert("You win!!");
        $("#score").text("Wins: " + wins);
        // $("#random-number").text(numToMatch);
        // $("#user-score").text(score);
    }

    if(score > numToMatch) {
        losses++;
        alert("You lose!!");
        $("#score").text("Losses: " + losses);
        // $("#random-number").text(numToMatch);
        // $("#user-score").text(score);
    }

});







// try 2
// // Define variables
// var numToMatch = Math.floor(Math.random() *120) +19;
// console.log(numToMatch);
// var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // var crystalNumberOne;
// // var crystalNumberTwo = Math.floor(Math.random() *12) +1;
// // var crystalNumberThree = Math.floor(Math.random() *12) +1;
// // var crystalNumberFour = Math.floor(Math.random() *12) +1;
// var wins = 0;
// var losses = 0;
// var score = 0;
// // var crystals = $("#crystals-spot");
// // console.log(crystalNumbers);
// // var numberChoices = crystalNumbers[Math.floor(Math.random() *12) +1];
// // console.log(numberChoices);

// // var crystalAdder = crystalNumberOne + crystalNumberTwo + crystalNumberThree + crystalNumberFour;
// // console.log(crystalAdder);


// $(document).ready(function() {
//     $("#random-number").text(numToMatch);
//     $("#user-score").text(score);
//     // $(".crystal").text(crystalNumbers);
//     // $("#crystal2").text(crystalNumbers);
//     // $("#crystal3").text(crystalNumbers);
//     // $("#crystal4").text(crystalNumbers);

//     for(var i = 0; i < crystalNumbers.length; i++) {
//         // var crystalInfo = $(".crystals");
//         // // crystal.addClass("crystal-image");

//         // crystalInfo.attr("data-crystalvalue", crystalNumbers[i]);
//         // // console.log(crystalNumbers[i]);
      
//     }
//     // on click, add crystal number to score number
//     $("#crystals-spot").on("click", function() {
//         var crystalValue = crystalNumbers[i];
//         crystalValue = parseInt(crystalValue);
//         $("#user-score").text( crystalValue += score);
//         console.log(crystalValue);


         
//     });
//     // $("#crystal2").on("click", function() {
//     //     $("#total-score").text(crystalNumberTwo += score);
       
//     // });
//     // $("#crystal3").on("click", function() {
//     //     $("#total-score").text(crystalNumberThree += score);
        
//     // });
//     // $("#crystal4").on("click", function() {
//     //     $("#total-score").text(crystalNumberFour += score);
         
//     // });

//     if(score === numToMatch) {
//         wins++;
//         alert("You win!!");
//         $("#score").text("Wins: " + wins);
//     }

//     if(score > numToMatch) {
//         losses++;
//         alert("You lose!!");
//         $("#score").text("Losses: " + losses);
//     }

// });