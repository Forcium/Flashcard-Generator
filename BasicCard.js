var fs = require("fs");

//CONSTRUCTOR
function BasicCard(front, back) {
  this.front = front;
  this.back = back;


  //creating flashcard object to append to log.txt
  this.makeBasic = function() {
    var dataBasic = {
      front: this.front,
      back: this.back,
      type: "basicCard",
    };

    //appending flashcard object to log.txt
    fs.appendFile("log.txt", JSON.stringify(dataBasic, null, 2) + ";" + "\n", function(error){
      if(error) {
        console.log(error);
      }
    });
  };
}
module.exports = BasicCard;


//console.log(JSON.stringify(theMatrix.cast, null, 2) + "\n");
