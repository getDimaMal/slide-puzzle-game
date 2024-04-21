import Board from './ui/Board';
import Tile from './ui/Tile';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const size = 4;
  const grid = Array(size)
    .fill(null)
    .map(() =>
      Array(size)
        .fill(null)
        .map(() => Math.floor(Math.random() * 9)),
    );

  const board = new Board({ size }).render();
  for (const row of grid) {
    for (const value of row) {
      const tile = new Tile({ value }).render();
      board.append(tile);
    }
  }

  root?.append(board);
});
