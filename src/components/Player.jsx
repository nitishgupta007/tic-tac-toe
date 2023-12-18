import { useState } from 'react';

export default function Player({initialName, symbol, playerSymbol}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing(editing => !editing)
    }

    function handleChange(value) {
        setPlayerName(value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    console.log(playerSymbol, 'playerSymbolplayerSymbolplayerSymbolplayerSymbolplayerSymbol')
    console.log(symbol, 'symbolsymbolsymbolsymbol')
    if(isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={(e) => handleChange(e.target.value)} required />
    }

    return (
        <li className={playerSymbol == symbol ? 'active' : ''}>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
