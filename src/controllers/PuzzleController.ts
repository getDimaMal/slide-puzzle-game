import PuzzleModel from '../models/PuzzleModel';
import PuzzleView from '../views/PuzzleView';

class PuzzleController {
  constructor(
    private model: PuzzleModel,
    private view: PuzzleView,
  ) {
    this.view.update(this.model.getBoard());
    this.setClickListener();
  }

  private setClickListener() {
    this.view.board.addEventListener('click', () => this.update());
  }

  private update() {
    const board = Array(4)
      .fill(null)
      .map(() =>
        Array(4)
          .fill(null)
          .map(() => Math.floor(Math.random() * 15)),
      );

    this.model.setBoard(board);
    this.view.update(this.model.getBoard());
  }
}

export default PuzzleController;
