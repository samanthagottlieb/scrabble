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
      G: 2,
      U: 1,
      R: 1,
      D: 2,
      I: 1,
      N: 1,
    };

    return points[letter];
  }
}

module.exports = Scrabble;
