import PuzzleController from '@/controllers/PuzzleController';
import PuzzleModel from '@/models/PuzzleModel';
import PuzzleView from '@/views/PuzzleView';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) throw new Error('Root container not found');

  const model = new PuzzleModel();
  const view = new PuzzleView(root);
  new PuzzleController(model, view);
});
