


import React, { useState } from 'react'
import Squares from './Squares'

export default function Board() {
    const [state, setstate] = useState(Array(9).fill(null));

    const [isXturn, setIsXturn] = useState(true)

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }

        }
        return false;

    }

    const isWinner = checkWinner();

    const handleClick = (i) => {

        // console.log("clicked on index :" +i)
        if (state[i] != null) {
            return;
        }
        const copyState = [...state];
        copyState[i] = isXturn ? 'X' : 'O';
        setstate(copyState);
        setIsXturn(!isXturn);

    }
    const handleReset = () => {
        setstate(Array(9).fill(null));
        setIsXturn(true);
    }
    return (
        <div className='board-container'>

            {isWinner ? <> {isWinner} won <button onClick={handleReset}>Play Again</button></> :
                <>
                    <h2>Player {isXturn ? 'X' : 'O'} please move -</h2>
                    <div className="board-row">
                        <Squares value={state[0]} onClick={() => handleClick(0)} />
                        <Squares value={state[1]} onClick={() => handleClick(1)} />
                        <Squares value={state[2]} onClick={() => handleClick(2)} />
                    </div>
                    <div className="board-row">
                        <Squares value={state[3]} onClick={() => handleClick(3)} />
                        <Squares value={state[4]} onClick={() => handleClick(4)} />
                        <Squares value={state[5]} onClick={() => handleClick(5)} />
                    </div>
                    <div className="board-row">
                        <Squares value={state[6]} onClick={() => handleClick(6)} />
                        <Squares value={state[7]} onClick={() => handleClick(7)} />
                        <Squares value={state[8]} onClick={() => handleClick(8)} />
                    </div>
                </>
            }
        </div>
    )
}
