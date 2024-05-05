import Board from '@/ui/Board';
import Tile from '@/ui/Tile';

class PuzzleView {
  private tiles: Tile[][] = [];
  public onTileClick!: (row: number, col: number) => void;

  constructor(private root: HTMLElement) {}

  private initialRender(grid: number[][]) {
    const board = new Board(this.root).render(grid.length);

    grid.forEach((row, rowIndex) => {
      this.tiles.push([]);
      row.forEach((value, colIndex) => {
        this.tiles[rowIndex].push(new Tile(board));
        this.tiles[rowIndex][colIndex].render(value);
        this.tiles[rowIndex][colIndex].onClick = () => this.onTileClick(rowIndex, colIndex);
      });
    });
  }

  slide<T extends number>(row: T, col: T, newRow: T, newCol: T) {
    return this.tiles[row][col].slide(newRow, newCol);
  }

  render(grid: number[][]) {
    if (this.tiles.length) {
      grid.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
          this.tiles[rowIndex][colIndex].render(value);
        });
      });
    } else {
      this.initialRender(grid);
    }
  }
}

export default PuzzleView;
