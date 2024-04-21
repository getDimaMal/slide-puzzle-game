import PuzzleModel from './models/PuzzleModel';
import Board from './ui/Board';
import Tile from './ui/Tile';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) throw new Error('Root container not found');

  const size = 4;
  const board = new Board({ size }).render();
  const puzzleModel = new PuzzleModel({ size });

  for (const row of puzzleModel.getBoard()) {
    for (const value of row) {
      const tile = new Tile({ value }).render();
      board.append(tile);
    }
  }

  root.append(board);
});
