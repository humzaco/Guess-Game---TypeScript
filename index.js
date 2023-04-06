import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner("Guess Game", `GAME IS ON`, "green");
})();
let playerLife = 4;
let score = 0;
async function con() {
    console.log(chalk.green(`Congratulation!! Your guess the right number`));
    score += 10;
    console.log(chalk.yellow(`Your score is ${score}`));
    playerLife = 3;
    await askQusestion();
}
async function askQusestion() {
    let randomNum = Math.ceil(Math.random() * 4 + 1);
    do {
        playerLife--;
        console.log(chalk.rgb(251, 151, 63)(`Player life left ${playerLife}`));
        var que = await inquirer.prompt([
            {
                type: "number",
                name: "user_num",
                message: chalk.rgb(195, 80, 44)("Select any number between 1 - 5: "),
            },
        ]);
        if (que.user_num === randomNum) {
            con();
        }
        else if (que.user_num < randomNum) {
            console.log(chalk.red(`Your number ${que.user_num} is less than guess number.`));
        }
        else if (que.user_num > randomNum) {
            console.log(chalk.red(`Your number ${que.user_num} is greater than guess number.`));
        }
    } while (playerLife > 0 && randomNum !== que.user_num);
    if (playerLife == 0) {
        console.log(chalk.yellowBright(`Total Score ${score}`));
        console.log(chalk.redBright(`GAME OVER!!`));
    }
}
setTimeout(() => {
    askQusestion();
}, 1000);
// await  stratAgain();
// var restart =  await inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "start_again",
//             message: chalk.grey("Do you want to restart the game? Press Y or N: "),
//         }
//     ])
//     restart.start_again === "y" || restart.start_again === "Y" || restart.start_again === "yes" || restart.start_again === "YES"
