// Copy by hamza
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner("Guess Game", `GAME IS ON`, "green");
})();
let playerLife = 4;
let score = 0;
let highSco = 50;
let newScoreMassage = [
    "Congratulations! You've set a new record! Keep soaring to new heights!",
    "Woohoo! You've smashed the previous record! Your achievements know no bounds!",
    "Amazing! You've achieved a new record! Your dedication and hard work are truly commendable!",
    "Bravo! A new record! Your unwavering determination and excellence have paid off!",
    "Impressive! You've raised the bar and set a new record! Your passion and commitment are truly exceptional!",
];
// --------  Continue Function  -------------
async function con() {
    console.log(chalk.green(`Congratulation!! Your guess the right number`));
    score += 10;
    console.log(chalk.yellow(`Your score is ${score}.`));
    playerLife = 4;
    await askQusestion();
}
// --------  Main Game prompt Function  -------------
async function askQusestion() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    do {
        playerLife--;
        console.log(chalk.rgb(251, 151, 63)(`Player life left ${playerLife}`));
        var que = await inquirer.prompt([
            {
                type: "number",
                name: "user_num",
                message: chalk.rgb(195, 80, 44)("Select any number between 1 - 6: "),
            },
        ]);
        if (que.user_num === randomNum) {
            con();
        }
        else if (que.user_num < randomNum) {
            console.log(chalk.red(`Your number ${que.user_num} is less than guess number.`));
            console.log(chalk.yellow(`Your score is ${score}.`));
        }
        else if (que.user_num > randomNum) {
            console.log(chalk.red(`Your number ${que.user_num} is greater than guess number.`));
            console.log(chalk.yellow(`Your score is ${score}.`));
        }
    } while (playerLife > 1 && randomNum !== que.user_num);
    gameOver();
}
// --------  Game Over - Total score - Powerde BY  -------------
async function gameOver() {
    if (playerLife == 1) {
        console.log(chalk.rgb(78, 86, 169)(`Total Score ${score}.`));
        high_score();
        console.log(chalk.redBright(`GAME OVER!!`));
        console.log(chalk.rgb(30, 215, 174)(`Powered By - Hamza`));
        startAgaian();
    }
}
async function gameStart() {
    setTimeout(() => {
        askQusestion();
    }, 1000);
}
gameStart();
// --------  Start Again and Again Funtion  -------------
async function startAgaian() {
    var restart = await inquirer.prompt([
        {
            type: "input",
            name: "start_again",
            message: chalk.grey("Do you want play more? Press Y or N: "),
        },
    ]);
    if (restart.start_again === "y" ||
        restart.start_again === "Y" ||
        restart.start_again === "yes" ||
        restart.start_again === "YES") {
        playerLife = 4;
        console.log(chalk.rgb(164, 39, 163)(`High Score ${highSco}.`));
        score = 0;
        gameStart();
    }
}
// --------  Hight Score Function  -------------
async function high_score() {
    if (highSco < score) {
        let randomNum2 = Math.floor(Math.random() * 4 + 1);
        console.log(chalk.rgb(164, 39, 163)(newScoreMassage[randomNum2]));
        highSco = score;
    }
}
