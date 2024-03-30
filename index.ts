#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000; // Dollars

let myPin = 1000;
let myAcctype = "Saving Account";

console.log(chalk.blue("\n \tWelcome to Khalid Shaikh - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
  {
    type: "number",
    name: "pincode",
    message: chalk.yellow("Enter Your Pin Code",)
  },
]);
if (pinAnswer.pincode === myPin) {
  console.log(chalk.green("Pin Code is Correct sucessfully"));
  
    let operationAns = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: chalk.green("Select an operation:"),
      choices: ["withdraw Amount", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "withdraw Amount") {
    let withrawAns = await inquirer.prompt([
      {
        type: "list",
        name: "withdrawMethod",
        message: chalk.green("Select a withrawal method"),
        choices: ["Fast Cash", "Enter Amount"],
      },
    ]);
    if (withrawAns.withdrawMethod === "Fast Cash") {
      let fastCasAns = await inquirer.prompt([
        {
          type: "list",
          name: "fasCash",
          message: chalk.green("Select Amount Method"),
          choices: [1000, 2000, 5000, 10000, 20000]
        },
      ]);
      if (fastCasAns.fasCash > myBalance) {
        console.log(chalk.red("Insufficient Balance"));
      } else {
        myBalance -= fastCasAns.fasCash;
        console.log(`${fastCasAns.fasCash} withraw amount sucessfully`);
        console.log(`Your remaining Balance is:${myBalance}`);
      }
    } else if (withrawAns.withdrawMethod === "Enter Amount") {
      let amountAns = await inquirer.prompt([
        {
          type: "number",
          name: "amount",
          message: chalk.green("Enter your amount to withdraw:"),
        },
      ]);
      if (amountAns.amount > myBalance) {
        console.log(chalk.red("Insufficient Balance"));
      } else {
        myBalance -= amountAns.amount;
        console.log(chalk.blue(`${amountAns.amount} withraw amount sucessfully`));
        console.log(chalk.blue(`Your remaining Balance is:${myBalance}`));
      }
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log(chalk.blue(`Your Current Balance is:${myBalance}`));
  }
} else {
  console.log(chalk.red("Your Pin Code is incorrect, please try again"));
}
