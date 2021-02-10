class Scrabble {
  calculateScore(letter) {
    if (letter === "A") {
      return 1;
    } else {
      return 2;
    }
  }
}

module.exports = Scrabble;
