import PuzzleModel from './models/PuzzleModel';
import './styles/main.scss';
import PuzzleView from './views';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) throw new Error('Root container not found');

  const size = 4;
  const puzzleModel = new PuzzleModel({ size });
  const puzzleView = new PuzzleView({ size, board: puzzleModel.getBoard() });

  setInterval(() => {
    const board = Array(size)
      .fill(null)
      .map(() =>
        Array(size)
          .fill(null)
          .map(() => Math.floor(Math.random() * size ** 2)),
      );

    puzzleView.update(board);
  }, 1000);

  root.append(puzzleView.render());
});
