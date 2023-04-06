import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner('Guess Game', 'Start Game', 'green');
})();
let playerLife = 3;
async function askQusestion() {
    let randomNum = Math.ceil(Math.random() * 10 + 1);
    do {
        playerLife--;
        var que = await inquirer
            .prompt([
            {
                type: "number",
                name: "user_num",
                message: "Select any number between 1 - 10: ",
            }
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
}
setTimeout(() => {
    askQusestion();
}, 1000);
