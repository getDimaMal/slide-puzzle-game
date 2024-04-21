import BoardView from '../ui/Board';
import Tile from '../ui/Tile';

export type PuzzleViewProps = {
  size: number;
  board: number[][];
};

class PuzzleView {
  boardView: HTMLElement;
  tilesView: HTMLElement[];

  constructor(private props: PuzzleViewProps) {
    const { size, board } = this.props;

    this.boardView = new BoardView({ size }).render();
    this.tilesView = [];

    this.update(board);
  }

  update(board: number[][]) {
    this.tilesView.forEach((tile) => tile.remove());
    this.tilesView = [];

    for (const row of board) {
      for (const value of row) {
        const tile = new Tile({ value }).render();
        this.boardView.append(tile);
        this.tilesView.push(tile);
      }
    }
  }

  render() {
    return this.boardView;
  }
}

export default PuzzleView;
