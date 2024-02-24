import Player from './components/Player/Player.jsx';
import GameBoard from './components/GameBoard/GameBoard';
import { useRef, useState } from 'react';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';
import './assets/styles/quizGrid.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BonesPage from './pages/BonesPage.jsx';
import MusclesPage from './pages/MusclesPage.jsx';
import HomePage from "./pages/HomePage.jsx";
import TicTacToePage from "./pages/TicTacToePage.jsx";

const router = createBrowserRouter([
  { path: '/',  element: <HomePage />},
  { path: '/tictactoe',  element: <TicTacToePage /> },
  { path: '/muscles',  element: <MusclesPage /> },
  { path: '/bones',  element: <BonesPage /> },
  // { path: '',  element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
