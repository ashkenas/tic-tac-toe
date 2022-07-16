import { useState } from "react";
import Player from "./player";
import styles from "./TicTacToe.css";

function TicTacToe(props) {
    const [currentPlayer, setCurrentPlayer] = useState(Player.Player1);
    const [board, setBoard] = useState([Player.None, Player.None, Player.None,
                                        Player.None, Player.None, Player.None,
                                        Player.None, Player.None, Player.None]);

    const makeMove = (space) => setBoard(oldBoard => {
        oldBoard[space] = currentPlayer;
        setCurrentPlayer(lastPlayer => lastPlayer === Player.Player1 ? Player.Player2 : Player.Player1);
        return oldBoard;
    });

    return (
        <div className={styles.board}>
            {board.map((player, i) =>
                <button key={i} className={styles[player.name]} onClick={player === Player.None ? makeMove.bind(i) : ()=>{}}></button>
            )}
        </div>
    );
}

export default TicTacToe;