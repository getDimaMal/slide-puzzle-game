import Board from './ui/Board';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const board = new Board({ size: 4 }).render();

  root?.append(board);
});
