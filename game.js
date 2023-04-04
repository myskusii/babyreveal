// get the canvas element and its 2D context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// define the colors for the gender reveal
var boyColor = "#2196F3";
var girlColor = "#E91E63";

// define the function to reveal the gender
function revealGender() {
    // get the user's guess from the form
    var guess = document.getElementById("guess").value;

    // generate a random gender (0 for boy, 1 for girl)
    var gender = Math.floor(Math.random() * 2);

    // check if the guess is correct
    var isCorrect = (guess == (gender == 0 ? "menino" : "menina"));

    // draw the gender reveal result on the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = (gender == 0 ? boyColor : girlColor);
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    ctx.fillText((gender == 0 ? "MENINO" : "MENINA"), canvas.width / 2, canvas.height / 2);
    if (isCorrect) {
        ctx.fillStyle = "green";
        ctx.fillText("Acertô, mizeravi!", canvas.width / 2, canvas.height * 0.8);
    } else {
        ctx.fillStyle = "red";
        ctx.fillText("Errôôô", canvas.width / 2, canvas.height * 0.8);
        ctx.fillText("O certo é " + (gender == 0 ? "menino." : "menina."), canvas.width / 2, canvas.height * 0.85);
    }
}
