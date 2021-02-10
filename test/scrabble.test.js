const Scrabble = require("../src/scrabble");

describe("Scrabble", () => {
  it("calculates score correctly", () => {
    let game = new Scrabble();
    expect(game.calculateScore("A")).toEqual(1);
    expect(game.calculateScore("AT")).toEqual(2);
  });
});
