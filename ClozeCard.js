var fs = require("fs");

//CONSTRUCTOR
function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.partial = this.text.replace(this.cloze, '......');

  this.makeCloze = function() {
    var dataCloze = {
      text: this.text,
      cloze: this.cloze,
      partial: this.partial,
      type: "cloze"
    };
    fs.appendFile("log.txt", JSON.stringify(dataCloze, null, 2) + ";" + "\n", function(error) {
      if (error) {
        console.log(error);
      }
    });
  };
}


module.exports = ClozeCard;
