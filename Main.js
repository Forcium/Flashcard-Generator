// require basic flashcard module
var BasicCard = require('./BasicCard.js');
// require cloze flashcard module
var ClozeCard = require('./ClozeCard.js');
// require inquirer for getting user input at command line
var inquirer = require('inquirer');
// require fs
var fs = require('fs');



var cardMaker = function() {
inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "What card do you want to create?",
      choices: ["Basic Flashcard", "Cloze Flashcard"]
    }

  ]).then(function(choice) {

    if (choice.command === 'Basic Flashcard') {
      inquirer.prompt([
          {
            type: "input",
            name: "front",
            message: "What is the question?"
          },
          {
            type: "input",
            name: "back",
            message: "What is the answer?"
          }

      ]).then(function(answer) {

        var newBasic = new BasicCard(answer.front, answer.back);
        newBasic.makeBasic();
        nextChoice();
      });
    }
    if (choice.command === 'Cloze Flashcard') {
      inquirer.prompt([
        {
          type: "input",
          name: "text",
          message: "What is the full text?"
        },
        {
          type: "input",
          name: "cloze",
          message: "What is the cloze?"
        }
      ]).then(function(answer2) {
         var newCloze = new ClozeCard(answer2.text, answer2.cloze);
         newCloze.makeCloze();
         nextChoice();
      });
    }
  });
};


var nextChoice = function() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'nextChoices',
      message: 'What next?',
      choices: ["Make another card", "Done"]
    }
  ]).then(function(next) {
    if (next.nextChoices === "Make another card") {
      cardMaker();
    }
    else if (next.nextChoices === "Done") {
      console.log("Please view log.txt for all cards");
      return;
    }
  });
};



cardMaker();
