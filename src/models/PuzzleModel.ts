class PuzzleModel {
  private grid: number[][];
  private blankRow!: number;
  private blankCol!: number;

  constructor() {
    this.grid = this.shuffleGrid(this.genGrid(4));
    this.locateBlank();
  }

  private genGrid(size: number) {
    const board = Array.from({ length: size }, (_, row) =>
      Array.from({ length: size }, (_, col) => row * size + col + 1),
    );

    board[size - 1][size - 1] = 0;

    return board;
  }

  private shuffleGrid(grid: number[][]) {
    return grid;
  }

  private locateBlank() {
    for (const [rowIndex, row] of Object.entries(this.grid)) {
      for (const [colIndex, value] of Object.entries(row)) {
        if (!value) {
          this.blankRow = Number(rowIndex);
          this.blankCol = Number(colIndex);
          return;
        }
      }
    }
  }

  moveTile(row: number, col: number) {
    const newRow = this.blankRow - row;
    const newCol = this.blankCol - col;

    if (Math.abs(newRow + newCol) === 1) {
      const blankRow = this.blankRow;
      const blankCol = this.blankCol;
      [this.grid[blankRow][blankCol], this.grid[row][col]] = [this.grid[row][col], this.grid[blankRow][blankCol]];

      this.blankRow = row;
      this.blankCol = col;
      return [newRow, newCol];
    }
    return [0, 0];
  }

  getGrid() {
    return this.grid;
  }
}

export default PuzzleModel;
