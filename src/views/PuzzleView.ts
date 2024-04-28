import Board from '@/ui/Board';
import Tile from '@/ui/Tile';

export type PuzzleViewProps = {
  size: number;
};

class PuzzleView {
  board: HTMLElement;
  tiles: HTMLElement[];

  constructor(private props: PuzzleViewProps) {
    const { size } = this.props;

    this.board = new Board({ size }).render();
    this.tiles = [];
    this.update([]);
  }

  update(board: number[][]) {
    this.tiles.forEach((tile) => tile.remove());
    this.tiles = [];

    for (const row of board) {
      for (const value of row) {
        const tile = new Tile({ value }).render();
        this.board.append(tile);
        this.tiles.push(tile);
      }
    }
  }

  render() {
    return this.board;
  }
}

export default PuzzleView;
