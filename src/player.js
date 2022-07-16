export default class Player {
    static None = new Player("none");
    static Player1 = new Player("player1");
    static Player2 = new Player("player2");

    constructor(name) { this.name = name; }
};
