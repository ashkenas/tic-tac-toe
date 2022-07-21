import { useEffect, useState } from "react";
import Player from "./player";
import "./TicTacToe.css";

function TicTacToe(props) {
    const [currentPlayer, setCurrentPlayer] = useState(Player.Player1);
    const [winner, setWinner] = useState(Player.None);
    const [board, setBoard] = useState([Player.None, Player.None, Player.None,
                                        Player.None, Player.None, Player.None,
                                        Player.None, Player.None, Player.None]);

    useEffect(() => void (winner !== Player.None && setTimeout(() => {
        setWinner(Player.None);
        setBoard([Player.None, Player.None, Player.None,
                  Player.None, Player.None, Player.None,
                  Player.None, Player.None, Player.None]);
    }, 5000)));

    const makeMove = (space) => {
        if (board[space] !== Player.None || winner !== Player.None)
            return;

        board[space] = currentPlayer;
        setBoard(board);
        setCurrentPlayer(currentPlayer === Player.Player1 ? Player.Player2 : Player.Player1);

        // Check for winner
        for (let i = 0; i < 3; i++) {
            if (board[i * 3] !== Player.None && board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2]) {
                setWinner(board[i * 3]);
                board[i * 3] = board[i * 3 + 1] = board[i * 3 + 2] = board[i * 3] === Player.Player1 ? Player.Player1Win : Player.Player2Win;
                return;
            } else if (board[i] !== Player.None && board[i] === board[i + 3] && board[i] === board[i + 6]) {
                setWinner(board[i]);
                board[i] = board[i + 3] = board[i + 6] = board[i] === Player.Player1 ? Player.Player1Win : Player.Player2Win;
                return;
            }
        }
        if (board[4] !== Player.None && board[4] === board[0] && board[4] === board[8]) {
            setWinner(board[4]);
            board[0] = board[4] = board[8] = board[4] === Player.Player1 ? Player.Player1Win : Player.Player2Win;
        } else if (board[4] !== Player.None && board[4] === board[2] && board[4] === board[6]) {
            setWinner(board[4]);
            board[2] = board[4] = board[6] = board[4] === Player.Player1 ? Player.Player1Win : Player.Player2Win;
        } else if (board.reduce((prev, curr) => prev + +(curr === Player.None), 0) === 0) {
            setWinner(Player.Tie);
        }
    };

    return (
        <div className="board">
            {board.map((player, i) =>
                <button key={i} className={`button ${player.name}`} onClick={makeMove.bind(null, i)}></button>
            )}
        </div>
    );
}

export default TicTacToe;