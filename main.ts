#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.cyan("\n \t\t Welcome to 'Quiz Competition' - BEST OF LUCK \n\t"));
console.log("-*".repeat(40));


const quiz:  {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
    question_6: string;
    question_7: string;
    question_8: string;
    question_9: string;
    question_10: string;

    
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.dim("Q1.\n What is the correct way to check if two values are not equal in TypeScript?"),
        choices: ["i. a == b", "ii. a === b", "iii. a = b", "iv. a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.\n Which of the following characters is commonly allowed in variable name in TypeScript?",
        choices: ["i. $ ", "ii. @ ", "iii. #", "iv. &"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.\n Which operator is commonly used for string concatenation in TypeScript?",
        choices: ["i. + ", "ii. - ", "iii. * ", "iv. / "]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.\n In typeScript, Which symbol is commonly used to terminate a statement?",
        choices: ["i. . ", "ii. : ", "iii. ; ", "iv. , "]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.\n Which method of Inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["i. start()", "ii. prompt()", "iii. init()", "iv. run()"]
    },
    {
        name: "question_6",
        type: "list",
        message: "Q6.\n Which of the following countries was first to use a symbol for zero(0) ?",
        choices: ["i. Japan", "ii. United kingdom", "iii. China", "iv. India"]
    },
    {
        name: "question_7",
        type: "list",
        message: "Q7.\n What is the largest Ocean in the World?",
        choices: ["i. Antarctica", "ii. Pacific", "iii. London", "iv. Dubai"]
    },
    {
        name: "question_8",
        type: "list",
        message: "Q8.\n Which is the most populated city?",
        choices: ["i. Tokyo", "ii. New York", "iii. Paris", "iv. London"]
    },
    {
        name: "question_9",
        type: "list",
        message: "Q9.\n What is the Capital of France?",
        choices: ["i. Paris", "ii. Berlin", "iii. Monaco", "iv. Japan"]
    },
    {
        name: "question_10",
        type: "list",
        message: "Q10.\n The Sun is....?",
        choices: ["i. A Moon", "ii. A Comet ", "iii. A Star", "iv. A Planet"]
    }
]);

let score: number = 0;

switch(quiz.question_1){
    case "iv. a !== b":
        console.log(chalk.bold.green("\n  1. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("1. Incorrect!"));
}

switch(quiz.question_2){
    case "i. $":
        console.log(chalk.bold.green("\n  2. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("2. Incorrect!"));
}

switch(quiz.question_3){
    case "i. + ":
        console.log(chalk.bold.green("\n  3. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("3. Incorrect"));
}


switch(quiz.question_4){
    case "iii. ; ":
        console.log(chalk.bold.green("\n  4. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("4. Incorrect!"));
}


switch(quiz.question_5){
    case "ii. prompt()":
        console.log(chalk.bold.green("\n  5. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("5. Incorrect"));
}


switch(quiz.question_6){
    case "iv. India":
        console.log(chalk.bold.green("\n  6. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("6. Incorrect!"));
}


switch(quiz.question_7){
    case "ii. Pacific":
        console.log(chalk.bold.green("\n  7. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("7. Incorrect"));
}


switch(quiz.question_8){
    case "i. Tokyo":
        console.log(chalk.bold.green("\n  8. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("8. Incorrect!"));
}


switch(quiz.question_9){
    case "i. Paris":
        console.log(chalk.bold.green("\n  9. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("9. Incorrect!"));
}


switch(quiz.question_10){
    case "iii. A Star":
        console.log(chalk.bold.green("\n  10. Correct!\n\t"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("10. Incorrect!"));
}
console.log("-*".repeat(20));
console.log(`\t\t\n\tScore:${chalk.bold.magenta(score)}\n\t`);
console.log("-*".repeat(20));