// Copy by hamza

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
  console.log(chalk.yellow(`Your score is ${score}.`));
  playerLife = 4;
  await askQusestion();
}

async function askQusestion() {
  let randomNum: number = Math.ceil(Math.random() * 4 + 1);
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
    } else if (que.user_num < randomNum) {
      console.log(
        chalk.red(
          `Your number ${que.user_num} is less than guess number ${randomNum}.`
        )
      );
      console.log(chalk.yellow(`Your score is ${score}.`));
    } else if (que.user_num > randomNum) {
      console.log(
        chalk.red(
          `Your number ${que.user_num} is greater than guess number ${randomNum}.`
        )
      );
      console.log(chalk.yellow(`Your score is ${score}.`));
    }
  } while (playerLife > 1 && randomNum !== que.user_num);
  gameOver();
}

async function gameOver() {
  if (playerLife == 1) {
    console.log(chalk.grey(`Total Score ${score}.`));
    console.log(chalk.redBright(`GAME OVER!!`));
    startAgaian();
  }
}

async function gameStart() {
  setTimeout(() => {
    askQusestion();
  }, 1000);
}

gameStart();

async function startAgaian() {
  var restart = await inquirer.prompt([
    {
      type: "input",
      name: "start_again",
      message: chalk.grey("Do you want to restart the game? Press Y or N: "),
    },
  ]);
  if (
    restart.start_again === "y" ||
    restart.start_again === "Y" ||
    restart.start_again === "yes" ||
    restart.start_again === "YES"
  ) {
    gameStart();
  }
}
