$(document).ready(function () {
    // Initialize variables for score, wins, losses
    var score = 0;
    var losses = 0;
    var wins = 0;
    // Generate number to match and display 
    var randomNumber = randomNumberGen(19, 120);
    $("#random-number").text(randomNumber)

    function randomNumberGen(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
    
    $(".gems").on("click", function () {
        crystalValue = parseInt($(this).val());
        console.log("crystal value : " + crystalValue);
        score = score + crystalValue;
        console.log("score: " + score);
        $("#score").text(score)
        if (score == randomNumber) {
            wins++;
            alert("You Won")
            $("#wins").text(wins)
            restartGame();
        } else if (score > randomNumber) {
            losses++;
            alert("You Lost ! Try again");
            $("#losses").text(losses);
            restartGame()
        }
    })

    function restartGame() {
        randomNumber = randomNumberGen(1, 100);
        $("#random-number").text(randomNumber)
        score = 0;
        $("#score").text(score)
        for (let i = 0; i < $(".gems").length; i++) {
            var gemValue = randomNumberGen(1, 20);
            $("#b-" + i).val(gemValue)

        }
    }
    restartGame();


})