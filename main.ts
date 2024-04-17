#! /user/bin/env node

import inquirer from "inquirer"

const answere: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence:"
    }
])

const words = answere.Sentence.trim().split(" ")

console.log(words);

console.log(` Your sentence word count is ${words.length}`)