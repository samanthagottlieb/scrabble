class Player {
  constructor() {
    this.rack = [];
  }

  getRandomLetter() {
    for (let i = 0; i < 7; i++) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";

      const randomCharacter =
        alphabet[Math.floor(Math.random() * alphabet.length)];

      this.rack.push(randomCharacter);
    }
  }
}

module.exports = Player;
