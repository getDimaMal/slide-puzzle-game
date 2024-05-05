import PuzzleModel from '@/models/PuzzleModel';
import PuzzleView from '@/views/PuzzleView';

class PuzzleController {
  constructor(
    private model: PuzzleModel,
    private view: PuzzleView,
  ) {
    this.view.render(this.model.getGrid());
    this.view.onTileClick = this.moveTile.bind(this);
  }

  private async moveTile(row: number, col: number) {
    const [newRow, newCol] = this.model.moveTile(row, col);
    await this.view.slide(row, col, newRow, newCol);
    this.view.render(this.model.getGrid());
  }
}

export default PuzzleController;
