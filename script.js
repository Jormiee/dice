document.getElementById("btnRoll").addEventListener("click", function () {
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = d1 + ".png";
    document.getElementById("dice2").src = d2 + ".png";
    document.getElementById("dice3").src = d3 + ".png";
    document.getElementById("dice4").src = d4 + ".png";
    document.getElementById("dice5").src = d5 + ".png";

    var score = calculateScore(d1, d2, d3, d4, d5);

    document.getElementById("btnRoll").setAttribute("data-correct-score", score);
});

document.getElementById("btnGuess").addEventListener("click", function () {
    var userGuess = parseInt(document.getElementById("txtGuess").value);

    var correctScore = parseInt(
        document.getElementById("btnRoll").getAttribute("data-correct-score")
    );

    if (userGuess === correctScore) {
        document.getElementById("result").textContent = "Correct You Got It!";
        document.getElementById("result").classList.add("correct");
    } else {
        document.getElementById("result").textContent = "Incorrect. Try again!";
        document.getElementById("result").classList.add("wrong");
    }
});

function calculateScore(d1, d2, d3, d4, d5) {
    var score = 0;
    var dice = [d1, d2, d3, d4, d5];

    for (var i = 0; i < dice.length; i++) {
        if (dice[i] === 3 || dice[i] === 5) {
            score += dice[i] === 3 ? 2 : 4;
        }
    }
    
    return score;
}