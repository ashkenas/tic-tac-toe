export default class Player {
    static None = new Player("none");
    static Player1 = new Player("player1");
    static Player1Win = new Player("player1win");
    static Player2 = new Player("player2");
    static Player2Win = new Player("player2win");

    constructor(name) { this.name = name; }
};
