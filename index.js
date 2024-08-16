#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    JPY: 109.45,
    GBP: 0.82,
    EUR: 0.92,
    PKR: 277.91,
};
let currencyAns = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "JPY", "GBP", "EUR", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "JPY", "GBP", "EUR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let fromAmount = currency[currencyAns.from];
let toAmount = currency[currencyAns.to];
let userAmount = currencyAns.amount;
let baseCurrency = userAmount / fromAmount;
let result = baseCurrency * toAmount;
console.log(result);
