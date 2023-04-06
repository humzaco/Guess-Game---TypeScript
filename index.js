import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner("Guess Game", "Start Game", "green");
})();
let playerLife = 4;
async function askQusestion() {
    let randomNum = Math.ceil(Math.random() * 10 + 1);
    do {
        playerLife--;
        console.log(chalk.rgb(251, 151, 63)(`Player life left ${playerLife}`));
        var que = await inquirer.prompt([
            {
                type: "number",
                name: "user_num",
                message: chalk.rgb(195, 80, 44)("Select any number between 1 - 10: "),
            },
        ]);
        if (que.user_num === randomNum) {
            console.log(chalk.green(`Congratulation!! Your guess the right number`));
        }
        else if (que.user_num < randomNum) {
            console.log(chalk.red(`Your number ${que.user_num} is less than guess number.`));
        }
        else if (que.user_num > randomNum) {
            console.log(chalk.red(`Your number ${que.user_num} is greater than guess number.`));
        }
    } while (playerLife > 0 && randomNum !== que.user_num);
    if (playerLife == 0) {
        console.log(chalk.redBright(`GAME OVER!!`));
    }
}
async function stratAgain() {
    do {
        console.clear();
        playerLife = 4;
        await askQusestion();
        var restart = await inquirer
            .prompt([
            {
                type: "input",
                name: "start_again",
                message: "Do you want to restart the game? Press Y or N: ",
            }
        ]);
    } while (restart.start_again === "y" || restart.start_again === "Y" || restart.start_again === "yes" || restart.start_again === "YES");
}
setTimeout(() => {
    stratAgain();
}, 1000);
