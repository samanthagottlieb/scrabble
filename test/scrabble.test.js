const Scrabble = require("../src/scrabble");

describe("Scrabble", () => {
  it("calculates score correctly", () => {
    let game = new Scrabble();
    expect(game.calculateScore("A")).toEqual(1);
    expect(game.calculateScore("AT")).toEqual(2);
    expect(game.calculateScore("BAT")).toEqual(5);
    expect(game.calculateScore("GUARDIAN")).toEqual(5);
  });
});
