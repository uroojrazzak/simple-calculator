#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(233, 150, 55)("welcome to the calculator"));
console.log(chalk.magentaBright("lets begin the calculation "));
const answer = await inquirer.prompt([
    { message: chalk.yellow("Enter first number"), type: "number", name: "firstNumber" },
    { message: chalk.yellow("Enter second number"), type: "number", name: "secondNumber" },
    { message: chalk.greenBright("select one of the operator to perform operations"),
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"], }
]);
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
