const Player = require("../src/player");

describe("Player", () => {
  it("starts with a rack of seven tiles", () => {
    let player = new Player();
    player.getRandomLetter();
    expect(player.rack.length).toEqual(7);
  });
});
