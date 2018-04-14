var Letter = require("./letter");

var Word = function(myWord) {
    //Take chosen word from word list.
    this.myWord = myWord;
    //This is an array of letters representing the letters of the random chosen word.
    this.letters = [];
    //This is an array of underscores representing the number of underscores needed for the random chosen word 
    //This is based on the number of letters in the word.
    this.underscores = [];
    //After  random word from the word list,  use the split method to add the letters to the this.letters array.
    this.splitWord = function() {
        this.letters = this.myWord.split("");
        //Determine number of underscores needed based on length of this.letters array in the Word constructor.
        numberUnderscoresNeeded = this.letters.length;
        //Use the .join method to join each underscore that pushed to the this.underscores array by a space.
        console.log(this.underscores.join(" "));
    }
    this.generateLetters = function() {
        for (i=0; i < this.letters.length; i++){
            this.letters[i] = new Letter (this.letters[i]);
            this.letters[i].showCharacter();
        }
    }
}
//Export the Word constructor as a reference in index.js.
module.exports = Word;