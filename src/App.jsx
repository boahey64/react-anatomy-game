import './assets/styles/quizGrid.css';
import BonesPage from './pages/BonesPage.jsx';
import MusclesPage from './pages/MusclesPage.jsx';
import HomePage from './pages/HomePage.jsx';
import TicTacToePage from './pages/TicTacToePage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/tictactoe', element: <TicTacToePage /> },
  { path: '/muscles', element: <MusclesPage /> },
  { path: '/bones', element: <BonesPage /> },
  // { path: '',  element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
