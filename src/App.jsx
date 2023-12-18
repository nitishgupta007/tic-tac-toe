import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [playerSymbol, setPlayerSymbol] = useState('X')
  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X"  playerSymbol={playerSymbol} />
        <Player initialName="Player 2" symbol="O"  playerSymbol={playerSymbol} />
      </ol>
      <GameBoard playerSymbol={playerSymbol} setPlayerSymbol={setPlayerSymbol}/>
    </div>
  </main>
}

export default App
