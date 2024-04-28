import PuzzleController from '@/controllers/PuzzleController';
import PuzzleModel from '@/models/PuzzleModel';
import PuzzleView from '@/views/PuzzleView';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) throw new Error('Root container not found');

  const size = 4;
  const puzzleModel = new PuzzleModel({ size });
  const puzzleView = new PuzzleView({ size });
  new PuzzleController(puzzleModel, puzzleView);

  root.append(puzzleView.render());
});
