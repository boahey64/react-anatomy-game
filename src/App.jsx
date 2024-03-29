import Player from './components/Player/Player.jsx';
import GameBoard from './components/GameBoard/GameBoard';
import { useRef, useState } from 'react';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';
import './assets/styles/quizGrid.css';
import { Route, Routes, useNavigate } from 'react-router';
import Knochen from './selection/Knochen.jsx';
import Muskel from './selection/Muskel.jsx';

const PLAYERS = { X: 'Player 1', O: 'Player 2' };

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const inputRef = useRef(null);

  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  // const navigate = useNavigate();

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <>
      <main>
        <section className="quiz-grid">
          <h1>Advanced Anatomy</h1>

          {/*<Routes>*/}
          {/*  <Route path="/quiz/bones" element={<Knochen />} />*/}
          {/*  <Route path="/quiz/muscles" element={<Muskel />} />*/}
          {/*</Routes>*/}

          <div className="quiz-preview">
            <div className="quiz-picture" data-keywords="Knochen">
              <img
                  src="thumbnails/FemurThumbnail.png"
                  alt="Hand drawn tic tac toe game board"
              />
            </div>
          </div>
          <div className="quiz-preview">
            <div className="quiz-picture" data-keywords="Knochen">
              <img
                  src="thumbnails/MuskelnThumbnail2.png"
                  alt="Hand drawn tic tac toe game board"
              />
            </div>
          </div>
          {/*<button className="quiz-preview">*/}
          {/*  <a href="./selection/Knochen.jsx">*/}
          {/*    <div className="quiz-picture" data-keywords="Knochen">*/}
          {/*      <img*/}
          {/*          className="thumbnail"*/}
          {/*          src="thumbnails/FemurThumbnail.png"*/}
          {/*          onContextMenu="return false;"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div className="quiz-info">Knochen</div>*/}
          {/*  </a>*/}
          {/*</button>*/}

          {/*  <button className="quiz-preview">*/}
          {/*    <a href="./selection/Muskel.jsx">*/}
          {/*      <div className="quiz-picture" data-keywords="Knochen">*/}
          {/*        <img*/}
          {/*          className="thumbnail"*/}
          {/*          src="thumbnails/MuskelnThumbnail2.png"*/}
          {/*          onContextMenu="return false;"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <div className="quiz-info">Muskeln</div>*/}
          {/*    </a>*/}
          {/*  </button>*/}
        </section>
        {/*************************************************/}

        <div id={'game-container'}>
          <ol id="players" className={'highlight-player'}>
            <Player
                initialName={PLAYERS.X}
                symbol={'X'}
                isActive={activePlayer === 'X'}
              onChangeName={handlePlayerNameChange}
            />
            <Player
              initialName={PLAYERS.O}
              symbol={'O'}
              isActive={activePlayer === 'O'}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
      {/*<ReviewInput />*/}
    </>
  );
}

export default App;
