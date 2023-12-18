import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({playerSymbol, setPlayerSymbol}) {

    const [ gameBoard, setGameBoard] = useState(initialGameBoard);
   
    function handleSelectSquare(rowIndex, colIndex) {
        setPlayerSymbol((playerSymbol) => {
            let playerUpdatedSymbol = playerSymbol;
            playerUpdatedSymbol = playerUpdatedSymbol === 'X' ? 'O' : 'X'
            return playerUpdatedSymbol;
        })
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = playerSymbol;
            return updatedBoard
        })
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) =>
        <li key={rowIndex}>
            <ol>
                {
                    row.map((playerSymbo, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)} disabled={playerSymbo != null}>{playerSymbo}</button>
                    </li>
                )}
            </ol>
        </li>
        )}
    </ol>
}