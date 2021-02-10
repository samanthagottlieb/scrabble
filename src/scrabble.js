class Scrabble {
  calculateScore(letters) {
    let score = 0;
    let lettersArray = letters.split("");

    lettersArray.forEach((letter) => {
      let letterPoints = this.calculatePoints(letter);
      score += letterPoints;
    });

    return score;
  }

  calculatePoints(letter) {
    const points = {
      A: 1,
      B: 3,
      T: 1,
    };

    return points[letter];
  }
}

module.exports = Scrabble;
